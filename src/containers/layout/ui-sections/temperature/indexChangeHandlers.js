import { updateLeftSection, updateRightSection } from "../../../../redux/reducers/initialBuDataSlice";
import { updateSchemaWithVariation, getFieldByName, changeStepperIndex } from "../schemaMutations";

export const indexChangeHandlers = (props) => { 
    const {currentIndex, newIndex, rightSecSchema, leftSecSchema, dispatch} = props;
    
    let updatedRightSecSchema = rightSecSchema;
    let updatedLeftSecSchema = leftSecSchema;

    if(currentIndex === 0 && newIndex === 1) {
        const measurmenttype = getFieldByName('measurmenttype', 0, rightSecSchema);
        if (measurmenttype && ["x-well", "transmitter"].includes(measurmenttype.value)) {
            updatedRightSecSchema = updateSchemaWithVariation(measurmenttype.value, rightSecSchema);
            updatedLeftSecSchema = updateSchemaWithVariation(measurmenttype.value, leftSecSchema);
        }
    }

    updatedLeftSecSchema = changeStepperIndex(updatedLeftSecSchema, newIndex);

    dispatch(updateLeftSection(updatedLeftSecSchema));
    dispatch(updateRightSection(updatedRightSecSchema));
}