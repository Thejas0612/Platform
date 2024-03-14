import {FunctionComponent} from "react";

export interface CardCheckboxProps {
    name: string
    title: string
}

export const CardCheckbox: FunctionComponent<CardCheckboxProps> = ({name, title}) => {
    return <div>{name},{title}</div>;
}