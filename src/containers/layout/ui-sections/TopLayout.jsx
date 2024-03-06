import {
  CustomTop,
  LabelText,
  ButtonInput
} from "../../../components/dynamic-ui/uiComponentsConfig";
import "./TopLayout.css";
export default function TopLayout() {
  return (
    <>
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
          <div className="topSizingButton">
            <ButtonInput
              btnType="secondary"
              customClass=""
              label="Save Sizing"
              onClick={() => {}}
            />
            <ButtonInput btnType="secondary" customClass="" label="Clear" onClick={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
}
