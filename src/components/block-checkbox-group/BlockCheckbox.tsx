import { FC } from "react";
import { Box, Checkbox, Stack, Typography, useTheme } from "@mui/material";
import styles from "./BlockCheckbox.module.css";

export interface BlockCheckboxProps {
  checked: boolean
  onChange?: () => void
  imgUrl: string,
  disabled?: boolean
  title: string
  description: string
}

export const BlockCheckbox: FC<BlockCheckboxProps> = ({
                                                        checked,
                                                        onChange = () => {
                                                        },
                                                        imgUrl,
                                                        disabled = false,
                                                        title,
                                                        description
                                                      }) => {
  const theme = useTheme();

  const handleChange = () => {
    if (disabled) {
      return;
    }

    onChange();
  };

  return <Box
    onClick={handleChange}
    sx={{
      cursor: !disabled ? "pointer" : undefined,
      padding: ".5rem",
      border: checked ? 2 : 1,
      borderColor: checked ? "var(--ddl-color--primary-emerson-green-dark)" : "var(--ddl-color--primary-grey)"
    }}
  >
    <Stack direction="row"
           alignItems="center">

      <Checkbox checked={checked} disabled={disabled} />

      <img src={imgUrl} alt={title} className={styles.blockCheckbox__image} />

      <Box sx={{ margin: 2 }}>
        <>
          <Typography gutterBottom variant="h5" sx={{ color: disabled ? theme.palette.text.disabled : undefined }}>
            {title}
          </Typography>

          <Typography variant="body2" sx={{ color: disabled ? theme.palette.text.disabled : undefined }}>
            {description}
          </Typography>
        </>
      </Box>
    </Stack>
  </Box>;
};