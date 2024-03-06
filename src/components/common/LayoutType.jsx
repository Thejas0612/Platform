import React from "react";
import EmsolComponentsConfig from "../../utils/EmsolComponentsConfig";
import { Grid } from "@mui/material";
import { connect } from "react-redux";
import { loadSchema } from "../../redux/actions/actionFile";

const LayoutType = () => {
  return (
    <div>
      <Grid container xs={12}>
     
        <div className="Ui_Builder">
          <header>
            {layout.Top?.map((component) => (
              <EmsolComponentsConfig
                key={`${component + new Date().getUTCMilliseconds}`}
                component={component}
                sourceData={sourceData}
                updateLayoutContent={updateLayoutContent}
              />
            ))}
          </header>
          <nav className="Left_section">
            {layout.Left?.map((component) => (
              <EmsolComponentsConfig
                key={`${component + new Date().getUTCMilliseconds}`}
                component={component}
                sourceData={sourceData}
                updateLayoutContent={updateLayoutContent}
              />
            ))}
          </nav>
          <main className="Right_section">
            {layout.Right?.map((component) => (
              <EmsolComponentsConfig
                key={`${component + new Date().getUTCMilliseconds}`}
                component={component}
                sourceData={sourceData}
                updateLayoutContent={updateLayoutContent}
              />
            ))}
          </main>
        </div>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  loadLayout: (data) => dispatch(loadSchema(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutType);
