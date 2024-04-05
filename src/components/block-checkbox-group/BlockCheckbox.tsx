import React, { FC, MouseEventHandler } from "react";
import { Box, Checkbox, Stack, Typography, useTheme } from "@mui/material";
import { Info } from "@mui/icons-material";
import styles from "./BlockCheckbox.module.css";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

function findBorderColor(checked: boolean, error: boolean): string {
  if (error) {
    return "red";
  }
  if (checked) {
    return "var(--ddl-colorOverride--primary-emerson-green-dark)";
  }

  return "var(--ddl-colorOverride--primary-grey)";
}


export interface BlockCheckboxProps {
  checked: boolean
  onChange?: MouseEventHandler<HTMLDivElement>
  imgUrl: string,
  disabled?: boolean
  title: string
  description: string,
  tooltip?: string,
  error: true,
}

export const BlockCheckbox: FC<BlockCheckboxProps> = ({
                                                        checked,
                                                        onChange = () => {
                                                        },
                                                        imgUrl,
                                                        disabled = false,
                                                        title,
                                                        description,
                                                        error = false,
                                                        tooltip
                                                      }) => {
  const theme = useTheme();
  const colorOverride = disabled ? theme.palette.text.disabled : undefined;

  const handleChange: MouseEventHandler<HTMLDivElement> = (event) => {
    if (disabled) {
      return;
    }

    onChange(event);
  };

  return <Box
    onClick={handleChange}
    sx={{
      cursor: !disabled ? "pointer" : undefined,
      padding: ".5rem",
      border: checked ? 2 : 1,
      borderColor: findBorderColor(checked, error)
    }}
  >
    <Stack direction="row"
           alignItems="center">

      <Checkbox checked={checked} disabled={disabled} />

      <img src={imgUrl} alt={title} className={styles.blockCheckbox__image} />

      <Box sx={{ margin: 2 }}>
        <>
          <Typography gutterBottom variant="h5" sx={{ color: colorOverride }}>
            {title}
            {
              tooltip != null && <Tooltip title={tooltip} placement="top" arrow>
                <IconButton>
                  <Info sx={{ color: colorOverride || "primary" }} />
                </IconButton>
              </Tooltip>
            }
          </Typography>

          <Typography variant="body2" sx={{ color: colorOverride }}>
            {description}
          </Typography>
        </>
      </Box>
    </Stack>
  </Box>;
};