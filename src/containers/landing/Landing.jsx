import React from "react";
import { Grid } from "@mui/material";
import "./landing.css";
import { landingPageCardInfo } from "./landingPageCards";
import { fetchSchema, resetActiveIndex } from "../../redux/reducers/initialBuDataSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Landing() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSelectedBu = (buType) => {
    dispatch(resetActiveIndex(0));
    dispatch(fetchSchema({ buType }));
    history.push(`/platform?bucode=${buType}`);
  };

  return (
    <div>
      <Grid container className="container_dash_board">
        {landingPageCardInfo.map((bu) => (
          <Grid
            key={bu.id}
            className="grid_card_1 grid_1_hover"
            onClick={() => handleSelectedBu(bu.buType)}
          >
            <div>
              <div>
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
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
