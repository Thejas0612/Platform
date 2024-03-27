import { FunctionComponent } from "react";
import { CardCheckbox, CardCheckboxProps } from "./CardCheckbox";
import { Box, FormHelperText, Grid } from "@mui/material";
import { environment } from "../../config/environment";

interface CardCheckboxGroupRow extends Omit<CardCheckboxProps, "selectChecked" | "onCompareChange"> {
  id: string;
}

export interface CardCheckboxGroupProps {
  comparedIds?: string[];
  selectedId?: string;
  data: CardCheckboxGroupRow[];
  error?: string;
  onChange?: (compareIds: string[], selectId?: string) => void;
}


export const CardCheckboxGroup: FunctionComponent<CardCheckboxGroupProps> = ({
                                                                               comparedIds = [],
                                                                               selectedId,
                                                                               data,
                                                                               error,
                                                                               onChange = () => {
                                                                               }
                                                                             }) => {
  return <Box
    sx={{ border: environment.VITE_OUTLINE_MSOL_COMPONENTS ? ".0625rem solid var(--ddl-color--secondary-ridgid-orange)" : undefined }}
  >
    <>

      <Grid container>
        {data.map((cardCheckboxProps) => {
          const comparedChecked = comparedIds.includes(cardCheckboxProps.id);
          const selectedChecked = cardCheckboxProps.id === selectedId;

          function handleCompareChange() {
            if (comparedChecked) {
              const newCompareIds = comparedIds.filter(_ => _ !== cardCheckboxProps.id);
              onChange(newCompareIds, selectedId);
            } else {
              const newCompareIds = [...comparedIds, cardCheckboxProps.id];
              onChange(newCompareIds, selectedId);
            }
          }

          function handleSelectChange() {
            onChange(comparedIds, cardCheckboxProps.id);
          }

          return <Grid key={cardCheckboxProps.name}
                       item
                       xs={6}
                       md={4}
                       lg={2}>
            <CardCheckbox {...cardCheckboxProps} comparedChecked={comparedChecked}
                          selectedChecked={selectedChecked} onCompareChange={handleCompareChange}
                          onSelectChange={handleSelectChange} />
          </Grid>;
        })}
      </Grid>
      {!error || <FormHelperText error={true}>{error}</FormHelperText>}
    </>
  </Box>;
};