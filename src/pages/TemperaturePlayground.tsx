import TableInput from "../components/table-input/TableInput"
import Checkmark from "../components/table-check/Checkmark"
import TileAndThumbnail from "../components/tile-thumbnail/TileAndThumbnail";
import HorizontalLine from "../components/horizonatal-line/HorizontalLine";
import DropdownMenu from "../components/dropdown-menu/DropdownMenu";
import { Grid, } from "@mui/material";
import LineChart from "../components/LineChart";

const schema = {
   "type": "TABLE_INPUT",
   "name": "TABLE_INPUT",
   "options": [
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
            "label": "Min",
            "align": "center",
            "name": "r1min",
            "variant": "body2",
            "textStyles": {
               "fontSize": "0.8rem"
            },
         },
         {
            "type": "TEXT",
            "label": "Normal",
            "align": "center",
            "name": "r1min",
            "variant": "body2",
            "textStyles": {
               "fontSize": "0.8rem"
            },
         },
         {
            "type": "TEXT",
            "label": "Max",
            "name": "r1max",
            "variant": "body2",
            "align": "center",
            "textStyles": {
               "fontSize": "0.8rem"
            },
         },
         {
            "type": "TEXT",
            "label": "Units",
            "name": "r1units",
            "variant": "body2",
            "align": "center",
            "textStyles": {
               "fontSize": "0.8rem"
            },
         }
      ],
      [
         {
            "type": "TEXT",
            "label": "Process Temperature",
            "name": "lbl_process_temperature",
            "align": "right",
            "textStyles": {
               "fontSize": "0.8rem"
            }
         },
         {
            "type": "TEXT_INPUT",
            "label": "",
            "name": "flow_rate_min",
            "required": true,
            "validations": [
               {
                  "validationKey": "\\S",
                  "validationMessage": "This is required"
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
                  "validationKey": "\\S",
                  "validationMessage": "This is required"
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
                  "validationKey": "\\S",
                  "validationMessage": "This is required"
               }
            ]
         },
         {
            "type": "SINGLE_SELECT",
            "label": "",
            "name": "flow_rate_units",
            "options": [
               {
                  "value": "C",
                  "label": "C",
                  "selected": true

               },
               {
                  "value": "F",
                  "label": "F",
               }
            ]
         }
      ],
      [
         {
            "type": "TEXT",
            "label": "Ambient Temperature",
            "name": "lbe_ambient Temperature",
            "align": "right",
            "textStyles": {
               "fontSize": "0.8rem"
            }
         },
         {
            "type": "TEXT_INPUT",
            "label": "",
            "name": "line_pressure_min",
            "required": false,
         },
         {
            "type": "TEXT_INPUT",
            "label": "",
            "name": "line_pressure_normal",
            "required": true,
         },
         {
            "type": "TEXT_INPUT",
            "label": "",
            "name": "line_pressure_max"
         },
         {
            "type": "SINGLE_SELECT",
            "label": "",
            "name": "line_pressure_unit",
            "options": [
               {
                  "value": "C",
                  "label": "C",
                  "selected": true
               },
               {
                  "value": "F",
                  "label": "F"
               }
            ]
         }
      ]
   ],
   "title": "",
   "tableClass": "",
   "labelClass": "",//"app-content-label",
   "label": ""
};

