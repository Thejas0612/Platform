# MSOL Dynamic Form

> 📢
The structure of this document follows the Architecture Decision Record template developed by Michael Nygard. For guidance or additional information, please visit: https://github.com/joelparkerhenderson/architecture-decision-record/tree/main/locales/en/templates/decision-record-template-by-michael-nygard

## 🚦 Status

Accepted

## 📜 Context

Since the CDS team manages the Component library, the MSOL team relies on the CDS team for updating or crafting new React components. Requesting updates or new React components from the CDS team, typical takes a turnaround time of two weeks or more.

Also, there's a possibility that the CDS team may prioritize or reject other requests. They may deem the requested component as not universally applicable to all Product Advisors or they might be dealing with blocked requests from another Product Advisor outside MSOL team.

As an illustration, the MSOL team has submitted the following requests which are yet to be addressed:

- Enhance the TileOrThumbnail component to include a checkbox.
- Develop a component for a compare products in a table.

Consequently, this situation has resulted in delays in the development of features related to Flow, Temperature, and Differential Pressure Flow Product Advisors.

## ✅ Decision

Create a new React Component that is extendable and backward compatible to the CDS's DynamicForm component. This replacement DynamicForm component will allow every MSOL Product Advisor team to create new components or update existing ones without a request to CDS team.

## ⚠️ Consequences

Ensuring backward compatibility with CDS's DynamicForm demands additional effort from the MSOL team. Whenever CDS updates the DynamicForm, we must revise our new React Component to maintain compatibility.

Also, we won't be able to migrate to CDS's DynamicForm until their team adopts our new components or provides compatible alternatives.