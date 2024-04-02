import { CardCheckboxGroup, CardCheckboxGroupProps } from "../CardCheckboxGroup";
import { fireEvent, render, screen } from "@testing-library/react";

const PROPS: CardCheckboxGroupProps = {
  comparedIds: [],
  data: [
    { id: "CORIOLIS", name: "coriolis", title: "Coriolis", imageUrl: "https://placehold.co/150x150" },
    {
      id: "DIFFERENTIAL_PRESSURE_FLOW",
      name: "differential-pressure-flow",
      title: "Differential Pressure Flow",
      imageUrl: "https://placehold.co/150x150"
    },
    { id: "MAGNETIC", name: "magnetic", title: "Magnetic", imageUrl: "https://placehold.co/150x150" }
  ]
};

describe("<CardCheckboxGroup />", () => {
  test("when state is default, then 3 show checkbox", () => {
    const { container } = render(<CardCheckboxGroup {...PROPS} />);

    expect(container).toMatchSnapshot();
  });

  test("when 2 options are selected, then 2 checked checkboxes", () => {
    const { container } = render(<CardCheckboxGroup {...PROPS} comparedIds={["1", "3"]} />);

    expect(container).toMatchSnapshot();
  });

  test("when state is error, then show error message.", () => {
    const { container } = render(<CardCheckboxGroup {...PROPS} error="test error" />);

    expect(container).toMatchSnapshot();
  });

  test("when Coriolis compare is selected, then check Coriolis compare and fire onChange event.", async () => {
    const onChange = jest.fn();
    const { container } = render(<CardCheckboxGroup {...PROPS} onChange={onChange} />);

    const checkboxes = screen.getAllByRole("checkbox");
    const coriolisCheckbox = checkboxes[0];
    fireEvent.click(coriolisCheckbox);

    expect(onChange).toHaveBeenCalledWith(["CORIOLIS"], undefined);
    expect(container).toMatchSnapshot();
  });

  test("when Magnetic selected, then check Magnetic and fire onChange event.", async () => {
    const onChange = jest.fn();
    const { container, rerender } = render(<CardCheckboxGroup {...PROPS} onChange={onChange} />);

    const magneticTitle = screen.getByText("Magnetic");
    fireEvent.click(magneticTitle);

    rerender(<CardCheckboxGroup {...PROPS} onChange={onChange} selectedId={"MAGNETIC"} />);

    expect(onChange).toHaveBeenCalledWith([], "MAGNETIC");
    expect(container).toMatchSnapshot();
  });
});