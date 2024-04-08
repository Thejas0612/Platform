import { FC, MouseEvent, MouseEventHandler, useState } from "react";
import { FormHelperText, Stack } from "@mui/material";
import { BlockCheckbox, BlockCheckboxProps } from "./BlockCheckbox";
import { MsolComponentHighlighter } from "../../msol-component-highlighter/MsolComponentHighlighter";

export interface BlockCheckboxGroupRow extends Omit<BlockCheckboxProps, "checked" | "onChange" | "showError"> {
  id: string;
}

export interface BlockCheckboxGroupProps {
  required?: boolean;
  options?: BlockCheckboxGroupRow[];
  data?: BlockCheckboxGroupRow[];
  defaultIds?: string[];
  error?: string;
  onChange?: (event: MouseEvent, type?: string, name?: string, value?: string[]) => void;
  othAttr?: { type: string };
  name: string;
  hideCheckboxes?: boolean;
}

export const BlockCheckboxGroup: FC<BlockCheckboxGroupProps> = ({
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

            return <BlockCheckbox key={item.id}
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