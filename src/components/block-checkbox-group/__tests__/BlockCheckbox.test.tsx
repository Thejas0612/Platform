import { BlockCheckbox, BlockCheckboxProps } from "../BlockCheckbox";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const PROPS: BlockCheckboxProps = {
  checked: false,
  imgUrl: "test url",
  title: "test title",
  description: "test description"
};

describe("<BlockCheckbox {...PROPS} />", () => {
  it("when disabled anc clicked, then prevent onChange event", async () => {
    const handleChange = jest.fn();
    render(<BlockCheckbox {...PROPS} disabled={true} onChange={handleChange} />);

    const title = screen.getByText("test title");
    await userEvent.click(title);

    expect(handleChange).not.toHaveBeenCalled();
  });
});