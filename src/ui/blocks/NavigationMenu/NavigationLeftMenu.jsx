import React from "react";
import {NavigationMenu} from "@emerson/dynamic-ui-public";

export default function NavigationLeftMenu() {
    const menuData = [
        {
            "label": "Measurement Type",
            "enabled": true,
            "selected": true,
            "name": "fpa_MeasurementType",
            "ne_id": 0,
            "np_id": 7,
            "sn_id": 4347,
            "step_order": 1,
            "bu_code": "FLOW_PA_NEW",
            "gui_type_code": "TEXT",
            "attribute_code_json": "N/A",
            "html_field_name": "fpa_MeasurementType",
            "badges": []
        },
        {
            "label": "Process Condition",
            "enabled": true,
            "selected": false,
            "name": "fpa_ProcessCondition",
            "sn_id": 4347,
            "ne_id": 1,
            "bu_code": "FLOW_PA_NEW",
            "np_id": 7,
            "element_label": "Process Condition",
            "step_order": 2,
            "gui_type_code": "TEXT",
            "attribute_code_json": "N/A",
            "html_field_name": "fpa_ProcessCondition",
            "badges": []
        },
        {
            "label": "Process Variable",
            "enabled": true,
            "selected": false,
            "name": "fpa_lh_ProcessVariable",
            "badges": [],
            "sn_id": 4347,
            "ne_id": 2,
            "bu_code": "FLOW_PA_NEW",
            "np_id": 7,
            "element_label": "Process Variable",
            "step_order": 3,
            "left_right_anchor_flag": "L",
            "gui_type_code": "TEXT",
            "attribute_code_json": "N/A",
            "html_field_name": "fpa_lh_processVariable"
        },
        {
            "label": "Technology Type",
            "enabled": true,
            "selected": false,
            "name": "fpa_lh_TechnologyType",
            "badges": [],
            "sn_id": 4347,
            "ne_id": 3,
            "bu_code": "FLOW_PA_NEW",
            "np_id": 7,
            "element_label": "Technology Type",
            "step_order": 4,
            "left_right_anchor_flag": "L",
            "gui_type_code": "TEXT",
            "attribute_code_json": "N/A",
            "html_field_name": "fpa_lh_technologyType"
        },
        {
            "label": "Sensor Type",
            "enabled": true,
            "selected": false,
            "name": "fpa_lh_SensorType",
            "badges": [],
            "sn_id": 4347,
            "ne_id": 4,
            "bu_code": "FLOW_PA_NEW",
            "np_id": 7,
            "element_label": "Sensor Type",
            "step_order": 5,
            "left_right_anchor_flag": "L",
            "gui_type_code": "TEXT",
            "attribute_code_json": "N/A",
            "html_field_name": "fpa_lh__sensorType"
        },
        {
            "label": "Sensor Advisor",
            "enabled": true,
            "selected": false,
            "name": "fpa_lh_SensorAdvisor",
            "badges": [],
            "sn_id": 4347,
            "ne_id": 5,
            "bu_code": "FLOW_PA_NEW",
            "np_id": 7,
            "element_label": "Sensor Advisor",
            "step_order": 6,
            "left_right_anchor_flag": "L",
            "gui_type_code": "TEXT",
            "attribute_code_json": "N/A",
            "html_field_name": "fpa_lh__sensorAdvisor"
        }
    ];

    return (
        <NavigationMenu
            data={menuData}
            onDelete={() => {}}
            onSelect={function noRefCheck() {}}
    />);
}