import axios from "axios";
import apiEndPoints from "./apiEndPoints";

export const getLineSizeValues = async () => {
  try {
    const res = await axios.get(apiEndPoints.lineSize.api);
    return res?.data ? { apiResponse: res?.data, target: apiEndPoints.lineSize.target } : [];
  } catch (err) {
    console.log("err", err);
    return {};
  }
};
