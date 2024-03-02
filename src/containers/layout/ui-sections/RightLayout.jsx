import { DynamicForm } from "../../../components/dynamic-ui/uiComponentsConfig";
import { useSelector } from "react-redux";
import ButtonStepper from "../../../components/common/ButtonStepper";
import { getDynamicFormSchema } from "../../../schema-service/schemaService";

export default function RightLayout() {
  const buCode = useSelector((state) => state.initialBuData?.selectedBu);
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);
  const data = getDynamicFormSchema(buCode, "DynamicForm", activeIndex);
  if (data?.length > 0) {
    return (
      <div>
        <DynamicForm
          schema={data}
          handleChange={(a, b, c, d) => {
            console.log("a,,b,c,d", a, b, c, d);
          }}
        />
        <div>
          <ButtonStepper />
        </div>
      </div>
    );
  }
  return <></>;
}
