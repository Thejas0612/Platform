import "../../containers/styles/customStyle.css";
import React, { useEffect } from "react";
// import LayoutType from "../common/LayoutType";
import {
  loadLayoutData,
  loadSchema,
  userSelections,
  updateLayoutData,
  errorLogger
} from "../../redux/actions/action";
import { connect } from "react-redux";
import fetchData from "../../adapterDataManager/fetch/initialApis";
import LayoutType from "../common/LayoutType";
import { Backdrop, CircularProgress } from "@mui/material";

const UiBuilderAdapter = (props) => {
  const urlParams = Object.fromEntries(new URLSearchParams(window.location.search));
  // console.info("State > ", props, urlParams);
  const { getUiBuilderSchema } = props;
  useEffect(() => {
    return () => {
      fetchData(getUiBuilderSchema, urlParams);
    };
  }, []);
  return (
    <>
      {!props.loadingPhase ? (
        <Backdrop open={!props.loadingPhase}>
          <CircularProgress color="primary" />
        </Backdrop>
      ) : (
        <LayoutType props={props} />
      )}
    </>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  getUiBuilderSchema: (value) => dispatch(loadSchema(value)),
  updateClickEvent: (data) => dispatch(userSelections(data)),
  loadLayout: (data) => dispatch(loadLayoutData(data)),
  updateLayoutContent: (data) => dispatch(updateLayoutData(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(UiBuilderAdapter);
