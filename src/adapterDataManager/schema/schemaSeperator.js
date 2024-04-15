const isolateSchema = (data, bucode) => {
  let sections = { top: [], left: [], right: [] };
  if (data?.uiComponents?.length > 0) {
    data?.uiComponents?.forEach((comp) => {
      sections[comp?.alignment] = [...sections[comp?.alignment], comp];
    });
  }
  if (bucode === "lookout") {
    sections["right"] = [
      {
        ...sections.right[0],
        componentProps: {
          schema: sections.right[0]?.componentProps?.schema.map((field) => {
            if (field.id === 1) {
              return {
                ...field,
                fields: field?.fields?.map((subfield) => {
                  if (subfield?.name === "nominalpipesize") {
                    return {
                      ...subfield,
                      dataSourceUrl: `${process.env.VITE_API_URL}/api/lookout/lineSizes?measurement_type=Flow`
                    };
                  } else if (subfield?.name === "pipeschedule") {
                    return {
                      ...subfield,
                      dataSourceUrl: `${process.env.VITE_API_URL}/api/lookout/getPipeSchedule`
                    };
                  } else return subfield;
                })
              };
            } else return field;
          })
        }
      }
    ];
  }
  return sections;
};

export default isolateSchema;
