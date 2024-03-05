import { DynamicForm } from "../../../dynamic-ui/uiComponentsConfig";
import { useSelector } from "react-redux";
import getSchemaForDynamicForm from "../../../../adapterDataManager/schema/getSchema";
import ButtonStepper from "../../../components/ButtonStepper";

export default function RightLayout() {
  const rightSecSchema = useSelector((state) => state.initialBuData?.rightSection);
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);

  if (rightSecSchema?.length > 0) {
    const { componentProps } = rightSecSchema[0];
    const activeIndxSchema = getSchemaForDynamicForm(activeIndex, componentProps?.schema);
    return (
      <div>
        <DynamicForm schema={activeIndxSchema} />
        <div>
          <ButtonStepper />
        </div>
      </div>
    );
  }
  return <></>;
}
