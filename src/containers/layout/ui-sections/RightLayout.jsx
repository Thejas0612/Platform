import { DynamicForm } from "../../../components/dynamic-ui/uiComponentsConfig";
import { useSelector } from "react-redux";
import getSchemaForDynamicForm from "../../../adapterDataManager/schema/getSchema";
import ButtonStepper from "../../../components/common/ButtonStepper";

export default function RightLayout() {
  const rightSecSchema = useSelector((state) => state.initialBuData?.rightSection);
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);
const data = [
  {
    id: 1,

    fields: [
      {
        column: 12,
        label: "LABEL_TEXT",
        labelClass: "app-content-label",
        name: "LABEL_TEXT",
        showLabel: false,
        subText: "",
        tableClass: "",
        text: "Measurment Type",
        textClass: "ddl-typography--h5",
        title: "this is title",
        type: "LABEL_TEXT",
        textStyles: { textAlign: "center" }
      },
      {
        column:12,
        type: "TILE_THUMBNAIL",

        name: "measurmenttype",

        label: "Test Thumbnail",

        labelClass: "app-content-label",

        description: "here is a toggle button",

        attribute_code_value: {
          defaultIds: [],

          defaultDirection: "tile"
        },

        options: [
          {
            id: 1,

            title: "Flow",

            description:
              "Flow Measurement is the process of measuring fluid in your plant or industry. You can measure flow through a variety of different devices such as Coriolis, Differential Pressure, Vortex, Magnetic, Ultrasonic, Turbine and positive displacement meters.",

            imgUrl: "https://emerson-cdn.azurewebsites.net/7bd555544cf68071bafa.png"
          },

          {
            id: 2,

            title: "Density- Viscosity",

            description:
              "Our density & viscosity measurement devices offer unbeatableperformance for applications in alcohol concentration, API gravity, specific gravity and more.",
            imgUrl: ""
          }
        ],

        required: true,

        error: "",

        errorClass: ""
      }
    ]
  }
];
  if (rightSecSchema?.length > 0) {
    const { componentProps } = rightSecSchema[0];
    const activeIndxSchema = getSchemaForDynamicForm(activeIndex, componentProps?.schema);

    console.log("Schema ----353", activeIndxSchema);
    return (
      <div>
        <DynamicForm
          schema={data}
          handleChange={(a, b, c, d) => {
            console.log("Events are trigerring");
            console.log(a, b, c, d);
          }}
        />
        <div>
          <ButtonStepper />
        </div>
      </div>
    );
  }
  return <></>;
}
