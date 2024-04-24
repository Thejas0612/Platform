import { updateRightSection } from "../../../../redux/reducers/initialBuDataSlice";
import { updateFieldByName } from "../schemaMutations";

export const changeHandler = (props) => {
    const { dispatch, name, formData } = props;
    let { rightSecSchema } = props;
    switch(name) {
        case "measurmenttype": 
            const type = formData[0].fields[0].value;
            rightSecSchema = updateFieldByName('measurmenttype', 0, rightSecSchema, 'value', type);
            dispatch(updateRightSection(rightSecSchema));
            break;
    }
}