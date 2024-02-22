import "../../containers/styles/customStyle.css";
import "@emerson/dynamic-ui/dist/emerson-ui.css";
import React, { useState, useEffect } from "react";
import dynamicDpFlow from "../../JsonSchema/DynamicUi/DynamicDpFlow.json";
import LayoutType from "../common/LayoutType";
import { loadSchema } from "../../redux/actions/action";
import { connect } from "react-redux";

const UiBuilder = (props) => {
  const { getUiBuilderSchema } = props.components;
  const [components, setComponents] = useState([]);

  useEffect(() => {
    // Function to read the JSON file
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        const data = dynamicDpFlow || (await response.json()); // API CALL
        setComponents(data.components);
        getUiBuilderSchema(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });
  return (
    <>
      <LayoutType components={components} props={props} />
    </>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    getUiBuilderSchema: (value) => dispatch(loadSchema(value))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UiBuilder);
