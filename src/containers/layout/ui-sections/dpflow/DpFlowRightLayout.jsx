import React from "react";
import { DynamicForm } from "../../../../components/dynamic-ui/uiComponentsConfig";
import { useSelector } from "react-redux";
import ButtonStepper from "../../../../components/common/ButtonStepper";
import { getDynamicFormSchema, updateSchema } from "../../../../schema-service/schemaService";
import PropTypes from "prop-types";

const DpFlowRightLayout = ({ schema, updateFieldsInSchema, updateValidations }) => {
  const buCode = useSelector((state) => state.initialBuData?.selectedBu);
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);
  const data = getDynamicFormSchema(buCode, "DynamicForm", activeIndex, schema);
  console.log({ schema });
  console.log({ data });

  const onUpdateSchema = async (e, formObj, formData, name, isValid) => {
    const obj = await updateSchema(e, formObj, formData, name, isValid, activeIndex, buCode);
    await updateFieldsInSchema(obj);
  };


  if (data?.length > 0) {
    return (
      <div>
        <DynamicForm
          schema={data}
          handleChange={(e, formObj, formData, name, isValid) => {
            onUpdateSchema(e, formObj, formData, name, isValid);
          }}
          handleKeyPress={(a, b, c) => console.log("a,b,c handleKeyPress", a, b, c)}
          handleSubmit={() => {}}
          updateData={(a, b, c, d) => console.log("a,b,c,d updateData", a, b, c, d)}
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
