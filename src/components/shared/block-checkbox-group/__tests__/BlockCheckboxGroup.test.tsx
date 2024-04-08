import { fireEvent, render, screen } from "@testing-library/react";
import { BlockCheckboxGroup, BlockCheckboxGroupProps } from "../BlockCheckboxGroup";

const PROPS: BlockCheckboxGroupProps = {
  name: "test name",
  defaultIds: ["2"],
  data: [
    {
      id: "1",
      title: "1 - Unchecked",
      description: "Flow Measurement is the process of measuring fluid in your plant or industry. You can measure flow through a variety of different devices such as Coriolis, differential pressure, vortex, magnetic, ultrasonic, turbine and positive displacement meters.",
      imgUrl: "https://emerson-cdn.azurewebsites.net/7bd555544cf68071bafa.png"
    },
    {
      id: "2",
      title: "2 - Checked",
      description: "Our density measurement devices offer reliable performance for applications such as concentration, API, Brix, and more.",
      imgUrl: "https://emerson-cdn.azurewebsites.net/940becae8b116d587fbd.png"
    },
    {
      id: "3",
      title: "3 - Disabled",
      description: "Our inline viscosity meter offers accurate, repeatable measurement in industries such as refining, chemical, life sciences, and more.",
      imgUrl: "https://emerson-cdn.azurewebsites.net/940becae8b116d587fbd.png",
      disabled: true
    }
  ]
};

describe("<BlockCheckboxGroup />", () => {
  test("when state is default, then show 1 unchecked checkbox, 1 checked checkbox and 1 disabled checkbox.", () => {
    const { container } = render(<BlockCheckboxGroup {...PROPS} />);

    expect(container).toMatchSnapshot();
  });

  test("when hideCheckboxes is true, then do not show checkboxes.", () => {
    const { container } = render(<BlockCheckboxGroup {...PROPS} />);

    expect(container).toMatchSnapshot();
  });

  test("when first checkbox is check, then fire onChange event.", async () => {
    const handleChange = jest.fn();

    render(<BlockCheckboxGroup {...PROPS} onChange={handleChange} />);

    const checkboxes = await screen.findAllByRole("checkbox");
    const firstCheckbox = checkboxes[0];
    fireEvent.click(firstCheckbox);

    expect(handleChange).toHaveBeenCalledWith(expect.any(Object), undefined, "test name", ["2", "1"]);
  });

  test("when state is error, then show error message.", () => {
    const { container } = render(<BlockCheckboxGroup {...PROPS} error="test error" />);

    expect(container).toMatchSnapshot();
  });
});