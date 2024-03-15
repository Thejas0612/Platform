import {CardCheckboxGroup, CardCheckboxGroupProps} from "../CardCheckboxGroup";
import {render} from "@testing-library/react";

const PROPS: CardCheckboxGroupProps = {
    data: [
        {name: '1', title: "Coriolis"},
        {name: '2', title: "Differential Pressure Flow"},
        {name: '3', title: "Magnetic"},
        {name: '4', title: "Vortex"},
        {name: '5', title: "Density"},
        {name: '6', title: "Viscosity"}
    ]
}

describe("<CardCheckboxGroup />", () => {
    it('when state is default, then show title, image and checkbox', () => {
        const {container} = render(<CardCheckboxGroup {...PROPS} />)

        expect(container).toMatchSnapshot()
    });
})