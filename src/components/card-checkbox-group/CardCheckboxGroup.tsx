import {FunctionComponent} from "react";
import {CardCheckbox, CardCheckboxProps} from "./CardCheckbox";

export interface CardCheckboxGroupProps {
    data: CardCheckboxProps[]
}

export const CardCheckboxGroup: FunctionComponent<CardCheckboxGroupProps> = ({data}) => {
    return <>
        {data.map((cardCheckboxProps) => {
            return <CardCheckbox key={cardCheckboxProps.name} {...cardCheckboxProps}/>
        })}
    </>
}