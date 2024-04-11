import { CircularProgress, Grid } from "@mui/material";
import "./uiLayout.css";
import { useSelector, useDispatch } from "react-redux";
import ProjectLookoutLeftLayout from "./ProjectLookoutLeftLayout";
import ProjectLookoutRightLayout from "./ProjectLookoutRightLayout";
import { STATUS } from "../../../../status";
import TopLayout from "../TopLayout";
import { useEffect } from "react";
import { fetchSchema, resetActiveIndex, updateBu } from "../../../../redux/reducers/initialBuDataSlice";

export default function ProjectLookoutUiLayout() {
  const status = useSelector((state) => state.initialBuData.status);
  const BUCODE = "project_Lookout";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetActiveIndex(0));
    dispatch(fetchSchema({ buType: BUCODE }));
    dispatch(updateBu(BUCODE));
  }, []);

  if (status === STATUS.SUCCESSED)
    return (
      <Grid container>
        <div className="top_section">
          <TopLayout />
        </div>
        <Grid className="left_section" container direction="row">
          <Grid item xs={12} md={3}>
            <ProjectLookoutLeftLayout />
          </Grid>
          <Grid className="right_section" item xs={12} md={9}>
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
