import React from "react";
import "../../containers/styles/customStyle.css";
import { Header } from "@emerson/dynamic-ui";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";

const UiDashboard = () => {
  const headerData = {
    type: "EMSOL_HEADER",
    props: {
      text: "EMSOLHEADER HEADER",
      title: "MSOL PA Pilot",
      userInfo: {
        name: ""
      },
      logo: "https://www.emerson.com/resource/blob/emerson-logo-compressed--data-5576584.png"
    },
    alignment: "Top",
    wrapper: "",
    order: "",
    visible: true
  };
  const { props = {} } = headerData;
  return (
    <div>
      <Header {...props} />
      <Grid container className="container_dash_board">
        <Grid className="grid_card_1 grid_1_hover">
          <div className="">
            <a href={"/pilot?bucode=dpFlow"} className="nav_link_text">
              <div>
                <div className="card_title_1">
                  <h3 className="card_title_h3">
                    DP Flow <br /> Sizing & Selection
                  </h3>
                </div>
                <div className="subtitle_wrapper">
                  <p className="subtitle">
                    The easiest way to size, configure, and order Rosemount DP Flow meters and
                    primary elements.
                  </p>
                </div>
                <div className="icon_wrapper">
                  <div className="arrow_icon"></div>
                </div>
              </div>
            </a>
          </div>
        </Grid>
        <Grid className="grid_card_1 grid_1_hover">
          <div className="">
            <a href={"/pilot?bucode=usm"} className="nav_link_text">
              <div>
                <div className="card_title_1">
                  <h3 className="card_title_h3">
                    Ultrasonic <br /> Sizing & Selection
                  </h3>
                </div>
                <div className="subtitle_wrapper">
                  <p className="subtitle">
                    Find the right Ultrasonic product for your application.
                  </p>
                </div>
                <div className="icon_wrapper2">
                  <div className="arrow_icon"></div>
                </div>
              </div>
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default UiDashboard;
