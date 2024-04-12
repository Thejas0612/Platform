import { useSelector } from "react-redux";
import ButtonStepper from "../../../../components/common/ButtonStepper";
import { getDynamicFormSchema, updateSchema } from "../../../../schema-service/schemaService";
import PropTypes from "prop-types";
import MSOLDynamicForm from "../../../../components/shared/dynamicform";

const DpFlowRightLayout = ({ schema, updateFieldsInSchema, updateValidations }) => {
  const buCode = useSelector((state) => state.initialBuData?.selectedBu);
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);
  const data = getDynamicFormSchema(buCode, "DynamicForm", activeIndex, schema);

  let invisibleElements = [];
  let visibleElements = { id: data[0]?.id, fields: [] };
  if (data.length > 0)
    data[0]?.fields?.forEach((ele) => {
      if (ele.display) {
        visibleElements.fields.push(ele);
      } else {
        invisibleElements.push(ele);
      }
    });

  const onUpdateSchema = async (e, formObj, formData, name) => {
    const obj = await updateSchema(
      e,
      formObj,
      formData,
      name,
      activeIndex,
      buCode,
      invisibleElements
    );
    await updateFieldsInSchema(obj);
  };

  if (visibleElements.fields?.length > 0) {
    return (
      <div>
        <MSOLDynamicForm
          schema={visibleElements.fields?.length > 0 ? [visibleElements] : []}
          handleChange={(e, formObj, formData, name) => onUpdateSchema(e, formObj, formData, name)}
        />
        <div>
          <ButtonStepper
            data={data}
            schema={schema[buCode]}
            updateValidations={updateValidations}
            buCode={buCode}
          />
        </div>
      </div>
    );
  }
  return <></>;
};

DpFlowRightLayout.propTypes = {
  schema: PropTypes.object.isRequired,
  updateFieldsInSchema: PropTypes.func,
  updateValidations: PropTypes.func
};

DpFlowRightLayout.defaultProps = {
  updateFieldsInSchema: () => {},
  updateValidations: () => {}
};

export default DpFlowRightLayout;
