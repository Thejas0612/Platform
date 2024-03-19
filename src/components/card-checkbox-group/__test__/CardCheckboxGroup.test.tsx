import {CardCheckboxGroup, CardCheckboxGroupProps} from "../CardCheckboxGroup";
import {render} from "@testing-library/react";

const PROPS: CardCheckboxGroupProps = {
    selectedIds: [],
    data: [
        {id: '1', name: '1', title: "Coriolis", imageUrl: "https://placehold.co/150x150"},
        {id: '2', name: '2', title: "Differential Pressure Flow", imageUrl: "https://placehold.co/150x150"},
        {id: '3', name: '3', title: "Magnetic", imageUrl: "https://placehold.co/150x150"},
    ]
}

describe("<CardCheckboxGroup />", () => {
    it('when state is default, then 3 show checkbox', () => {
        const {container} = render(<CardCheckboxGroup {...PROPS} />)

        expect(container).toMatchSnapshot()
    });

    it('when 2 options are selected, then 2 checked checkboxes', () => {
        const {container} = render(<CardCheckboxGroup {...PROPS} selectedIds={["1", "3"]} />)

        expect(container).toMatchSnapshot()
    });

    it('when state is error, then show error message.', () => {
        const {container} = render(<CardCheckboxGroup {...PROPS} error="test error" />)

        expect(container).toMatchSnapshot()
    })

    it('when vortex is selected, the fire onChange event.', () => {
        const {container} = render(<CardCheckboxGroup {...PROPS} error="test error" />)

        expect(container).toMatchSnapshot()
    })
})