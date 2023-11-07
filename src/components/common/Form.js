import { DynamicForm } from "@emerson/dynamic-ui";
const Form = () => {
  const DynamicFormProps = {
    schema: [],
    updateData: () => {},
    handleChange: () => {},
    handleKeyPress: () => {},
    dataSourceUrl: ""
  };
  return (
    <>
      <DynamicForm {...DynamicFormProps} />
    </>
  );
};

export default Form;
