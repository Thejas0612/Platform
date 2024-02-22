import { useEffect, useState } from "react";
import EmsolComponentsConfig from "../../utils/EmsolComponentsConfig";
import { Box, Grid, Snackbar } from "@mui/material";
import { parseLayoutType } from "../../adapterDataManager/common/layoutParser";

const LayoutType = ({ props }) => {
  const { loadLayout, layout = {}, sourceData = {}, updateLayoutContent, errorLog } = props;  
  useEffect(() => {
    const layoutDetails = parseLayoutType(sourceData);
    loadLayout(layoutDetails);
  }, [sourceData]);
  return (
    <div>      
      <Grid container xs={12}>
        <div className="Ui_Builder">
          <header>
            {layout.Top?.map((component, i) => (
              <EmsolComponentsConfig
                key={`${i}_top_section`}
                component={component}
                sourceData={sourceData}
                updateLayoutContent={updateLayoutContent}
              />
            ))}
          </header>
          <nav className="Left_section">
            {layout.Left?.map((component, i) => (
              <EmsolComponentsConfig
                key={`${i}_left_section`}
                component={component}
                sourceData={sourceData}
                updateLayoutContent={updateLayoutContent}
              />
            ))}
          </nav>
          <main className="Right_section">
            {layout.Right?.map((component, i) => (
              <EmsolComponentsConfig
                key={`${i}_right_section`}
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

export default LayoutType;
