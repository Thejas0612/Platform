import { DynamicForm } from "../../../../components/dynamic-ui/uiComponentsConfig";
import { useSelector } from "react-redux";
import ButtonStepperCommon from "../../../../components/button/ButtonStepperCommon";
import getSchemaForDynamicForm from "../../../../adapterDataManager/schema/getSchema";

export default function ProjectLookoutRightLayout() {
  const rightSecSchema = useSelector((state) => state.initialBuData?.rightSection);
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);

  if (rightSecSchema?.length > 0) {
    const { componentProps } = rightSecSchema[0];
    const activeIndxSchema = getSchemaForDynamicForm(activeIndex, componentProps?.schema);
    return (
      <div>
        <DynamicForm schema={activeIndxSchema} />
        <div>
          <ButtonStepperCommon />
        </div>
      </div>
    );
  }
  return <></>;
}
