import {render, screen} from "@testing-library/react";
import {CardCheckbox, CardCheckboxProps} from "../CardCheckbox";
import userEvent from '@testing-library/user-event';

const PROPS: CardCheckboxProps = {
    id: 'Test Id',
    name: 'Test Name',
    title: "Test Title",
    imageUrl: "https://placehold.co/150x150"
}

describe("<CardCheckbox />", () => {
    it('when state is default, then show title, image and checkbox', () => {
        const {container} = render(<CardCheckbox {...PROPS} />)

        expect(container).toMatchSnapshot()
    });

    it('when state is disabled, then show tooltip', async () => {
        const props: CardCheckboxProps = {...PROPS, disabled:true, disabledTooltip: "test disabled tooltip"}

        const {container} = render(<CardCheckbox { ...props} />)

        const image = screen.getByRole('img', { name: /test disabled tooltip/i} )
        await userEvent.hover(image);

        const tooltip = await screen.findByRole('tooltip')

        expect(tooltip).toMatchSnapshot()
        expect(container).toMatchSnapshot()
    });
})