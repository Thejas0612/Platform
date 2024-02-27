const isolateSchema = (data) => {
  let sections = { top: [], left: [], right: [] };
  if (data?.uiComponents?.length > 0) {
    data?.uiComponents?.forEach((comp) => {
      sections[comp?.alignment] = [...sections[comp?.alignment], comp];
    });
  }
  return sections;
};

export default isolateSchema;
