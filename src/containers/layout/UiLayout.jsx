import { CircularProgress, Grid } from "@mui/material";
import "./uiLayout.css";
import LeftLayout from "./ui-sections/LeftLayout";
import RightLayout from "./ui-sections/RightLayout";
import { useSelector } from "react-redux";

export default function UiLayout() {
  const status = useSelector((state) => state.initialBuData.status);

  if (status === "successeded")
    return (
      <Grid container>
        <div className="top_section"></div>
        <Grid className="left_section" container direction="row">
          <Grid xs={12} md={3}>
            <LeftLayout />
          </Grid>
          <Grid className="right_section" container xs={12} md={9}>
            <RightLayout />
          </Grid>
        </Grid>
      </Grid>
    );
  return (
    <div className="spinner_wrapper">
      <CircularProgress />
    </div>
  );
}
