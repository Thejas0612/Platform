// auth API/Layout API's

import { getApplicationSections, getLayoutApi } from ".";
// import dynamicDpFlow from "../../JsonSchema/DynamicUi/DynamicSchema.json";
const fetchData = async (getUiBuilderSchema) => {
  /// split the block, to be placed in another comp.
  try {
    const response = await getLayoutApi();
    const {
      layout: { components = [] }
    } = response; // API CALL

    const getSections = await getApplicationSections(components);
    getUiBuilderSchema(getSections);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default fetchData;
