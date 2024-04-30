import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DropdownMenuGroup } from "../DropdownMenuGroup";

const PROPS = {
  data: [
    {
      id: "OPERATING_TEMPERATURE",
      placeholder: "OPERATING TEMPERATURE",
      options: [
        {
          label: "Greater Than 400 F (204 C)",
          title: "Greater Than 400 F (204 C)",
          value: "GREATER_THAN_400_F"
        }, {
          label: "Less Than 400 F (204 C)",
          title: "Less Than 400 F (204 C)",
          value: "LESS_THAN_400_F"
        }
      ]
    },

    {
      id: "OPERATING_PRESSURE",
      placeholder: "OPERATING PRESSURE",
      options: [
        {
          label: "Greater Than 1960psi (135 bar)",
          title: "Greater Than 1960psi (135 bar)",
          value: "GREATER_THAN_1960-PSI"
        }, {
          label: "Less Than 1960psi (135 bar)",
          title: "Less Than 1960psi (135 bar)",
          value: "LESS_THAN_1960_PSI"
        }
      ]
    }
  ],
  selectedOptions: {
    OPERATING_PRESSURE: [],
    OPERATING_TEMPERATURE: []
  }
};

describe("<DropdownMenuGroup />", () => {
  test("when state is default, then show 2 dropdowns", () => {
    const { container } = render(<DropdownMenuGroup {...PROPS} />);

    expect(container).toMatchSnapshot();
  });

  test("when dropdown is open, then show checkboxes", async () => {
    const { container } = render(<DropdownMenuGroup {...PROPS} />);

    const operatingTemperatureInput = screen.getByText("OPERATING TEMPERATURE");
    await userEvent.click(operatingTemperatureInput);

    const presentation = screen.getByRole("presentation");

    expect(container).toMatchSnapshot();
    expect(presentation).toMatchSnapshot();
  });
});
