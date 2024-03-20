import {CardCheckboxGroup, CardCheckboxGroupProps} from "../components/card-checkbox-group/CardCheckboxGroup";
import {FunctionComponent, useState} from "react";

const CARD_CHECKBOX_GROUP_DATA: CardCheckboxGroupProps['data'] = [
    {id: "1", name: '1', title: "Coriolis", imageUrl: "https://placehold.co/150x150"},
    {id: "2", name: '2', title: "Differential Pressure Flow", imageUrl: "https://placehold.co/150x150"},
    {id: "3", name: '3', title: "Magnetic", imageUrl: "https://placehold.co/150x150"},
    {
        id: "4",
        name: '4',
        title: "Vortex",
        imageUrl: "https://placehold.co/150x150",
        disabled: true,
        disabledTooltip: 'This vertex technology is incompatible with your temperature range.'
    },
    {
        id: "5",
        name: '5', title: "Density", imageUrl: "https://placehold.co/150x150"
    },
    {id: "6", name: '6', title: "Viscosity", imageUrl: "https://placehold.co/150x150"},
]

export const Test: FunctionComponent = () => {
    const [selectedIds, setSelectedId] = useState<string[]>([])
    return <>
        <h2>Normal</h2>
        <CardCheckboxGroup selectedIds={selectedIds} data={CARD_CHECKBOX_GROUP_DATA} onChange={(newSelectedId) => {
            setSelectedId(newSelectedId)
        }}/>
        <div>selectedIds = {selectedIds.toSorted().join(", ")}</div>

        <h2>Error</h2>
        <CardCheckboxGroup data={CARD_CHECKBOX_GROUP_DATA.slice(0, 2)}
                           error={"You must select 2 or more technologies to compare."}/>
    </>

}