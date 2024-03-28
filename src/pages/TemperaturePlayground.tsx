import TableInput from "../components/table-input/TableInput";

const schema = {
    "type":"TABLE_INPUT",
    "name":"TABLE_INPUT",
    "options":[
       [
          {
             "type":"TEXT",
             "label":"",
             "name":"",
             "align":"center",
             "textStyles":{
                "fontSize":"0.8rem"
             }
          },
          {
             "type":"TEXT",
             "label":"Min",
             "align":"center",
             "name":"r1min",
             "variant": "body2",
             "textStyles":{
                "fontSize":"0.8rem"
             },
          },
          {
             "type":"TEXT",
             "label":"Normal",
             "align":"center",
             "name":"r1min",
             "variant": "body2",
             "textStyles":{
                "fontSize":"0.8rem"
             },
          },
          {
             "type":"TEXT",
             "label":"Max",
             "name":"r1max",
             "variant": "body2",
             "align":"center",
             "textStyles":{
                "fontSize":"0.8rem"
             },
          },
          {
             "type":"TEXT",
             "label":"Units",
             "name":"r1units",
             "variant": "body2",
             "align":"center",
             "textStyles":{
                "fontSize":"0.8rem"
             },
          }
       ],
       [
          {
             "type":"TEXT",
             "label":"Process Temperature",
             "name":"lbl_process_temperature",
             "align":"right",
             "textStyles":{
                "fontSize":"0.8rem"
             }
          },
          {
             "type":"TEXT_INPUT",
             "label":"",
             "name":"flow_rate_min",
             "required":true,
             "validations":[
                {
                   "validationKey":"\\S",
                   "validationMessage":"This is required"
                }
             ]
          },
          {
             "type":"TEXT_INPUT",
             "label":"",
             "name":"flow_rate_normal",
             "required":true,
             "validations":[
                {
                   "validationKey":"\\S",
                   "validationMessage":"This is required"
                }
             ]
          },
          {
             "type":"TEXT_INPUT",
             "label":"",
             "name":"flow_rate_max",
             "required":true,
             "validations":[
                {
                   "validationKey":"\\S",
                   "validationMessage":"This is required"
                }
             ]
          },
          {
             "type":"SINGLE_SELECT",
             "label":"",
             "name":"flow_rate_units",
             "options":[
                {
                   "value":"C",
                   "label":"C",
                   "selected": true

                },
                {
                   "value":"F",
                   "label":"F",
                }
             ]
          }
       ],
       [
          {
             "type":"TEXT",
             "label":"Ambient Temperature",
             "name":"lbe_ambient Temperature",
             "align":"right",
             "textStyles":{
                "fontSize":"0.8rem"
             }
          },
          {
             "type":"TEXT_INPUT",
             "label":"",
             "name":"line_pressure_min",
             "required": false,
          },
          {
             "type":"TEXT_INPUT",
             "label":"",
             "name":"line_pressure_normal",
             "required":true,
          },
          {
             "type":"TEXT_INPUT",
             "label":"",
             "name":"line_pressure_max"
          },
          {
             "type":"SINGLE_SELECT",
             "label":"",
             "name":"line_pressure_unit",
             "options":[
                {
                   "value":"C",
                   "label":"C",
                   "selected": true
                },
                {
                   "value":"F",
                   "label":"F"
                }
             ]
          }
       ]
    ],
    "title":"",
    "tableClass":"",
    "labelClass":"",//"app-content-label",
    "label":""
  };



const TemperaturePlayground = () => {
    return (
        <>
            <div style={{width: "40%"}}><TableInput schema={schema}/></div>
        </>
    )
}

export default TemperaturePlayground;
