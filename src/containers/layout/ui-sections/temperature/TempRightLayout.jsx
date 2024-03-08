import { DynamicForm } from "../../../../components/dynamic-ui/uiComponentsConfig";
import { useSelector } from "react-redux";
import ButtonStepperCommon from "../../../../components/button/ButtonStepperCommon";
import getSchemaForDynamicForm from "../../../../adapterDataManager/schema/getSchema";

export default function TempRightLayout() {
  const rightSecSchema = useSelector((state) => state.initialBuData?.rightSection);
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);

  if (rightSecSchema?.length > 0) {
    const { componentProps } = rightSecSchema[0];
    const activeIndxSchema = getSchemaForDynamicForm(activeIndex, componentProps?.schema);
    const activeIndexCopy = JSON.parse( JSON.stringify( activeIndxSchema ) );

    return (
      <div>
         <DynamicForm
          schema={activeIndexCopy}
          handleChange={(e, formObj, formData, name, isValid) => {
            console.log("e,formObj,formData, name, isValid: ",e, formObj, formData, name, isValid)
          }}
          handleKeyPress={(a, b, c) => console.log("a,b,c handleKeyPress", a, b, c)}

          updateData={(a, b, c, d) => console.log("a,b,c,d updateData", a, b, c, d)}/>
        <div>
          <ButtonStepperCommon />
        </div>
      </div>
    );
  }
  return <></>;
}
