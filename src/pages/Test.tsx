import {CardCheckboxGroup, CardCheckboxGroupProps} from "../components/card-checkbox-group/CardCheckboxGroup";
import {FunctionComponent} from "react";

const CARD_CHECKBOX_GROUP_DATA: CardCheckboxGroupProps['data'] = [{name: '1',title: "test 1"}, {name:'2',title: "test 2"}]

export const Test: FunctionComponent = () => {
    return <CardCheckboxGroup data={CARD_CHECKBOX_GROUP_DATA} />
}