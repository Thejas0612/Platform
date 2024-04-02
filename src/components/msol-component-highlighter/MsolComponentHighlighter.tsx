import { FC } from "react";
import { environment } from "../../config/environment";
import { Box } from "@mui/material";

export const MsolComponentHighlighter: FC = ({ children }) => {
  const showBorder = environment.VITE_HIGHLIGHT_MSOL_COMPONENTS;

  if (showBorder) {
    return <Box sx={{ border: ".0625rem solid var(--ddl-color--secondary-ridgid-orange)" }}>
      {children}
    </Box>;
  } else {
    return <>{children}</>;
  }
};