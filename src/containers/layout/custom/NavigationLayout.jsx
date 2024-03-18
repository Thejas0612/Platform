import React from "react";
import { NavigationMenu } from "@emerson/dynamic-ui-public";
const NavigationComponent = () => {
  const navigationSchema = [
    {
      attribute_code_json: "N/A",
      badges: [],
      bu_code: "FLOW_PA_NEW",
      enabled: true,
      gui_type_code: "TEXT",
      html_field_name: "fpa_InstrumentType",
      label: "Instrument Type",
      name: "fpa_InstrumentType",
      ne_id: 263,
      np_id: 7,
      selected: true,
      sn_id: 4347,
      step_order: 1
    },
    {
      attribute_code_json: "N/A",
      badges: [],
      bu_code: "FLOW_PA_NEW",
      element_label: "Transmitter Requirement",
      enabled: true,
      gui_type_code: "TEXT",
      html_field_name: "fpa_TransimtterRequirement",
      label: "Transimitter Requirement",
      name: "fpa_TransmitterRequirement",
      ne_id: 264,
      np_id: 7,
      selected: false,
      sn_id: 4347,
      step_order: 2
    },
    {
      attribute_code_json: "N/A",
      badges: [],
      bu_code: "FLOW_PA_NEW",
      element_label: "Transmitter Selection",
      enabled: true,
      gui_type_code: "TEXT",
      html_field_name: "fpa_lh_TransmitterSelection",
      label: "Transmitter Selection",
      left_right_anchor_flag: "L",
      name: "fpa_lh_TransmitterSelection",
      ne_id: 266,
      np_id: 7,
      selected: false,
      sn_id: 4347,
      step_order: 3
    },
    {
      attribute_code_json: "N/A",
      badges: [],
      bu_code: "FLOW_PA_NEW",
      element_label: "Result Summary",
      enabled: true,
      gui_type_code: "TEXT",
      html_field_name: "fpa_lh_ResultSummary",
      label: "Result Summary",
      left_right_anchor_flag: "L",
      name: "fpa_lh_ResultSummary",
      ne_id: 267,
      np_id: 7,
      selected: false,
      sn_id: 4347,
      step_order: 3
    }
  ];
  return (
    <>
      <NavigationMenu data={navigationSchema} />
    </>
  );
};

export default NavigationComponent;
