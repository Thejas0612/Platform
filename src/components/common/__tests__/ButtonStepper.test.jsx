import ButtonStepper from "../ButtonStepper";
import {render} from "@testing-library/react";
import {useDispatch, useSelector} from "react-redux";

jest.mock('react-redux')

describe('<ButtonStepper/>', () => {
    beforeEach(() => {
        useDispatch.mockReturnValue(jest.fn())
        useSelector.mockReturnValue(0)
    })

    it('when index is 0, then only show next button', () => {
        const {container} = render(<ButtonStepper></ButtonStepper>)

        expect(container).toMatchSnapshot()
    })

    it('when index greater than 0, then only show next and previous button', () => {
        useSelector.mockReturnValue(1)

        const {container} = render(<ButtonStepper></ButtonStepper>)

        expect(container).toMatchSnapshot()
    })
})