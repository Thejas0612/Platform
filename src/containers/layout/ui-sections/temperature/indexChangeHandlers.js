import { updateLeftSection, updateRightSection } from "../../../../redux/reducers/initialBuDataSlice";
import { updateSchemaWithVariation, getFieldByName, changeStepperIndex } from "../schemaMutations";

export const indexChangeHandlers = (props) => { 
    const {currentIndex, newIndex, dispatch} = props;
    let {rightSecSchema, leftSecSchema} = props;

    if(currentIndex === 0 && newIndex === 1) {
        const measurmenttype = getFieldByName('measurmenttype', 0, rightSecSchema);
        if (measurmenttype && ["x-well", "transmitter"].includes(measurmenttype.value)) {
            rightSecSchema = updateSchemaWithVariation(measurmenttype.value, rightSecSchema);
            leftSecSchema = updateSchemaWithVariation(measurmenttype.value, leftSecSchema);
        }
    }

    leftSecSchema = changeStepperIndex(leftSecSchema, newIndex);

    dispatch(updateLeftSection(leftSecSchema));
    dispatch(updateRightSection(rightSecSchema));
}