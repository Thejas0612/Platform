import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonStepper from "../../../../components/common/ButtonStepper";
import { getDynamicFormSchema, updateSchema } from "../../../../schema-service/schemaService";
import MSOLDynamicForm from "../../../../components/shared/dynamicform";
import { updateRightSection } from "../../../../redux/reducers/initialBuDataSlice";
import SCHEMA_CONSTANTS from "../../../../schema-service/dpflowSchemaConstants";
const windowUrl = window.location.search;
const params = new URLSearchParams(windowUrl);
export default function DpFlowRightLayout() {
  const [refId, setRefId] = useState(params.get('Source_type'));
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);
  const rightSectionSchema = useSelector((state) => state.initialBuData?.rightSection);
  const dispatch = useDispatch();
  const copyRightSectionSchema = structuredClone(rightSectionSchema);
  const data = getDynamicFormSchema(activeIndex, copyRightSectionSchema);

  let invisibleElements = [];
  let visibleElements = { id: data[0]?.id, fields: [] };
  if (data?.length > 0)
    data[0]?.fields?.forEach((ele) => {
      if (ele.display) {
        visibleElements.fields.push(ele);
      } else {
        invisibleElements.push(ele);
      }
    }); 

  const onUpdateSchema = async (e, formObj, formData, name) => {
    const obj = await updateSchema(e, formObj, formData, name, activeIndex, invisibleElements);
    copyRightSectionSchema[0][SCHEMA_CONSTANTS.COMP_PROPS][SCHEMA_CONSTANTS.SCHEMA][activeIndex] =
      obj?.updatedSchema;
    dispatch(updateRightSection(copyRightSectionSchema));
  };

  if (visibleElements?.fields?.length > 0) {
    return (
      <div>
        <MSOLDynamicForm
          schema={[visibleElements]}
          handleChange={(e, formObj, formData, name) => onUpdateSchema(e, formObj, formData, name)}
        />
        <div>
          <ButtonStepper
            copyRightSectionSchema={copyRightSectionSchema}
            visibleElements={[...visibleElements.fields, ...invisibleElements]}
            activeIndex={activeIndex}
          />
        </div>
      </div>
    );
  }
  return <></>;
}
