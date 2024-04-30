import React from "react";
import { ButtonInput, CustomTop, LabelText } from "@emerson/dynamic-ui-public";
import AlertDialog from "../../../components/dialog/AlertDialog";
import "./TopLayout.css";
import { createSizing } from "../../../api/sizingApi";
import { useDispatch, useSelector } from "react-redux";

export default function TopLayout() {
  const rightSectionSchema = useSelector((state) => state.initialBuData?.rightSection);
  const [open, setOpen] = React.useState(false);
  const [refId, setRefId] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveSizing = async () => {
    let schemaData=[]
    console.log(rightSectionSchema[0].componentProps.schema)
    rightSectionSchema[0].componentProps.schema.map(c=>{
    schemaData.push(...c.fields),console.log(c)
    })
    const result = await createSizing(schemaData);
    setRefId(result.data.PA_REFERENCE_ID);
    handleClickOpen();
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
                      url: "/preferences"
                    },
                    {
                      text: "Search Sizing",
                      url: "/search-sizing"
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
              message={`Saved Successfully with Reference Id ${refId}`}
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
