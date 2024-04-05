import { DynamicForm } from "../../../../components/dynamic-ui/uiComponentsConfig";
import { useDispatch, useSelector } from "react-redux";
import ButtonStepperCommon from "../../../../components/button/ButtonStepperCommon";
import getSchemaForDynamicForm from "../../../../adapterDataManager/schema/getSchema";
import { changeStepperIndex } from "../schemaMutations";
import { updateLeftSection } from "../../../../redux/reducers/initialBuDataSlice";
import MSOLDynamicForm from "../../../../components/shared/dynamicform";
import TableInput from "../../../../components/table-input/TableInput";
import DropdownMenu from "../../../../components/dropdown-menu/DropdownMenu";

const overrideComponents = {
  "TABLE_INPUT": TableInput,
  "SINGLE_SELECT": DropdownMenu
};

export default function TempRightLayout() {
  const rightSecSchema = useSelector((state) => state.initialBuData?.rightSection);
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);
  const leftSecSchema = useSelector((state) => state.initialBuData?.leftSection);

  const dispatch = useDispatch();

  if (rightSecSchema?.length > 0) {
    const { componentProps } = rightSecSchema[0];
    const activeIndxSchema = getSchemaForDynamicForm(activeIndex, componentProps?.schema);
    const activeIndexCopy = JSON.parse( JSON.stringify( activeIndxSchema ) );

    const updateSchemaIndex = (i) => {
      const leftSchema = changeStepperIndex(leftSecSchema, i);
      dispatch(updateLeftSection(leftSchema))
    }

    return (
      <div>
         <MSOLDynamicForm
            schema={activeIndexCopy}
            overrideComponents={overrideComponents}
            handleChange={(e, formObj, formData, name, isValid) => {
              //To-Do event handeling
            }}
          />
        <div>
          <ButtonStepperCommon updateSchemaIndex={updateSchemaIndex}/>
        </div>
      </div>
    );
  }
  return <></>;
}
