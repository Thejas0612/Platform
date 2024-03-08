import { CircularProgress, Grid } from "@mui/material";
import "./uiLayout.css";
import { useSelector } from "react-redux";
import { STATUS } from "../../../../status";
import TempLeftLayout from "./TempLeftLayout";
import TempRightLayout from "./TempRightLayout";
import TopLayout from "../TopLayout";
export default function TempUiLayout() {
  const status = useSelector((state) => state.initialBuData.status);
   document.title = "msol-tempPA-productadvisor";
  if (status === STATUS.SUCCESSED)
    return (
      <Grid container>
        <div className="top_section">
          <TopLayout />
        </div>
        <Grid className="left_section" container direction="row">
          <Grid xs={12} md={3}>
            <TempLeftLayout />
          </Grid>
          <Grid className="right_section" item xs={12} md={9}>
            <TempRightLayout />
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
