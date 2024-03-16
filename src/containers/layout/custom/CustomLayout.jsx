import React from 'react'
import MSOLDynamicForm from '../../../components/shared/DynamicFrom/MSOLDynamicForm'

const schema = [
    {
      "group": "Project Details",
      "fields": [
        {
          "type": "TEXT_INPUT",
          "name": "projectname",
          "title": "Porject Name",
          "label": "Project Name",
          "inputClass": "",
          "labelClass": "app-content-label",
          "value": "Digital Product Platform Discovery",
          "disabled": true,
          "required": true
        },
        {
          "type": "NUMBER_INPUT",
          "name": "lrp",
          "label": "LRP",
          "inputClass": "",
          "labelClass": "app-content-label",
          "value": "6609",
          "required": true
        },
        {
          "type": "SINGLE_SELECT",
          "name": "critical",
          "label": "Critical",
          "inputClass": "",
          "labelClass": "app-content-label",
          "disabled": false,
          "value": "-1",
          "options": [
            {
              "value": "1",
              "label": "Yes",
              "id": "1"
            },
            {
              "value": "0",
              "label": "No",
              "id": "0"
            }
          ],
          "datasourceUrl": ""
        },
        {
          "type": "SINGLE_SELECT",
          "name": "entity",
          "label": "Entity",
          "inputClass": "",
          "labelClass": "app-content-label",
          "value": "Automation Solutions",
          "options": [],
          "datasourceUrl": ""
        },
        {
          "type": "SINGLE_SELECT",
          "name": "approved",
          "label": "Approved",
          "inputClass": "",
          "labelClass": "app-content-label",
          "value": "1",
          "options": [
            {
              "value": "1",
              "label": "Yes",
              "id": "1"
            },
            {
              "value": "0",
              "label": "No",
              "id": "0"
            }
          ],
          "datasourceUrl": ""
        }
      ]
    },
    {
      "group": "Project Owner Details",
      "fields": [
        {
          "type": "TEXT_INPUT",
          "name": "designation",
          "label": "Designation",
          "inputClass": "",
          "labelClass": "app-content-label",
          "value": ""
        },
        {
          "type": "TEXT_INPUT",
          "name": "email",
          "label": "Email",
          "inputClass": "",
          "labelClass": "app-content-label",
          "value": ""
        },
        {
          "type": "BUTTON",
          "name": "submit",
          "label": "Submit"
        }
      ]
    }
]

function CustomLayout() {
    return (
        <>
            <MSOLDynamicForm
                schema={schema}
            />
        </>
    )
}

export default CustomLayout