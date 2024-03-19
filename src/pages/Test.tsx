import {CardCheckboxGroup, CardCheckboxGroupProps} from "../components/card-checkbox-group/CardCheckboxGroup";
import {FunctionComponent} from "react";

const CARD_CHECKBOX_GROUP_DATA: CardCheckboxGroupProps['data'] = [
    {name: '1', title: "Coriolis", imageUrl: "https://placehold.co/150x150"},
    {name: '2', title: "Differential Pressure Flow", imageUrl: "https://placehold.co/150x150"},
    {name: '3', title: "Magnetic", imageUrl: "https://placehold.co/150x150"},
    {
        name: '4',
        title: "Vortex",
        imageUrl: "https://placehold.co/150x150",
        disabled: true,
        disabledTooltip: 'This vertex technology is incompatible with your temperature range.'
    },
    {name: '5', title: "Density", imageUrl: "https://placehold.co/150x150"},
    {name: '6', title: "Viscosity", imageUrl: "https://placehold.co/150x150"},
]

export const Test: FunctionComponent = () => {
    return <>
        <h2>Normal</h2>
        <CardCheckboxGroup data={CARD_CHECKBOX_GROUP_DATA}/>

        <h2>Error</h2>
        <CardCheckboxGroup data={CARD_CHECKBOX_GROUP_DATA.slice(0, 2)} error={"You must select 2 or more technologies to compare."}/>
    </>

}