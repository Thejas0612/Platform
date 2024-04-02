import { FC } from "react";
import { FormHelperText, Stack } from "@mui/material";
import { BlockCheckbox, BlockCheckboxProps } from "./BlockCheckbox";
import { MsolComponentHighlighter } from "../msol-component-highlighter/MsolComponentHighlighter";

export interface BlockCheckboxGroupRow extends Omit<BlockCheckboxProps, "checked" | "onChange"> {
  id: string;
}

export interface BlockCheckboxGroupProps {
  data: BlockCheckboxGroupRow[];
  selectedIds: string[];
  error?: string;
  onChange?: (selectedId: string[]) => void;
}

export const BlockCheckboxGroup: FC<BlockCheckboxGroupProps> = ({
                                                                                 data,
                                                                                 selectedIds,
                                                                                 error = "",
                                                                                 onChange = () => {
                                                                                 }
                                                                               }) => {
  return <MsolComponentHighlighter>
    <>
      <Stack spacing={4}>
        {
          data.map(item => {
            const selected = selectedIds.includes(item.id);

            const handleChange = () => {
              const newSelected = !selected;
              if (newSelected) {
                const newSelectedIds = [...selectedIds, item.id];
                onChange(newSelectedIds);
              } else {
                const newSelectedIds = selectedIds.filter(id => id !== item.id);
                onChange(newSelectedIds);
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