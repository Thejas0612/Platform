import axios from "axios";
import apiEndPoints from "./apiEndPoints";

export const getLineSizeValues = async () => {
  try {
    const res = await axios.get(apiEndPoints.lineSize.api);
    return res?.data ? { apiResponse: res?.data, target: apiEndPoints.lineSize.target } : [];
  } catch (err) {
    console.log("err in fetching linesize data", err);
    return {};
  }
};

export const getApi = async (apiInfo, id) => {
  try {
    const response = await axios.get(apiInfo?.url + id);
    return response?.data ? response?.data : [];
  } catch (err) {
    console.log("err in fetching pipeschedule data");
    return [];
  }
};

export const getFluidDatabaseValues = async () => {
  try {
    const res = await axios.get(apiEndPoints.fluidsdatabase.api);
    return res?.data ? { apiResponse: res?.data, target: apiEndPoints.fluidsdatabase.target } : [];
  } catch (err) {
    console.log("err in fetching linesize data", err);
    return {};
  }
};
