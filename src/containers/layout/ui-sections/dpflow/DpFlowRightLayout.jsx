import { useDispatch, useSelector } from "react-redux";
import ButtonStepper from "../../../../components/common/ButtonStepper";
import { getDynamicFormSchema, updateSchema } from "../../../../schema-service/schemaService";
import MSOLDynamicForm from "../../../../components/shared/dynamicform";
import { updateRightSection } from "../../../../redux/reducers/initialBuDataSlice";
import SCHEMA_CONSTANTS from "../../../../schema-service/dpflowSchemaConstants";
import { cloneDeep } from "lodash";

export default function DpFlowRightLayout() {
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);
  const rightSectionSchema = useSelector((state) => state.initialBuData?.rightSection);
  const dispatch = useDispatch();
  const copyRightSectionSchema = cloneDeep(rightSectionSchema);
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

  const onUpdateSchema = async (e, formObj, formData, name, fieldError) => {
    const obj = await updateSchema(
      e,
      formObj,
      formData,
      name,
      fieldError,
      activeIndex,
      invisibleElements
    );
    const cpoied_data = [...copyRightSectionSchema];
    cpoied_data[0][SCHEMA_CONSTANTS.COMP_PROPS][SCHEMA_CONSTANTS.SCHEMA][activeIndex] =
      obj?.updatedSchema;
    dispatch(updateRightSection(cpoied_data));
  };

  if (visibleElements?.fields?.length > 0) {
    return (
      <div>
        <MSOLDynamicForm
          schema={[visibleElements]}
          handleChange={(e, formObj, formData, name, fieldError) =>
            onUpdateSchema(e, formObj, formData, name, fieldError)
          }
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
