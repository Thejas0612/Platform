import React, { FC, MouseEventHandler } from "react";
import { Box, Checkbox, Stack, Typography, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Info } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

function findBorderColor(checked: boolean, error: boolean): string {
  if (error) {
    return "var(--ddl-color--primary-red)";
  }
  if (checked) {
    return "var(--ddl-color--primary-emerson-green)";
  }

  return grey[200];
}

export interface MsolTitleOrThumbnailItemProps {
  checked: boolean
  onChange?: MouseEventHandler<HTMLDivElement>
  imgUrl: string,
  disabled?: boolean
  title: string
  description: string,
  tooltip?: string,
  hideCheckbox?: boolean
  showError: boolean,
}

export const MsolTitleOrThumbnailItem: FC<MsolTitleOrThumbnailItemProps> = ({
                                                                              checked,
                                                                              onChange = () => {
                                                                              },
                                                                              imgUrl,
                                                                              disabled = false,
                                                                              title,
                                                                              description,
                                                                              showError = false,
                                                                              tooltip,
                                                                              hideCheckbox = false
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
      border: 1,
      borderColor: findBorderColor(checked, showError)
    }}
  >
    <Stack direction="row"
           alignItems="center">

      {!hideCheckbox && <Checkbox checked={checked} disabled={disabled} />}

      <Box
        component="img"
        sx={{
          height: { xs: "6rem", md: "9rem;" },
          width: "auto"
        }}
        src={imgUrl}
        alt={title}
      />

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