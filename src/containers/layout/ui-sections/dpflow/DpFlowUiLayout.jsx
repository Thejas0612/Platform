import { CircularProgress, Grid } from "@mui/material";
import "./uiLayout.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DpFlowLeftLayout from "./DpFlowLeftLayout";
import DpFlowRightLayout from "./DpFlowRightLayout";
import TopLayout from "../TopLayout";
import DP_FLOW_CONSTANTS from "./constants/dpFlowConstants";
import { STATUS } from "../../../../status";
import {
  fetchSchema,
  resetActiveIndex,
  updateBu
} from "../../../../redux/reducers/initialBuDataSlice";

export default function DpFlowUiLayout() {
  const status = useSelector((state) => state.initialBuData.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetActiveIndex(0));
    dispatch(fetchSchema({ buType: DP_FLOW_CONSTANTS.BUCODE }));
    dispatch(updateBu(DP_FLOW_CONSTANTS.BUCODE));
  }, []);

  return (
    <Grid container>
      <div className="top_section">
        <TopLayout />
      </div>
      {status === STATUS.SUCCESSED ? (
        <Grid className="left_section" container direction="row">
          <Grid xs={12} md={3}>
            <DpFlowLeftLayout />
          </Grid>
          <Grid className="right_section" container xs={12} md={9}>
            <DpFlowRightLayout />
          </Grid>
        </Grid>
      ) : (
        <div className="spinner_wrapper">
          <CircularProgress />
        </div>
      )}
    </Grid>
  );
}
