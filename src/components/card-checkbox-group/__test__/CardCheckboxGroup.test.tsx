import {CardCheckboxGroup, CardCheckboxGroupProps} from "../CardCheckboxGroup";
import {fireEvent, render, screen} from "@testing-library/react";

const PROPS: CardCheckboxGroupProps = {
    selectedIds: [],
    data: [
        {id: 'CORIOLIS', name: 'coriolis', title: "Coriolis", imageUrl: "https://placehold.co/150x150"},
        {
            id: 'DIFFERENTIAL_PRESSURE_FLOW',
            name: 'differential-pressure-flow',
            title: "Differential Pressure Flow",
            imageUrl: "https://placehold.co/150x150"
        },
        {id: "MAGNETIC", name: 'magnetic', title: "Magnetic", imageUrl: "https://placehold.co/150x150"},
    ]
}

describe("<CardCheckboxGroup />", () => {
    it('when state is default, then 3 show checkbox', () => {
        const {container} = render(<CardCheckboxGroup {...PROPS} />)

        expect(container).toMatchSnapshot()
    });

    it('when 2 options are selected, then 2 checked checkboxes', () => {
        const {container} = render(<CardCheckboxGroup {...PROPS} selectedIds={["1", "3"]}/>)

        expect(container).toMatchSnapshot()
    });

    it('when state is error, then show error message.', () => {
        const {container} = render(<CardCheckboxGroup {...PROPS} error="test error"/>)

        expect(container).toMatchSnapshot()
    })

    it('when Coriolis is selected, then check Coriolis and fire onChange event.', async () => {
        const onChange = jest.fn()
        const {container} = render(<CardCheckboxGroup {...PROPS} onChange={onChange}/>)

        const checkboxes =screen.getAllByRole('checkbox')
        const coriolisCheckbox = checkboxes[0]
        fireEvent.click(coriolisCheckbox)

        expect(onChange).toHaveBeenCalledWith(['CORIOLIS'])
        expect(container).toMatchSnapshot()
    })
})