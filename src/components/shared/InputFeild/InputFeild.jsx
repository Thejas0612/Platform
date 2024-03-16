import React from 'react'
import { DynamicForm, SelectInput, TextInput, TableInput } from '@emerson/dynamic-ui-public'

function InputFeild() {
  return (
    // <TableInput
    //   data={[
    //     [
    //       {
    //         "type": "TEXT",
    //         "label": "",
    //         "name": "",
    //         "align": "center",
    //         "textStyles": {
    //           "fontSize": "0.8rem"
    //         }
    //       },
    //       {
    //         "type": "TEXT",
    //         "label": "MIN",
    //         "align": "center",
    //         "name": "r1min",
    //         "textStyles": {
    //           "fontSize": "0.8rem"
    //         }
    //       },
    //       {
    //         "type": "TEXT",
    //         "label": "NORMAL",
    //         "name": "r1max",
    //         "align": "center",
    //         "textStyles": {
    //           "fontSize": "0.8rem"
    //         }
    //       },
    //       {
    //         "type": "TEXT",
    //         "label": "MAX",
    //         "name": "r1max",
    //         "align": "center",
    //         "textStyles": {
    //           "fontSize": "0.8rem"
    //         }
    //       },
    //       {
    //         "type": "TEXT",
    //         "label": "UNITS",
    //         "name": "r1units",
    //         "align": "center",
    //         "textStyles": {
    //           "fontSize": "0.8rem"
    //         }
    //       }
    //     ],
    //     [
    //       {
    //         "type": "TEXT",
    //         "label": "FLOW RATE",
    //         "name": "lbl_flow_rate",
    //         "align": "right",
    //         "textStyles": {
    //           "fontSize": "0.8rem"
    //         }
    //       },
    //       {
    //         "type": "TEXT_INPUT",
    //         "label": "",
    //         "name": "flow_rate_min",
    //         "required": true,
    //         "validations": [
    //           {
    //             "validationKey": "\\S",
    //             "validationMessage": "This is required"
    //           }
    //         ]
    //       },
    //       {
    //         "type": "TEXT_INPUT",
    //         "label": "",
    //         "name": "flow_rate_min",
    //         "required": true,
    //         "validations": [
    //           {
    //             "validationKey": "\\S",
    //             "validationMessage": "This is required"
    //           }
    //         ]
    //       },
    //       {
    //         "type": "TEXT_INPUT",
    //         "label": "",
    //         "name": "flow_rate_max",
    //         "required": true,
    //         "validations": [
    //           {
    //             "validationKey": "\\S",
    //             "validationMessage": "This is required"
    //           }
    //         ]
    //       },
    //       {
    //         "type": "SINGLE_SELECT",
    //         "label": "",
    //         "name": "flow_rate_units",
    //         "options": [
    //           {
    //             "value": "USGPH",
    //             "label": "Gallons(US)/hr"
    //           },
    //           {
    //             "value": "Gallons",
    //             "label": "Gallons"
    //           }
    //         ]
    //       }
    //     ],
    //     [
    //       {
    //         "type": "TEXT",
    //         "label": "LINE PRESSURE",
    //         "name": "lbe_line_pressure",
    //         "align": "right",
    //         "textStyles": {
    //           "fontSize": "0.8rem"
    //         }
    //       },
    //       {
    //         "type": "TEXT_INPUT",
    //         "label": "",
    //         "name": "line_pressure_min"
    //       },
    //       {
    //         "type": "TEXT_INPUT",
    //         "label": "",
    //         "name": "flow_rate_min",
    //         "required": true,
    //       },
    //       {
    //         "type": "TEXT_INPUT",
    //         "label": "",
    //         "name": "line_pressure_max"
    //       },
    //       {
    //         "type": "SINGLE_SELECT",
    //         "label": "",
    //         "name": "line_pressure_unit",
    //         "options": [
    //           {
    //             "value": "psig",
    //             "label": "PSIG"
    //           },
    //           {
    //             "value": "psi",
    //             "label": "PSI"
    //           }
    //         ]
    //       }
    //     ]
    //   ]}
    // />
    <TextInput />
  )
}

export default InputFeild