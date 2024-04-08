import { FC, MouseEvent, MouseEventHandler, useState } from "react";
import { FormHelperText, Stack } from "@mui/material";
import { MsolTitleOrThumbnailItem, MsolTitleOrThumbnailItemProps } from "./MsolTitleOrThumbnailItem";
import { MsolComponentHighlighter } from "../../msol-component-highlighter/MsolComponentHighlighter";

export interface MsolTileOrThumbnailItem extends Omit<MsolTitleOrThumbnailItemProps, "checked" | "onChange" | "showError"> {
  id: string;
}

export interface MsolTileOrThumbnailProps {
  required?: boolean;
  options?: MsolTileOrThumbnailItem[];
  data?: MsolTileOrThumbnailItem[];
  defaultIds?: string[];
  error?: string;
  onChange?: (event: MouseEvent, type?: string, name?: string, value?: string[]) => void;
  othAttr?: { type: string };
  name: string;
  hideCheckboxes?: boolean;
}

export const MsolTileOrThumbnail: FC<MsolTileOrThumbnailProps> = ({
                                                                  required = false,
                                                                  data,
                                                                  options,
                                                                  defaultIds = [],
                                                                  error = "",
                                                                  onChange = () => {
                                                                  },
                                                                  othAttr,
                                                                  name,
                                                                  hideCheckboxes = false
                                                                }) => {
  const dataOverride = data ? data : options;
  if (dataOverride == null) {
    throw Error("`data` property is required.");
  }

  const errorText = error.trim();
  const [value, setValue] = useState(defaultIds);

  return <MsolComponentHighlighter>
    <>
      <Stack spacing={4}>
        {
          dataOverride.map(item => {
            const checked = value.includes(item.id);

            const handleChange: MouseEventHandler<HTMLDivElement> = (event) => {
              const newChecked = !checked;
              const newValue = newChecked ? [...value, item.id] : value.filter(id => id !== item.id);
              setValue(newValue);
              onChange(event, othAttr?.type, name, newValue);
            };

            return <MsolTitleOrThumbnailItem key={item.id}
                                             onChange={handleChange}
                                             checked={checked}
                                             hideCheckbox={hideCheckboxes}
                                             showError={error !== ""}
                                             {...item} />;
          })
        }
      </Stack>
      {
        !errorText || <FormHelperText error={true}>{errorText}</FormHelperText>
      }
    </>
  </MsolComponentHighlighter>;
};