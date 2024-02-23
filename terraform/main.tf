provider "azurerm" {
  features {}
}

terraform {
  backend "azurerm" {
    storage_account_name = "__storage_account__"
    container_name       = "__tf_container_name__"
    key                  = "terraform.tfstate"
    access_key           = "__storagekey__"
  }
}

# Get Resource Group Name from Variables file. RG will be created by Cloud team
data "azurerm_resource_group" "default" {
  name = "${var.rg}"
}

# Create App Service Plan
resource "azurerm_app_service_plan" "default" {
  name                = "${var.app_plan}"
  location            = "${data.azurerm_resource_group.default.location}"
  resource_group_name = "${data.azurerm_resource_group.default.name}"
  kind                = "${var.plan_type}"
  reserved = true

  sku {
    tier = "${var.plan_tier}"
    size = "${var.plan_sku}"
  }
}

# Create Web App, assign RG, App Service Plan, Set Configuration
resource "azurerm_app_service" "webapp" {
  name                = "${var.app_name}"
  location            = "${data.azurerm_resource_group.default.location}"
  resource_group_name = "${data.azurerm_resource_group.default.name}"
  app_service_plan_id = "${azurerm_app_service_plan.default.id}"

  identity {
    type = "SystemAssigned"
  }

  app_settings = {
    APPINSIGHTS_INSTRUMENTATIONKEY = "${azurerm_application_insights.app_insight.instrumentation_key}"
    WEBSITES_ENABLE_APP_SERVICE_STORAGE = false
  }

  site_config {
    always_on        = true
    linux_fx_version = "DOCKER|nginxdemos/hello"
  }
}

# App Insight
resource "azurerm_application_insights" "app_insight" {
  name                = "${var.app_name}-insight"
  location            = "${data.azurerm_resource_group.default.location}"
  resource_group_name = "${data.azurerm_resource_group.default.name}"
  application_type    = "web"
}