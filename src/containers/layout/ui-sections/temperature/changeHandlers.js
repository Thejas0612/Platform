import { updateVariation } from "../../../../redux/reducers/initialBuDataSlice";

export const changeHandler = (props) => {
    const { dispatch, rightSecSchema, name } = props;
    switch(name) {
        case "measurmenttype": 

            dispatch(updateVariation({rightSection: rightSecSchema, type: "transmitter"}));
            break;
        default:
            console.warn(`changeHandler is not applied for ${name}`);
    }
}