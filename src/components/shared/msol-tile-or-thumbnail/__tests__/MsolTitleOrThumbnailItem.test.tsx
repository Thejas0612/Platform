import { MsolTitleOrThumbnailItem, MsolTitleOrThumbnailItemProps } from "../MsolTitleOrThumbnailItem";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const PROPS: MsolTitleOrThumbnailItemProps = {
  checked: false,
  imgUrl: "test url",
  title: "test title",
  description: "test description",
  showError: false
};

describe("<MsolTitleOrThumbnailItem {...PROPS} />", () => {
  test("when disabled anc clicked, then prevent onChange event", async () => {
    const handleChange = jest.fn();
    render(<MsolTitleOrThumbnailItem {...PROPS} disabled={true} onChange={handleChange} />);

    const title = screen.getByText("test title");
    await userEvent.click(title);

    expect(handleChange).not.toHaveBeenCalled();
  });

  test('when tooltip is empty string, then hide tooltip', () => {
    const {container} =  render(<MsolTitleOrThumbnailItem {...PROPS} tooltip={""} />);

    expect(container).toMatchSnapshot()
  })
});