const schema_Checkmark_dash = {
   "options": [{
      "id": 0,
      "type": "tick",

   },
   {
      "id": 1,
      "type": "dash",
   }
   ]

}


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
              "id":0,
              "title":"Transmitter",
              "description":"Rosemount Temperature Transmitters offer innovative, industry-leading technologies engineered to accomadate tough environments and challenging applications.",
              "imgUrl":"https://www.emerson.com/resource/image/9241128/portrait_ratio1x1/207/207/4e379d0bdfecdc9dc9a162dabd1f254c/011724DEF921FFF3F2CA1BA57134EC32/updated%20family%20image%20transmitter.jpg",
              "tootTipEnable":false,
              "tootTipMessage":"",
           },
           {
              "id":1,
              "title":"X-well",
              "description":"Rosemount� X-well Technology measures process temperature accurately and reliably without a thermowell",
              "imgUrl":"https://www.emerson.com/resource/image/184154/portrait_ratio3x4/768/1024/6723fff039465ea8da39ab5c7b7978a2/EC9A2B6CF9DCB16E366CB86F03486544/prod-rmt-en-learn_about-x-well_with_shadows_lcd_rotated-c010.jpg",
              "tootTipEnable":true,
              "tootTipMessage":"X-Well",
           }
        ], 
        
     };

     const schema_DropdownMenu_1 = {
      "column":6,
      "type":"SINGLE_SELECT",
      "name":"communicationProtocol",
      "label":"Communication Protocol",
      "labelClass":"app-content-label",
      "disabled":false,
      "value":"",
      "options":[
         {
            "value":"4-20 mA with HART� Protocol",
            "label":"4-20 mA with HART� Protocol",
            "id":"0"
         },
         {
            "value":"FOUNDATION Fieldbus",
            "label":"FOUNDATION Fieldbus",
            "id":"1"
         },
         {
            "value":"WirelessHART",
            "label":"WirelessHART",
            "id":"2"
         }
       ],
       "tooltipEnable":false,
       "tooltipMessage":"",
       "nextLine":false,
      "required":false,
      "error":"",
      "errorClass":""
   };
   const schema_DropdownMenu_2 = {
      "column":6,
       "type":"SINGLE_SELECT",
       "name":"formfactor",
       "label":"Form Factor",
       "labelClass":"app-content-label",
       "disabled":false,
       "value":"",
       "options":[
          {
             "value":"Field Mount",
             "label":"Field Mount",
             "id":"0"
          },
          {
             "value":"Head Mount",
             "label":"Head Mount",
             "id":"1"
          },
          {
             "value":"Rail Mount",
             "label":"Rail Mount",
             "id":"2"
          }
       ],
       "tooltipEnable":true,
        "tooltipMessage":"Form Factor",
        "nextLine":true,
       "required":false,
       "error":"",
       "errorClass":""
    }
    const schema_DropdownMenu_3={
      "column":6,
       "type":"SINGLE_SELECT",
       "name":"noOfInputs",
       "label":"Number of Inputs",
       "labelClass":"app-content-label",
       "disabled":false,
       "value":"",
       "options":[
          {
             "value":"Single input",
             "label":"Single input",
             "id":"0"
          },
          {
             "value":"Dual Input",
             "label":"Dual Input",
             "id":"1"
          },
          {
             "value":"4 Inputs",
             "label":"4 Inputs",
             "id":"2"
          },
          {
             "value":"8 Inputs",
             "label":"8 Inputs",
             "id":"3"
          }
       ],
       "tooltipEnable":false,
        "tooltipMessage":"",
        "nextLine":false,
       "required":false,
       "error":"",
       "errorClass":""
    } 
    const schema_DropdownMenu_4={
      "column":6,
       "type":"SINGLE_SELECT",
       "name":"performance",
       "label":"Performance",
       "labelClass":"app-content-label",
       "disabled":false,
       "value":"",
       "options":[
          {
             "value":"Basic",
             "label":"Basic",
             "id":"0"
          },
          {
             "value":"Industry Standard",
             "label":"Industry Standard",
             "id":"1"
          },
          {
             "value":"Industry Leading",
             "label":"Industry Leading",
             "id":"2"
          }
         ],
         "tooltipEnable":true,
        "tooltipMessage":"Performance",
        "nextLine":false,
       "required":false,
       "error":"",
       "errorClass":""
    }

const schema_Horizontal_Line = {
   "horizontalLine":true,
}
const schema_chart_Data = {
    "options":  {

      plugins: {
        "legend": {
          "display": true,
          "position": "bottom",
          "align": "center"
        },
        title: {
          display: true,
          text: '248R CVD',
          font: {
            size: 16,
            family: 'sans-serif',
            weight: '10',
            style: 'bold'
          },
          padding: {
            bottom: 10
          }
        },
      },
   
      scales: {
        x: {
          title: {
            display: false,
            text: 'Ambient Temperature (�C)',
   
          },
          display: true,
          position: 'center',
          ticks: {
            beginAtZero: false,
            padding: 20,
            align: 'center', // Center the x-axis labels
          },
   
        },
        y: {
          title: {
            display: false,
            text: 'Total Probable Error (�C)'
          },
          position: "center",
          min: -3.5000,
          max: 3.5000,
        },
   
      },
    },
  
"data":[
   {
      labels: [-40,-30,-20,10,0,10,20,30,40],
   
      datasets: [
        {
          position: "bottom",
          label: '248H HART(tpe -ve)',
          data: [-2.14,-1.97,-1.8,-1.6,-1.59,-1.53,-1.51,-1.53,-1.59],
          fill: false,
          borderColor: 'blue',
          cubicInterpolationMode: 'monotone',
        },
        {
          label: '248H CVD(tpes -ve)',
          data: [-1.68,-1.44,-1.25,-1.06,-0.89,-0.78,-0.74,-0.78,-0.89],
          fill: false,
          borderColor: 'orange',
          cubicInterpolationMode: 'monotone',
        },
        {
          label: '248H HART(tpe +ve)',
          data: [2.14,1.97,1.81,1.69,1.59,1.53,1.51,1.53,1.59],
          fill: false,
          borderColor: 'blue',
          cubicInterpolationMode: 'monotone',
        },
   
        {
          label: '248H CVD(tpes +ve)',
          data: [1.68,1.46,1.25,1.06,0.89,0.78,0.74,0.78,0.89],
          fill: false,
          borderColor: 'orange',
          cubicInterpolationMode: 'monotone',
        },
      ],
    }
]
};



const TemperaturePlayground = () => (
   <>
         <div style={{width:"55%"}}><LineChart schema={schema_chart_Data} /></div>
      <div style={{ width: "40%" }}><TableInput {...schema} /></div>
         <TileAndThumbnail schema={schema_Tile_Thumbnail} />
         <HorizontalLine  schema={schema_Horizontal_Line}/>
         <Checkmark schema={schema_Checkmark_dash} />
      <Grid container sx = {{width:'50%'}}>
         <DropdownMenu schema={schema_DropdownMenu_1} />
         <DropdownMenu schema={schema_DropdownMenu_2} />
         <DropdownMenu schema={schema_DropdownMenu_3} />
         <DropdownMenu schema={schema_DropdownMenu_4} />
      </Grid>
   </>
)


export default TemperaturePlayground;
