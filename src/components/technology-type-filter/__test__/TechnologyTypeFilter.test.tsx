import {TechnologyTypeFilter, TechnologyTypeFilterProps} from "../TechnologyTypeFilter";
import {fireEvent, render} from "@testing-library/react";

const PROPS: TechnologyTypeFilterProps = {
    sortOptions: [{ label: "Recommended", value: "recommended"}]
}

describe("<TechnologyTypeFilter />", () => {
    it("should render the filter with default state", () => {
        const {container} = render(<TechnologyTypeFilter {...PROPS} />)

        expect(container).toMatchSnapshot()
    });

    it("should render the sort by filter after click the filter", () => {
        const { getByText, getByRole } = render(<TechnologyTypeFilter {...PROPS} />);
        const button = getByText("Filters");
        fireEvent.click(button);
        const select = getByRole("combobox");
        expect(select).toBeInTheDocument();
    });

    it("should fire onClose event when clicked.", async () => {
        const onCloseMock = jest.fn()
        const { getByText } = render(<TechnologyTypeFilter onClose={onCloseMock} {...PROPS}/>);
        const button = getByText("Filters");
        fireEvent.click(button);
        fireEvent.click(button);
        expect(onCloseMock).toHaveBeenCalled();
    })
})