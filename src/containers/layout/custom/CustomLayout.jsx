import React from 'react'
import MSOLDynamicForm from '../../../components/shared/DynamicFrom/MSOLDynamicForm'

const schema = [
  {
    "group": "Process Variables",
    "fields": [
      {
        "type": "TABLE_INPUT",
        "name": "TABLE_INPUT",
        "data": [
          [
            {
              "type": "TEXT",
              "label": "",
              "name": "",
              "align": "center",
              "textStyles": {
                "fontSize": "0.8rem"
              }
            },
            {
              "type": "TEXT",
              "label": "MIN",
              "align": "center",
              "name": "r1min",
              "textStyles": {
                "fontSize": "0.8rem"
              }
            },
            {
              "type": "TEXT",
              "label": "NORMAL",
              "align": "center",
              "name": "r1min",
              "textStyles": {
                "fontSize": "0.8rem"
              }
            },
            {
              "type": "TEXT",
              "label": "MAX",
              "name": "r1max",
              "align": "center",
              "textStyles": {
                "fontSize": "0.8rem"
              }
            },
            {
              "type": "TEXT",
              "label": "UNITS",
              "name": "r1units",
              "align": "center",
              "textStyles": {
                "fontSize": "0.8rem"
              }
            }
          ],
          [
            {
              "type": "TEXT",
              "label": "FLOW RATE",
              "name": "lbl_flow_rate",
              "align": "right",
            },
            {
              "type": "TEXT_INPUT",
              "label": "",
              "name": "flow_rate_min",
              "required": true,
              "validations": [
                {
                  "type": 'number',
                  "validationKey": "\\S",
                  "validationMessage": "This is required",
                  "checks": [
                    {
                      "key": "minLength",
                      "val": 3,
                    },
                    {
                      "key": "maxLength",
                      "val": 10,
                    },
                  ]
                }
              ]
            },
            {
              "type": "TEXT_INPUT",
              "label": "",
              "name": "flow_rate_normal",
              "required": true,
              "validations": [
                {
                  "type": 'number',
                  "validationKey": "\\S",
                  "validationMessage": "This is required",
                  "checks": [
                    {
                      "key": "minLength",
                      "val": 3,
                    },
                    {
                      "key": "maxLength",
                      "val": 10,
                    },
                  ],
                  "target": {
                    "id": ""
                  },
                  "disabled": false
                }
              ]
            },
            {
              "type": "TEXT_INPUT",
              "label": "",
              "name": "flow_rate_max",
              "required": true,
              "validations": [
                {
                  "type": 'number',
                  "validationKey": "\\S",
                  "validationMessage": "This is required",
                  "checks": [
                    {
                      "key": "minLength",
                      "val": 3,
                    },
                    {
                      "key": "maxLength",
                      "val": 10,
                    },
                  ],
                  "target": {
                    "id": ""
                  },
                  "disabled": false
                },
              ]
            },
            {
              "type": "SINGLE_SELECT",
              "label": "",
              "name": "flow_rate_units",
              "options": [
                {
                  "value": "USGPH",
                  "label": "Gallons(US)/hr"
                },
                {
                  "value": "Gallons",
                  "label": "Gallons"
                }
              ]
            }
          ],
        ],
        "value": {
          "vessel_dimension_unit": "Meter"
        },
        "column": 12,
        "title": "",
        "tableClass": "",
        "labelClass": "app-content-label",
      },
    ]
  },
  {
    "group": "Project Owner Details",
    "fields": [
      {
        "type": "TEXT_INPUT",
        "name": "designation",
        "label": "Designation",
        "title": "Designation",
        "error": "Please enter value",
        "inputClass": "",
        "labelClass": "app-content-label",
        "value": ""
      },
      {
        "type": "TEXT_INPUT",
        "name": "email",
        "label": "Email",
        "title": "Email",
        "inputClass": "",
        "labelClass": "app-content-label",
        "value": ""
      },
      {
        "type": "CHECKBOX_INPUT",
        "name": "CHECKBOX_INPUT",
        "label": "Diagnostics",
        "title": "Helo",
        "labelClass": "app-content-label",
        "selectedIds": [
          "1"
        ],
        "disabledIds": [],
        "options": [
          {
            "value": "1",
            "label": "Temperature",
            "info": 'This is Tooltip'
          },
          {
            "value": "0",
            "label": "Pressure"
          },
          {
            "value": "0",
            "label": "Yes",
          },
          {
            "value": "0",
            "label": "No"
          }
        ],
        "required": true,
        "error": "",
        "errorClass": "",
        "showAlert": false
      },
      {
        "type": "CHECKBOX_INPUT",
        "name": "CHECKBOX_INPUT",
        "label": "Configuration",
        "title": "Helo",
        "labelClass": "app-content-label",
        "selectedIds": [
          "1"
        ],
        "disabledIds": [],
        "options": [
          {
            "value": "1",
            "label": "Temperature",
          },
          {
            "value": "0",
            "label": "Pressure",
            "info": 'This is Tooltip'
          },
        ],
        "required": true,
        "error": "",
        "errorClass": "",
        "showAlert": false
      },
    ]
  },
  {
    "group": "Models",
    "fields": [
      {
        "column": 12,
        "type": "TILE_THUMBNAIL",
        "name": "tile_thumb",
        "buttonLabel": "btn lble",
        "imgUrl": "7bd555544cf68071bafa.png",
        "attribute_code_value": {
          "description": "",
          "defaultDirection": "tile"
        },
        "showAlert": false,
        "defaultIds": [],
        "options": [
          {
            "id": 1,
            "title": "Viscocity",
            "description": "Flow Measurement is the process of measuring fluid in your plant or industry. You can measure flow through a variety of different devices such as Coriolis, Differential Pressure, Vortex, Magnetic, Ultrasonic, Turbine and positive displacement meters.",
            "imgUrl": "https://www.emerson.com/resource/image/5479482/portrait_ratio3x4/375/500/e5da71aac7befa95b2df7405b801dd99/D913FCE7B8C5C551A52F2C933CA352AA/1905-coriolis-meter-micro-motion-4200.jpg",
            "buttonLabel": "SHOW FULL SPECS"
          },
          {
            "id": 2,
            "title": "Flow",
            "description": "Flow Measurement is the process of measuring fluid in your plant or industry. You can measure flow through a variety of different devices such as Coriolis, Differential Pressure, Vortex, Magnetic, Ultrasonic, Turbine and positive displacement meters.",
            "imgUrl": "https://www.emerson.com/resource/image/5479482/portrait_ratio3x4/375/500/e5da71aac7befa95b2df7405b801dd99/D913FCE7B8C5C551A52F2C933CA352AA/1905-coriolis-meter-micro-motion-4200.jpg",
            "buttonLabel": "SHOW FULL SPECS"
          },
          {
            "id": 3,
            "title": "Dencity",
            "description": "Flow Measurement is the process of measuring fluid in your plant or industry. You can measure flow through a variety of different devices such as Coriolis, Differential Pressure, Vortex, Magnetic, Ultrasonic, Turbine and positive displacement meters.",
            "imgUrl": "https://www.emerson.com/resource/image/5479482/portrait_ratio3x4/375/500/e5da71aac7befa95b2df7405b801dd99/D913FCE7B8C5C551A52F2C933CA352AA/1905-coriolis-meter-micro-motion-4200.jpg",
            "buttonLabel": "SHOW FULL SPECS"
          }
        ]
      },
    ]
  }
]

const handleInput = (event, a, b, c) => {
   console.log({ a, b, c });
}

function CustomLayout() {
  return (
    <>
      <MSOLDynamicForm
        schema={schema}
        handleChange={(event, a, b, c) => handleInput(event, a, b, c)}
      />
    </>
  )
}

export default CustomLayout