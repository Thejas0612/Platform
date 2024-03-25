import { Grid } from "@mui/material";
import { ButtonInput } from "../dynamic-ui/uiComponentsConfig";
import "./ClearButton.css";

export interface ButtonProps {
  handleClearButton: () => void;
  selectedIds?: string[];
}

export const ClearButton = ({ handleClearButton, selectedIds }: ButtonProps) => {
  return (
    <>
      <Grid
        style={{ backgroundColor: "#F0F0F0", height: "80px" }}
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={5}>
          <p>selectedIds = {selectedIds?.toSorted().join(", ")}</p>
        </Grid>

        <Grid item xs={3}>
          <ButtonInput
            btnType="secondary"
            customClass="clearButton"
            label="CLEAR ALL"
            onClick={() => {
              handleClearButton();
            }}
          />
        </Grid>

        <Grid item xs={3}>
          <ButtonInput btnType="primary" customClass="compareButton" label="COMPARE" />
        </Grid>
      </Grid>
    </>
  );
};
