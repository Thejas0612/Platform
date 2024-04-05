import { FC, useState } from "react";
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
  onChange?: (selectedId: string[]) => void;
}

export const BlockCheckboxGroup: FC<BlockCheckboxGroupProps> = ({
                                                                  required = false,
                                                                  options,
                                                                  defaultIds = [],
                                                                  error = "",
                                                                  onChange = () => {
                                                                  }
                                                                }) => {
  const [value, setValue] = useState(defaultIds);

  return <MsolComponentHighlighter>
    <>
      <Stack spacing={4}>
        {
          options.map(item => {
            const selected = value.includes(item.id);

            const handleChange = () => {
              const newSelected = !selected;
              if (newSelected) {
                const newValue = [...value, item.id];
                setValue(newValue);
                onChange(newValue);
              } else {
                const newValue = value.filter(id => id !== item.id);
                setValue(newValue);
                onChange(newValue);
              }
            };

            return <BlockCheckbox key={item.id} {...item} onChange={handleChange} checked={selected} />;
          })
        }
      </Stack>
      {
        !error || <FormHelperText error={true}>{error}</FormHelperText>
      }
    </>
  </MsolComponentHighlighter>;
};