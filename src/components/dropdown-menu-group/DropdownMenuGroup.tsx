import { FC, memo } from "react";
import { Grid, Typography } from "@mui/material";
import { MultipleSelectInput, MultipleSelectInputProps } from "./MultipleSelectInput";
import { MsolComponentHighlighter } from "../msol-component-highlighter/MsolComponentHighlighter";

export interface Dropdown extends Omit<MultipleSelectInputProps, "onChange"|"value"> {
  id: string;
}

export interface DropdownMenuGroupProps {
  dropdowns: Dropdown [];
  selectedOptions:{ [key: string]: string[] };
  onChange?: (dropdownId: string, value: string[]) => void;
}

export const DropdownMenuGroup: FC<DropdownMenuGroupProps> = memo(({
                                                                      dropdowns,
                                                                      selectedOptions,
                                                                      onChange = () => {
                                                                      }
                                                                    }) => {
  return <MsolComponentHighlighter>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="subtitle2">Filter By:</Typography>
      </Grid>

      {dropdowns.map((dropdown) => (
        <Grid key={dropdown.id} item xs={6} md={4} xl={3}>
          <MultipleSelectInput
            {...dropdown}
            value={selectedOptions[dropdown.id]}
            onChange={(value) => {
              onChange(dropdown.id, value);
            }} />
        </Grid>
      ))}
    </Grid>
  </MsolComponentHighlighter>;
});
