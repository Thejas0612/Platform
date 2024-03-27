import { FunctionComponent } from "react";
import { Box, Checkbox, Stack, Typography } from "@mui/material";
import styles from "./BlockCheckbox.module.css";

export interface BlockCheckboxProps {
  checked: boolean
  onChange?: () => void
  imgUrl: string,
  disabled?: boolean
  title: string
  description: string
}

export const BlockCheckbox: FunctionComponent<BlockCheckboxProps> = ({
                                                                       checked,
                                                                       onChange = () => {
                                                                       },
                                                                       imgUrl,
                                                                       disabled = false,
                                                                       title,
                                                                       description
                                                                     }) => {
  const handleChange = () => {
    if (disabled) {
      return;
    }

    onChange();
  };
  return <Box
    onClick={handleChange}
    sx={{
      cursor: "pointer",
      padding: ".5rem",
      border: checked ? "1px solid var(--ddl-color--primary-emerson-green-dark)" : "1px solid var(--ddl-color--primary-grey)"
    }}
  >
    <Stack direction="row"
           alignItems="center">

      <Checkbox checked={checked} disabled={disabled} />

      <img src={imgUrl} alt={title} className={styles.blockCheckbox__image} />

      <Box sx={{ margin: 2 }}>
        <>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </>
      </Box>
    </Stack>
  </Box>;
};