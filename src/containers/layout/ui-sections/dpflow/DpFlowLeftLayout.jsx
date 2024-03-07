import { useSelector } from "react-redux";
import { NavigationMenu } from "../../../../components/dynamic-ui/uiComponentsConfig";
import { getNavigationMenuSchema } from "../../../../schema-service/schemaService";
import { useEffect } from "react";

export default function DpFlowLeftLayout({ schema }) {
  const buCode = useSelector((state) => state.initialBuData?.selectedBu);
  const schema_data = getNavigationMenuSchema(buCode, "NavigationMenu", schema);
  document.title = "msol-dpflow-productadvisor";

  if (schema_data?.length > 0) {
    return (
      <NavigationMenu
        data={schema_data}
        label=""
        onDelete={() => {}}
        onSelect={function noRefCheck() {
          console.log("left navigation");
        }}
      />
    );
  }
  return <></>;
}
