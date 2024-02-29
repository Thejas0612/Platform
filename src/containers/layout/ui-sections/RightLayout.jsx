import { DynamicForm } from "../../../components/dynamic-ui/uiComponentsConfig";
import { useSelector } from "react-redux";
import getSchemaForDynamicForm from "../../../adapterDataManager/schema/getSchema";
import ButtonStepper from "../../../components/common/ButtonStepper";

export default function RightLayout() {
  const rightSecSchema = useSelector((state) => state.initialBuData?.rightSection);
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);

  if (rightSecSchema?.length > 0) {
    const { componentProps } = rightSecSchema[0];
    const activeIndxSchema = getSchemaForDynamicForm(activeIndex, componentProps?.schema);

    console.log("Schema ----353", activeIndxSchema);
    return (
      <div>
        <DynamicForm
          schema={activeIndxSchema}
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
