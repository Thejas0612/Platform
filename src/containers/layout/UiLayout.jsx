import { CircularProgress, Grid } from "@mui/material";
import "./uiLayout.css";
import LeftLayout from "./ui-sections/LeftLayout";
import RightLayout from "./ui-sections/RightLayout";
import { useSelector } from "react-redux";
import TopLayout from "./ui-sections/TopLayout";
import { useState } from "react";

export default function UiLayout() {
  const [schema, setSchema] = useState({});
  const status = useSelector((state) => state.initialBuData.status);
  // getComponentSchema("dpFlow", "NavigationMenu");
  return (
    <Grid container>
      <div className="top_section">
        <TopLayout />
      </div>
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
}
