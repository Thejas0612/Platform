import TileLayout from "../common/TileLayout";
import { DynamicForm } from "@emerson/dynamic-ui";
import { SizingNameSchema } from "../../JsonSchema/FormSchemas/SizingNameSchema";
const SizingName = (props) => {
  const { navSchema, setNavSchema } = props;
  const { data } = SizingNameSchema;
  const jsonData = JSON.parse(JSON.stringify(data));
  return (
    <>
      <DynamicForm
        dataSourceUrl=""
        handleChange={() => {}}
        handleKeyPress={function noRefCheck() {}}
        handleSubmit={function noRefCheck() {}}
        schema={jsonData}
        updateData={function noRefCheck() {}}
      />
    </>
  );
};

export default SizingName;
