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

import { updateRightSection } from "../../../../EMR-ENT-MSOL-PA-PLATFORM-CLIENT/src/redux/reducers/initialBuDataSlice";

function DropdownMenu(schema) {
    
  // const dataOptions = useSelector((state) => state.initialBuData?.rightSection[0]?.componentProps?.schema[1]?.fields[4]?.options);
  const dataOptions = useSelector((state) => state.initialBuData?.rightSection);
  // apiData
  const updatedSchema = (apiData, dataOptions,target, key='test', value='test') => {
    const schema = dataOptions[0]?.componentProps?.schema;


    const updatedSchema = schema.map((option, i) => {
      if (i === 1) {
        return {
          ...option,
          fields: option.fields.map((field) =>
            field.name === target ? { ...field, options: apiData, isApiOnEvent: { ...field.isApiOnEvent, apiInfo: { ...field.isApiOnEvent.apiInfo, payload: { [key]: value } } } } : field
          )
        };
      } else {
        return option;
      }
    });

    //   const updatedSchema = schema.map((option, i) => {
    //     if (i === 1) {

    //       return {
    //         ...option,
    //         fields: option.fields.map((field, j) =>
    //           j === 4 ? { ...field, dataSourceUrl: 'https://webapp-z-autosol-msolst-n-001.azurewebsites.net/api/temp/form-factor?communication_protocol=4_20_MA_WITH_HART_PROTOCOL' } : field
    //         )
    //       };
    //     } else {
    //       return option;
    //     }
    //   });
    //   console.log("updated_schema",updatedSchema)

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
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const data = await axios.get(url);
        const apiData = data.data
        const result = updatedSchema(apiData, dataOptions,'communicationProtocol');
        console.log('result..........',result)
        dispatch(updateRightSection(result.updatedDataOptions));
        setIsLoading(false);

        // setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (schema.dataSourceUrl) {
      fetchData(schema.dataSourceUrl);
    }
  }, []);

  const [defaultValue, setDefaultValue] = React.useState("");
  const [dropValue, SetDropValue] = React.useState({communicationProtocol:''})
  const [dropValue1, SetDropValue1] = React.useState({formfactor:''})
  

  const handleChange = async (e) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log('love',schema)
    console.log("get_me", e);
    setSelectValue(value);
    if (schema.name === name) {
      if (name === "communicationProtocol") {
        const target = schema.isApiOnEvent.targetUiElement
        const getUrl = schema.isApiOnEvent.apiInfo.url;
        const data = await axios.get(getUrl + value);
        const apiData = data.data;
        const result = updatedSchema(apiData, dataOptions,target,'communicationProtocol',value );
        console.log('uuuuuuuuuuuu',result)
        dispatch(updateRightSection(result.updatedDataOptions));
        setIsLoading(false);
        setDefaultValue(e.target.value);
        SetDropValue({communicationProtocol: e.target.value})

      }else if (name === "formfactor"){
        const target = schema.isApiOnEvent.targetUiElement
        const baseUrl = schema.isApiOnEvent.apiInfo.url;
        const savedCommunicationProtocol = schema.isApiOnEvent.apiInfo.payload.communicationProtocol
        const savedFormFactor = value;
        console.log(typeof(value),'aaaaaaaaaaaaaa', value)
        const url = `${baseUrl}form_factor=${savedFormFactor}&communication_protocol=${savedCommunicationProtocol}`;
        const data = await axios.get(url);
        const apiData = data.data;
        const result = updatedSchema(apiData, dataOptions,target,'formFactor',value );
        console.log('uuuuuuuuuuuu',result)
        dispatch(updateRightSection(result.updatedDataOptions));
        setIsLoading(false);
        setDefaultValue(e.target.value)
        SetDropValue1({formfactor: e.target.value})
        
      }else if (name === "numberofinputs"){
        const target = schema.isApiOnEvent.targetUiElement
        const baseUrl = schema.isApiOnEvent.apiInfo.url;
        // const savedCommunicationProtocol = schema.isApiOnEvent.apiInfo.payload.communicationProtocol
        const savedFormFactor = schema.isApiOnEvent.apiInfo.payload.formFactor
        const savedNumberOfInputs = value;
        console.log('jSSSS',savedFormFactor, savedNumberOfInputs, commu)
        // console.log(typeof(value),'aaaaaaaaaaaaaa', value)
        // const url = `${baseUrl}form_factor=${savedFormFactor}&communication_protocol=${savedCommunicationProtocol}`;
        // const data = await axios.get(url);
        // const apiData = data.data;
        // const result = updatedSchema(apiData, dataOptions,target,'formFactor',value );
        // console.log('uuuuuuuuuuuu',result)
        // dispatch(updateRightSection(result.updatedDataOptions));
        // setIsLoading(false);
        // setDefaultValue(e.target.value)
        // SetDropValue1({formfactor: e.target.value})
        
      }
    }
  };

  //     if (schema.isApiOnEvent?.isApiCall && schema.isApiOnEvent.apiInfo?.url && value) {
  //         try {

  //         const data = await axios.get(schema.isApiOnEvent.apiInfo.url + value);
  //         const apiData =data.data
  //         console.log('3',apiData);
  //         const result = updatedSchema(apiData, dataOptions);
  //         console.log('result.....................',result)
  //         dispatch(updateRightSection(result.updatedDataOptions))
  //         setIsLoading(false)
  //         // setData(apiData.data);

  //     } catch (error) {
  //         setError(error);
  //     }
  //         //const response = fetchData();

  //     }
  //     setDefaultValue(e.target.value)
  // };
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
              <label>{schema.label}</label>
              {schema.tooltipEnable ? (
                <Tooltip title={schema.tooltipMessage} placement="top" arrow>
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
              name={schema.name}
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
              {schema.options.length > 0 &&
                schema.options.map((opt, i) => (
                  <MenuItem key={i} value={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
            </Select>
          </Grid>
        </Grid>
      </FormControl>
      {schema.nextLine ? <br></br> : ""}
    </div>
  );
}

export default DropdownMenu;
