import { updateVariation } from "../../../../redux/reducers/initialBuDataSlice";

export const changeHandler = (props) => {
    const { dispatch, rightSecSchema, name, formData } = props;
    switch(name) {
        case "measurmenttype": 
            const type = formData[0].fields[0].value;
            dispatch(updateVariation({rightSection: rightSecSchema, type: type}));
            break;
        default:
            console.warn(`changeHandler is not applied for ${name}`);
    }
}