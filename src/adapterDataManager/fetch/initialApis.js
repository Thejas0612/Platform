// auth API/Layout API's

import { getApplicationSections, getLayoutApi, getPageInfo, getUserDetails } from ".";
const fetchData = async (getUiBuilderSchema, urlParams) => {
  /// split the block, to be placed in another comp.
  try {
    const type = urlParams.bucode || "dpFlow";
    const pageInfoData = getPageInfo(type);
    const userInfo = getUserDetails();
    const response = await getLayoutApi(type);
    const { components = [] } = response; // API CALL
    const getSections = await getApplicationSections(components, type);
    getUiBuilderSchema(getSections);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default fetchData;
