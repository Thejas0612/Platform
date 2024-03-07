import { CircularProgress, Grid } from "@mui/material";
import "./uiLayout.css";
import { useSelector } from "react-redux";
import ProjectLookoutLeftLayout from "./ProjectLookoutLeftLayout";
import ProjectLookoutRightLayout from "./ProjectLookoutRightLayout";
import { STATUS } from "../../../../status";
import TopLayout from "../TopLayout";

export default function ProjectLookoutUiLayout() {
  const status = useSelector((state) => state.initialBuData.status);
  document.title = "msol-projectlookout-productadvisor";

  if (status === STATUS.SUCCESSED)
    return (
      <Grid container>
        <div className="top_section">
          <TopLayout />
        </div>
        <Grid className="left_section" container direction="row">
          <Grid xs={12} md={3}>
            <ProjectLookoutLeftLayout />
          </Grid>
          <Grid className="right_section" container xs={12} md={9}>
            <ProjectLookoutRightLayout />
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
