import { FilterButton } from "../FilterButton";
import { fireEvent, render, screen } from "@testing-library/react";

const PROPS = {
    label: "Filters"
};

describe("<TechnologyTypeFilter />", () => {
    test("should render the filter with default state", () => {
        const { container } = render(<FilterButton {...PROPS} />);

        expect(container).toMatchSnapshot();
    });

    test("should fire onClose event when clicked.", async () => {
        const handleClick = jest.fn();
        const { container } = render(<FilterButton {...PROPS} onClick={handleClick} />);

        const button = screen.getByText("Filters");
        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalled();
        expect(container).toMatchSnapshot();
    });
});