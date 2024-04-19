import { updateRightSection, updateLeftSection } from "../../../../redux/reducers/initialBuDataSlice";
import { getFieldComponentByName, updateSchemaWithVariation } from "../schemaMutations";

export const changeHandler = (props) => {
    const { dispatch, rightSecSchema, leftSecSchema, name, formData } = props;
    
    switch(name) {
        case "measurmenttype": 
            const type = formData[0].fields[0].value;
            const newRightSchema = updateSchemaWithVariation(type, rightSecSchema);
            dispatch(updateRightSection(newRightSchema));

            const newLeftSchema = updateSchemaWithVariation(type, leftSecSchema);
            dispatch(updateLeftSection(newLeftSchema));

            break;
        default:
            console.warn(`changeHandler is not applied for ${name}`);
    }
}       