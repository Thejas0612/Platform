import ButtonStepper from "../ButtonStepper";
import {render} from "@testing-library/react";
import {useDispatch, useSelector} from "react-redux";

jest.mock('react-redux')

const PROPS = {
    copyRightSectionSchema: [],
    visibleElements: [],
    activeIndex: 0,
    schema: {},
    updateValidations: ()=> {},
    data: [],
    MSOLPAType: 'test'
}

describe('<ButtonStepper/>', () => {
    beforeEach(() => {
        useDispatch.mockReturnValue(jest.fn())
        useSelector.mockReturnValue(0)
    })

    test('when index is 0, then only show next button', () => {
        const {container} = render(<ButtonStepper { ...PROPS}></ButtonStepper>)

        expect(container).toMatchSnapshot()
    })

})