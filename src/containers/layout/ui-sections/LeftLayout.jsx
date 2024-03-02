import { useSelector } from "react-redux";
import { NavigationMenu } from "../../../components/dynamic-ui/uiComponentsConfig";
import { getNavigationMenuSchema } from "../../../schema-service/schemaService";
import { useState } from "react";

export default function LeftLayout() {
  const [navSchema, setNavSchema] = useState([
    {
      label: "Measurement Type",
      enabled: true,
      selected: true,
      name: "fpa_MeasurementType",
      ne_id: 0,
      np_id: 7,
      sn_id: 4347,
      step_order: 1,
      bu_code: "FLOW_PA_NEW",
      gui_type_code: "TEXT",
      attribute_code_json: "N/A",
      html_field_name: "fpa_MeasurementType",
      badges: []
    },
    {
      label: "Process Condition",
      enabled: true,
      selected: true,
      name: "fpa_ProcessCondition",
      sn_id: 4347,
      ne_id: 1,
      bu_code: "FLOW_PA_NEW",
      np_id: 7,
      element_label: "Process Condition",
      step_order: 2,
      gui_type_code: "TEXT",
      attribute_code_json: "N/A",
      html_field_name: "fpa_ProcessCondition",
      badges: []
    },
    {
      label: "Process Variable",
      enabled: true,
      selected: false,
      name: "fpa_lh_ProcessVariable",
      badges: [],
      sn_id: 4347,
      ne_id: 2,
      bu_code: "FLOW_PA_NEW",
      np_id: 7,
      element_label: "Process Variable",
      step_order: 3,
      left_right_anchor_flag: "L",
      gui_type_code: "TEXT",
      attribute_code_json: "N/A",
      html_field_name: "fpa_lh_processVariable"
    }
  ]);
  const buCode = useSelector((state) => state.initialBuData?.selectedBu);
  const schema_data = getNavigationMenuSchema(buCode, "NavigationMenu");
  console.log("NavigationMenu----------", schema_data);

  if (schema_data?.length > 0) {
    return (
      <NavigationMenu
        data={navSchema}
        label=""
        onDelete={() => {}}
        onSelect={function noRefCheck() {
          console.log("left navigation");
        }}
      />
    );
  }
  return <></>;

  // return (
  //   <div>
  //     {schema_data?.length > 0 && (
  //       <NavigationMenu
  //         data={schema_data}
  //         label=""
  //         onDelete={() => {}}
  //         onSelect={function noRefCheck() {}}
  //       />
  //     )}
  //   </div>
  // );
}
