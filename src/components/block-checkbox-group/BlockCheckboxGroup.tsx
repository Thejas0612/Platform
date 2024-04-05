import { FC, MouseEvent, MouseEventHandler, useState } from "react";
import { FormHelperText, Stack } from "@mui/material";
import { BlockCheckbox, BlockCheckboxProps } from "./BlockCheckbox";
import { MsolComponentHighlighter } from "../msol-component-highlighter/MsolComponentHighlighter";

export interface BlockCheckboxGroupRow extends Omit<BlockCheckboxProps, "checked" | "onChange"> {
  id: string;
}

export interface BlockCheckboxGroupProps {
  required?: boolean;
  options: BlockCheckboxGroupRow[];
  defaultIds?: string[];
  error?: string;
  onChange?: (event: MouseEvent, type?: string, name?: string, value?: string[]) => void;
  othAttr?: { type: string };
  name: string;
}

export const BlockCheckboxGroup: FC<BlockCheckboxGroupProps> = ({
                                                                  required = false,
                                                                  options,
                                                                  defaultIds = [],
                                                                  error = "",
                                                                  onChange = () => {
                                                                  },
                                                                  othAttr,
                                                                  name
                                                                }) => {
  const errorText = error.trim();
  const [value, setValue] = useState(defaultIds);

  return <MsolComponentHighlighter>
    <>
      <Stack spacing={4}>
        {
          options.map(item => {
            const checked = value.includes(item.id);

            const handleChange: MouseEventHandler<HTMLDivElement> = (event) => {
              const newChecked = !checked;
              const newValue = newChecked ? [...value, item.id] : value.filter(id => id !== item.id);
              setValue(newValue);
              onChange(event, othAttr?.type, name, newValue);
            };

            return <BlockCheckbox key={item.id} {...item} onChange={handleChange} checked={checked} error={error != "" } />;
          })
        }
      </Stack>
      {
        !errorText || <FormHelperText error={true}>{errorText}</FormHelperText>
      }
    </>
  </MsolComponentHighlighter>;
};