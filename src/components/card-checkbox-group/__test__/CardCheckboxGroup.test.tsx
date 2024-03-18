import {CardCheckboxGroup, CardCheckboxGroupProps} from "../CardCheckboxGroup";
import {render} from "@testing-library/react";

const PROPS: CardCheckboxGroupProps = {
    data: [
        {name: '1', title: "Coriolis", imageUrl: "https://placehold.co/150x150"},
        {name: '2', title: "Differential Pressure Flow", imageUrl: "https://placehold.co/150x150"},
        {name: '3', title: "Magnetic", imageUrl: "https://placehold.co/150x150"},
        {name: '4', title: "Vortex", imageUrl: "https://placehold.co/150x150"},
        {name: '5', title: "Density", imageUrl: "https://placehold.co/150x150"},
        {name: '6', title: "Viscosity", imageUrl: "https://placehold.co/150x150"}
    ]
}

describe("<CardCheckboxGroup />", () => {
    it('when state is default, then 6 show checkbox', () => {
        const {container} = render(<CardCheckboxGroup {...PROPS} />)

        expect(container).toMatchSnapshot()
    });
})