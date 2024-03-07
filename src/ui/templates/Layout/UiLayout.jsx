import { CircularProgress, Grid } from "@mui/material";
import "./uiLayout.css";
import LeftLayout from "./Sections/LeftLayout";
import RightLayout from "./Sections/RightLayout";
import { useSelector } from "react-redux";
import { STATUS } from "../../../status";

export default function UiLayout() {
  const status = useSelector((state) => state.initialBuData.status);

  if (status === STATUS.SUCCESSED)
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