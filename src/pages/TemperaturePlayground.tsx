import TableInput from "../components/table-input/TableInput";
import TileAndThumbnail from "../components/tile-thumbnail/TileAndThumbnail";
import tileAndThumbnail from "../components/tile-thumbnail/TileAndThumbnail"
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

  const schema_Tile_Thumbnail={
   "type":"TILE_THUMBNAIL",
        "name":"measurmenttype",
        "label":"Test Thumbnail",
        "labelClass":"app-content-label",
        "description":"here is a toggle button",
        "showAlert": false,
        "sn_id": 4347,
        "value": [ ],
        "required":true,
        "error":"",
        "errorClass":"",
        "attribute_code_value": {
           "defaultDirection": "tile",
           "description": ""
       },
        "column":12,
        "buttonLabel": "btn lble",
        "defaultIds": [
        ],
        "imgUrl": "7bd555544cf68071bafa.png",
        "np_id": 7,
        "options":[
           {
              "id":1,
              "title":"Transmitter",
              "description":"Rosemount Temperature Transmitters offer innovative, industry-leading technologies engineered to accomadate tough environments and challenging applications.",
              "imgUrl":"https://www.emerson.com/resource/image/9241128/portrait_ratio1x1/207/207/4e379d0bdfecdc9dc9a162dabd1f254c/011724DEF921FFF3F2CA1BA57134EC32/updated%20family%20image%20transmitter.jpg",
              "tootTipEnable":false,
              "tootTipMessage":"",
           },
           {
              "id":2,
              "title":"X-well",
              "description":"Rosemount™ X-well Technology measures process temperature accurately and reliably without a thermowell",
              "imgUrl":"https://www.emerson.com/resource/image/184154/portrait_ratio3x4/768/1024/6723fff039465ea8da39ab5c7b7978a2/EC9A2B6CF9DCB16E366CB86F03486544/prod-rmt-en-learn_about-x-well_with_shadows_lcd_rotated-c010.jpg",
              "tootTipEnable":true,
              "tootTipMessage":"X-Well",
           }
        ], 
        
     }

const TemperaturePlayground = () => (
   <>
      <div style={{ width: "40%" }}><TableInput schema={schema} /></div>
      <TileAndThumbnail schema={schema_Tile_Thumbnail} />
   </>
)

export default TemperaturePlayground;
