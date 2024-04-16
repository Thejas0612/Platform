import { FC, MouseEventHandler } from "react";
import { Box, Checkbox, FormControlLabel, Grid, Tooltip, Typography, useTheme } from "@mui/material";
import styles from "./CardCheckbox.module.css";

export interface CardCheckboxProps {
  id: string,
  name: string
  title: string
  imageUrl: string
  disabledTooltip?: string,
  disabled?: boolean,
  onCompareChange?: () => void,
  selectedChecked?: boolean,
  comparedChecked?: boolean,
  onSelectChange?: () => void,
}

const HORIZONTAL_CENTER_TOOLTIP: Parameters<typeof Tooltip>[0]["slotProps"] = {
  popper: {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, -90]
        }
      }
    ]
  }
};

export const CardCheckbox: FC<CardCheckboxProps> = ({
                                                                     name,
                                                                     title,
                                                                     imageUrl,
                                                                     disabled = false,
                                                                     disabledTooltip,
                                                                     onCompareChange = () => {
                                                                     },
                                                                     selectedChecked = false,
                                                                     comparedChecked = false,
                                                                     onSelectChange = () => {
                                                                     }
                                                                   }) => {
  const theme = useTheme();
  const disabledColor = theme.palette.action.disabled;

  const handleCompareChange: Parameters<typeof Checkbox>[0]["onChange"] = (event) => {
    event.stopPropagation();
    onCompareChange();
  };

  const handleSelectChange: MouseEventHandler<HTMLDivElement> = () => {
    if (disabled) {
      return;
    }

    onSelectChange();
  };

  return <Box onClick={handleSelectChange}
              sx={{
                cursor: !disabled ? "pointer" : undefined,
                padding: ".5rem",
                border: selectedChecked ? ".125rem solid var(--ddl-color--primary-emerson-green-dark)" : ".0625rem solid var(--ddl-color--primary-grey)"
              }}>
    <Grid direction="column"
          spacing={.5}
          alignItems="center"
          container
    >
      {/* Title */}
      <Grid item>
        <Typography sx={{ color: disabled ? disabledColor : undefined }}>{title}</Typography>
      </Grid>

      {/* Image and Disabled Tooltip */}
      <Grid item>
        {disabled ?
          <Tooltip title={disabledTooltip} placement="bottom" slotProps={HORIZONTAL_CENTER_TOOLTIP}>
            <img src={imageUrl} alt={title} className={styles.cardCheckbox__image} />
          </Tooltip>
          :
          <img src={imageUrl} alt={title} className={styles.cardCheckbox__image} />}
      </Grid>

      {/* Checkbox */}
      <Grid item>
        <FormControlLabel disabled={disabled}
                          onClick={(event) => { event.stopPropagation() }}
                          sx={{ textAlign: "center" }}
                          control={<Checkbox onChange={handleCompareChange} checked={comparedChecked} />}
                          label="compare"
                          name={name} />
      </Grid>
    </Grid>
  </Box>;
};