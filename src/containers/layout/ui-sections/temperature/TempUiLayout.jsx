import { CircularProgress, Grid } from "@mui/material";
import "./uiLayout.scss";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../../../status";
import TempLeftLayout from "./TempLeftLayout";
import TempRightLayout from "./TempRightLayout";
import TopLayout from "../TopLayout";
import { indexChangeHandlers } from "./indexChangeHandlers";

export default function TempUiLayout() {
  const status = useSelector((state) => state.initialBuData.status);
  const rightSecSchema = useSelector((state) => state.initialBuData?.rightSection);
  const leftSecSchema = useSelector((state) => state.initialBuData?.leftSection);
  const dispatch = useDispatch();

  const handleIndexChange = (currentIndex, newIndex) => {
    indexChangeHandlers({currentIndex, newIndex, rightSecSchema, leftSecSchema, dispatch});
  }

  if (status === STATUS.SUCCESSED)
    return (
      <Grid container className="temperature_pa">
        <Grid item className="top_section">
          <TopLayout />
        </Grid>
        <Grid item sx={{width: "100%"}}>
          <Grid container direction="row">
            <Grid item className="left_section" xs={12} md={3}>
              <TempLeftLayout onIndexChange={handleIndexChange}/>
            </Grid>
            <Grid item className="right_section" xs={12} md={9}>
              <TempRightLayout onIndexChange={handleIndexChange}/>
            </Grid>
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
