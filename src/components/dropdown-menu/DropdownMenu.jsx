import React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Grid } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  updateRightSection,
  updateDropdownPayload
} from "../../../../EMR-ENT-MSOL-PA-PLATFORM-CLIENT/src/redux/reducers/initialBuDataSlice";

function DropdownMenu({ dataSourceUrl, onChange = () => {}, ...props }) {
  const dataOptions = useSelector((state) => state.initialBuData?.rightSection);
  const payload = useSelector((state) => state.initialBuData?.dropDownsValues);
  const updatedSchema = (apiData, dataOptions, target, key =null, value = null) => {
    const schema = dataOptions[0]?.componentProps?.schema;

    const updatedSchema = schema.map((option, i) => {
      if (i === 1) {
        return {
          ...option,
          fields: option.fields.map((field) =>
            field.name === target
              ? {
                  ...field,
                  options: apiData,
                  isApiOnEvent: {
                    ...field.isApiOnEvent,
                    apiInfo: {
                      ...field.isApiOnEvent.apiInfo,
                      payload: { ...field.isApiOnEvent.apiInfo.payload, [key]: value }
                    }
                  }
                }
              : field
          )
        };
      } else {
        return option;
      }
    });
    const updatedDataOptions = [
      {
        ...dataOptions[0],
        componentProps: {
          ...dataOptions[0].componentProps,
          schema: updatedSchema
        }
      }
    ];

    return { updatedDataOptions };
  };

  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const data = await axios.get(url);
        const apiData = data.data;
        const result = updatedSchema(apiData, dataOptions, "communicationProtocol");
        dispatch(updateRightSection(result.updatedDataOptions));
        setIsLoading(false);

        // setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (dataSourceUrl) {
      fetchData(dataSourceUrl);
    }
  }, []);

  const [defaultValue, setDefaultValue] = React.useState("");
 

  const [dropDowns, setDropDowns] = useState([]);
  const handleChange = async (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setSelectValue(value);
    if (props.name === name) {
      if (name === "communicationProtocol") {
        const dropDownData = payload;
        const target = props.isApiOnEvent.targetUiElement;
        const getUrl = props.isApiOnEvent.apiInfo.url;
        const data1 = await axios.get(getUrl + value);
        const apiData = data1.data;
        const result = updatedSchema(apiData, dataOptions, target, name, value);
        dispatch(updateRightSection(result.updatedDataOptions));
        dispatch(updateDropdownPayload({ ...dropDownData, communicationProtocol: value }));
        setDefaultValue(e.target.value);

      } else if (name === "formfactor") {
        const dropDownData = payload;
        const target = props.isApiOnEvent.targetUiElement;
        const baseUrl = props.isApiOnEvent.apiInfo.url;
        const savedCommunicationProtocol = props.isApiOnEvent.apiInfo.payload.communicationProtocol;
        const savedFormFactor = value;
        const url = `${baseUrl}form_factor=${savedFormFactor}&communication_protocol=${savedCommunicationProtocol}`;
        const data2 = await axios.get(url);
        const apiData = data2.data;
        const result = updatedSchema(apiData, dataOptions, target, name, value);
        dispatch(updateRightSection(result.updatedDataOptions));
        dispatch(updateDropdownPayload({ ...dropDownData, formFactor: value }));
        setDefaultValue(e.target.value);

      } else if (name === "numberofinputs") {
        const dropDownData = payload;   
        const target = props.isApiOnEvent.targetUiElement;
        const baseUrl = props.isApiOnEvent.apiInfo.url;
        const savedCommunicationProtocol = dropDownData["communicationProtocol"];
        const savedFormFactor = dropDownData["formFactor"];
        const savedNumberOfInputs = value;
        const url = `${baseUrl}form_factor=${savedFormFactor}&communication_protocol=${savedCommunicationProtocol}&num_of_inputs=${savedNumberOfInputs}`;
        const data = await axios.get(url);
        const apiData = data.data;
        const result = updatedSchema(apiData, dataOptions, target, name, value);
        dispatch(updateRightSection(result.updatedDataOptions));
        dispatch(updateDropdownPayload({ ...dropDownData, noOfInputs: value }));
        setDefaultValue(e.target.value);
     

      } else if (name === "performance") {
        setDefaultValue(e.target.value);
      }
    }
  };

  return (
    <div>
      <FormControl
        sx={{ m: 1, mt: 3, margin: "1rem", width: "100%", display: "flex" }}
        size="small"
        color="success"
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <div style={{ minHeight: "2rem" }}>
              <label>{props.label}</label>
              {props.tooltipEnable ? (
                <Tooltip title={props.tooltipMessage} placement="top" arrow>
                  <IconButton sx={{ padding: 0, paddingLeft: ".5rem" }}>
                    <InfoIcon sx={{ color: "#00573d" }} fontSize="small" />
                  </IconButton>
                </Tooltip>
              ) : (
                <></>
              )}
            </div>
            <Select
              sx={{ width: "100%" }}
              value={defaultValue}
              name={props.name}
              onChange={handleChange}
            >
              {/* {
                isLoading ? (
                  <option>loading...</option>
                ) : error ? (
                  <option>Error: {error.message}</option>
                ) : (
                  data.map((option) => (
                    <MenuItem key={option.id} value={option.value} name="Sourabh">
                      {option.label}
                    </MenuItem>
                  ))
                )
                // (schema.options.length > 0 &&
                //     schema.options.map((opt, i) => (
                //         <MenuItem key={i} value={opt.label} onChange={handleChange}>
                //             {opt.label}
                //         </MenuItem>
                //     )))
              } */}
              {props.options.length > 0 &&
                props.options.map((opt, i) => (
                  <MenuItem key={i} value={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
            </Select>
          </Grid>
        </Grid>
      </FormControl>
      {props.nextLine ? <br></br> : ""}
    </div>
  );
}

export default DropdownMenu;
