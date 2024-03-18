import {CardCheckboxGroup, CardCheckboxGroupProps} from "../components/card-checkbox-group/CardCheckboxGroup";
import {FunctionComponent} from "react";

const CARD_CHECKBOX_GROUP_DATA: CardCheckboxGroupProps['data'] = [
    {name: '1', title: "Coriolis"},
    {name: '2', title: "Differential Pressure Flow"},
    {name: '3', title: "Magnetic"},
    {
        name: '4',
        title: "Vortex",
        disabled: true,
        disabledTooltip: 'This vertex technology is incompatible with your temperature range.'
    },
    {name: '5', title: "Density"},
    {name: '6', title: "Viscosity"},
]

export const Test: FunctionComponent = () => {
    return <CardCheckboxGroup data={CARD_CHECKBOX_GROUP_DATA}/>
}