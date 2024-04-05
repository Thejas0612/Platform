import { useSelector, useDispatch } from "react-redux";
import ButtonStepperCommon from "../../../../components/button/ButtonStepperCommon";
import getSchemaForDynamicForm from "../../../../adapterDataManager/schema/getSchema";
import MSOLDynamicForm from "../../../../components/shared/dynamicform";
import { updateNavigationStatus } from "./schema-services/schemaMutations";
import { updateLeftSection } from "../../../../redux/reducers/initialBuDataSlice";

export default function ProjectLookoutRightLayout() {
  const rightSecSchema = useSelector((state) => state.initialBuData?.rightSection);
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);
  const leftSectionSchema = useSelector((state) => state.initialBuData?.leftSection);

  const dispatch = useDispatch();

  if (rightSecSchema?.length > 0) {
    const { componentProps } = rightSecSchema[0];
    const activeIndxSchema = getSchemaForDynamicForm(activeIndex, componentProps?.schema);
    const activeIndexCopy = JSON.parse( JSON.stringify( activeIndxSchema ) );
    const updateSchemaIndex = (screenId) =>{
      const leftSchema = updateNavigationStatus(leftSectionSchema, screenId);
      dispatch(updateLeftSection(leftSchema))
    }
    return (
      <div>
        <MSOLDynamicForm
          schema={activeIndexCopy}
          handleChange={(e, formObj, formData, name, isValid) => {
            console.log("e,formObj,formData, name, isValid: ",e, formObj, formData, name, isValid)
          }}
          handleKeyPress={(a, b, c) => console.log("a,b,c handleKeyPress", a, b, c)}
          updateData={(a, b, c, d) => console.log("a,b,c,d updateData", a, b, c, d)}/>
        <div>
          <ButtonStepperCommon updateSchemaIndex={updateSchemaIndex} />
        </div>
      </div>
    );
  }
  return <></>;
}
