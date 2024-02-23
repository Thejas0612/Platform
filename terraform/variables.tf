# terraform/variables.tf
variable "rg" {
  type = string
  description = "Azure resource group"
  default = "__tf_resource_group__"
}

# Variable name for App service Plan
variable "app_plan" {
  type        = "string"
  description = "Name of the App Service Plan."
  default = "__tf_app_plan__"
}

variable "app_name" {
  type        = "string"
  description = "Name of the App Service Plan."
  default = "__tf_app_name__"
}

variable "plan_type" {
  type        = "string"
  description = "Type of App Service Plan"
  default = "__tf_plan_type__"
}

variable "plan_tier" {
  type        = "string"
  description = "SKU tier of the App Service Plan"
  default = "__tf_plan_tier__"
}

variable "plan_sku" {
  type        = "string"
  description = "SKU of the App Service Plan"
  default = "__tf_plan_sku__"
}