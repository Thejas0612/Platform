import axios from "axios";

const apiBaseUrl =
  `${process.env.REACT_APP_API_BASE_URL_STAGE}` || `${process.env.REACT_APP_API_BASE_URL}`;
const interceptor = axios.create({
  baseURL: `${apiBaseUrl}`
});

interceptor.interceptors.request.use(
  (request) => {
    request.headers["startTime"] = new Date().getTime();
    return request;
  },
  (error) => error
);

interceptor.interceptors.response.use(
  (response) => {
    const endTime = new Date().getTime();
    response.headers["time"] = endTime - response.config.headers.startTime;
    return response;
  },
  (error) => error
);

export const getLayoutApi = async (type) => {
  // application type to a dynamic value
  const { data } = await interceptor.get(`api/pilot/layout?type=${type}`);
  return data;
};

export const getApplicationSections = async (values, type) => {
  const { data } = await interceptor.post(`api/pilot/get-section-details`, { values, type });
  return data;
};

export const getDynamicFields = async (values) => {
  const { data = {} } = await interceptor.post(`api/pilot/getfields`, values);
  return data;
};

export const getUserDetails = async () => {
  const { data } = await interceptor.get(`api/pilot/user?id=1`);
  return data;
};

export const getPageInfo = async (type) => {
  const { data } = await interceptor.get(`api/pilot/pageInfo?type=${type}`);
  return data;
};
