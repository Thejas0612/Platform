import React from "react";
import {Grid} from "@mui/material";
import NavigationLeftMenu from "../../blocks/NavigationMenu";
import SizingSelectionHeader from "../../blocks/SizingSelectionHeader";
import "./route-flow.css";
import {Route} from "react-router-dom";
import NavigationButtons from "../../components/NavigationButtons";

export default function RouteFlow({exact, path, component: Component}) {
    return (
      <Route exact={exact} path={path} render={(props) => (
        <div className={"container"}>
            <Grid
              container
              spacing={2}
            >
                <Grid item xs={12} md={12}>
                    <SizingSelectionHeader/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <NavigationLeftMenu/>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Component {...props}/>
                </Grid>
            </Grid>
          <NavigationButtons  />
        </div>
      )}/>
    );
    /*return (
      <div className={"container"}>
        <Grid
          container
          spacing={2}
        >
            <Grid item xs={12} md={12}>
                <SizingSelectionHeader/>
            </Grid>
            <Grid item xs={12} md={3}>
                <NavigationLeftMenu/>
            </Grid>
            <Grid item xs={12} md={9}>
                <FlowContainer/>
            </Grid>
        </Grid>
      </div>
    );*/
}