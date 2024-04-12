import React from "react";
import {
  CustomTop,
  LabelText,
  ButtonInput
} from "../../../components/dynamic-ui/uiComponentsConfig";
import AlertDialog from "../../../components/dialog/alertDialog";
import "./TopLayout.css";
import saveSizingApi from "./saveSizingApi";
export default function TopLayout() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const saveSizing = async () => {
    let data = await saveSizingApi();
    handleClickOpen()
    console.log(data)
  };
  return (
    <div>
      <div className="SizingSelection">
        <div className="left-child">
          <LabelText
            label="Sizing & Selection"
            labelClass="labeltext"
            showLabel
            text="Please select from the options below to best describe your application requirements. These selections will aid in instrumentation selection throughout the module."
            textClass="text"
          />
        </div>
        <div className="right-child">
          <div className="custom-top">
            <CustomTop
              data={[
                {
                  data: [
                    {
                      text: "Preferences",
                      url: "/"
                    },
                    {
                      text: "Search Sizing",
                      url: "/"
                    }
                  ],
                  labelClass: "ddl-typography--paragraph",
                  type: "BREAD_CRUMBS",
                  value: ""
                }
              ]}
            />
          </div>
          <div className="topSizingButton">
            <ButtonInput
              btnType="secondary"
              customClass=""
              label="Save Sizing"
              onClick={() => saveSizing()}
            />
            <ButtonInput btnType="secondary" customClass="" label="Clear" onClick={() => {}} />
            <AlertDialog
            message={'Saved Successfully'}
            open={open}
            handleClose={handleClose}
            handleClickOpen={handleClickOpen}
          />
          </div>
        </div>
      </div>
    </div>
  );
}


