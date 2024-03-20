import ButtonStepper from "../ButtonStepper";
import {render} from "@testing-library/react";
import {useDispatch, useSelector} from "react-redux";

jest.mock('react-redux')

describe('<ButtonStepper/>', () => {
    beforeEach(() => {
        useDispatch.mockReturnValue(jest.fn())
        useSelector.mockReturnValue(0)
    })

    xit('when index is 0, then only show next button', () => {
        const {container} = render(<ButtonStepper></ButtonStepper>)

        expect(container).toMatchSnapshot()
    })

})