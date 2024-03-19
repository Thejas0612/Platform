import React from "react";
import { Grid } from "@mui/material";
import "./landing.css";
import { fetchSchema, resetActiveIndex, updateBu } from "../../redux/reducers/initialBuDataSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//Hello
export const PRODUCT_ADVISOR_CARDS = [
  {
    id: "card1_dpflow",
    title1: "DP Flow",
    title2: "Sizing & Selection",
    subtitle:"The easiest way to size, configure, and order Rosemount DP Flow meters and primary elements.",
    iconName: "arrow_icon",
    buType: "dpFlow",
    buTitle: "MSOL Product Advisor DP Flow"
  },
  {
    id: "card2_temp",
    title1: "Temperature",
    title2: "Sizing & Selection",
    subtitle: "The easiest way to size, configure, and order Temperature products.",
    iconName: "arrow_icon",
    buType: "tempPA",
    buTitle: "MSOL Product Advisor Temperature"
  },
  {
    id: "card2_project_Lookout",
    title1: "Project Lookout",
    title2: "Sizing & Selection",
    subtitle: "The easiest way to size, configure, and order Flow products.",
    iconName: "arrow_icon",
    buType: "project_Lookout",
    buTitle: "MSOL Product Advisor Flow"
  }
];

export default function Landing() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSelectedBu = (buType, buTitle) => {
    dispatch(resetActiveIndex(0));
    dispatch(fetchSchema({ buType }));
    dispatch(updateBu(buType));
    document.title = buTitle;
    history.push(`/platform_bucode=${buType}`, { bu_code: buType });
  };

  return (
    <Grid container className="container_dash_board">
      {PRODUCT_ADVISOR_CARDS.map((bu) => (
        <Grid
          key={bu.id}
          className="grid_card_1 grid_1_hover"
          onClick={() => handleSelectedBu(bu.buType, bu.buTitle)}
        >
          <div className="card_title_1">
            <h3 className="card_title_h3">
              {bu.title1} <br /> {bu.title2}
            </h3>
          </div>
          <div className="subtitle_wrapper">
            <p className="subtitle">{bu.subtitle}</p>
          </div>
          <div className="icon_wrapper">
            <div className="arrow_icon"></div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
