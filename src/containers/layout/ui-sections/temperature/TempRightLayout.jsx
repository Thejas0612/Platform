import { useDispatch, useSelector } from "react-redux";
import ButtonStepperCommon from "../../../../components/button/ButtonStepperCommon";
import getSchemaForDynamicForm from "../../../../adapterDataManager/schema/getSchema";
import MSOLDynamicForm from "../../../../components/shared/dynamicform";
import TableInput from "../../../../components/table-input/TableInput";
import { changeHandler } from "./changeHandlers";
import HorizontalLine from "../../../../components/horizonatal-line/HorizontalLine";
import { indexChangeHandlers } from "./indexChangeHandlers";
const overrideComponents = {
  "TABLE_INPUT": TableInput,
  "HORIZONTAL_LINE": HorizontalLine
};

export default function TempRightLayout({onIndexChange}) {
  const rightSecSchema = useSelector((state) => state.initialBuData?.rightSection);
  const leftSecSchema = useSelector((state) => state.initialBuData?.leftSection);
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);
  const dispatch = useDispatch();

  if (rightSecSchema?.length > 0) {
    const { componentProps } = rightSecSchema[0];
    const activeIndxSchema = getSchemaForDynamicForm(activeIndex, componentProps?.schema);
    const activeIndexCopy = JSON.parse( JSON.stringify( activeIndxSchema ) );

    return (
      <div>
         <MSOLDynamicForm
            schema={activeIndexCopy}
            overrideComponents={overrideComponents}
            handleChange={(e, formObj, formData, name, isValid) => {
              changeHandler({dispatch, rightSecSchema, leftSecSchema, e, formObj, formData, name, isValid});
            }}
          />
        <div style={{marginTop:"5rem"}}>
          <ButtonStepperCommon updateSchemaIndex={() => {}} onIndexChange={onIndexChange} stepsCount={rightSecSchema[0].componentProps?.schema?.length}/>
        </div>
      </div>
    );
  }
  return <></>;
}
