import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../Input";
import userEvent from "@testing-library/user-event";

describe("<Input />", () => {
  const schemaProps = {
    type: "TEXT_INPUT",
    name: "density_norm",
    inputClass: "customRequired",
    disabled: false,
    required: true,
    align: "center",
    precision: 4,
    min: 0.0001,
    minError: "Entered Normal Density is below or equal to 0"
  };

  test("Show error when the value is less than the minimum", async () => {
    const { getByRole, container } = render(<Input schemaProps={schemaProps} size="small" />);

    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "-1" } });
    await userEvent.hover(input);
    const tooltip = await screen.findByRole("tooltip");

    expect(tooltip).toMatchSnapshot();
    expect(container).toMatchSnapshot();
  });

  test("Does not show error if the value is above the minimum", async () => {
    const { getByRole, container } = render(<Input schemaProps={schemaProps} size="small" />);

    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "5" } });
    fireEvent.blur(input);

    expect(container).toMatchSnapshot();
  });

  test("it should not contain a value in value if a - is typed", async () => {
    const { getByRole, container } = render(<Input schemaProps={schemaProps} size="small" />);

    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "-" } });
    fireEvent.blur(input);

    expect(container).toMatchSnapshot();
  });
});
