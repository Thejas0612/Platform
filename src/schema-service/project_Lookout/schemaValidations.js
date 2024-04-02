export const changeNavigationStatus = (leftSection, activeIndex, button) => {
  let index = button == "next" ? activeIndex + 1 : activeIndex - 1;

  return [
    {
      componentName: leftSection[0]?.componentName,
      alignment: leftSection[0]?.alignment,
      componentProps: {
        schema: leftSection[0].componentProps.schema.map((field) => {
          if (field.ne_id === index) {
            return {
              ...field,
              selected: true
            };
          } else return { ...field, selected: false };
        })
      }
    }
  ];
};

export const saveValuesinSchema = (e, formData, rightSecSchema, activeIndex) => {
  return [
    {
      componentName: rightSecSchema[0]?.componentName,
      alignment: rightSecSchema[0]?.alignment,
      componentProps: {
        schema: rightSecSchema[0]?.componentProps?.schema.map((screens) => {
          if (screens.id == activeIndex) {
            const { id, fields } = formData[0];

            return {
              id: id,
              fields: fields?.map((element, key) => {
                if (element?.name === "TABLE_INPUT1" || element?.name === "TABLE_INPUT2") {
                  let tempVar = fields[key]?.value;
                  delete tempVar?.exclude_model;
                  element.value = { ...element?.value, ...tempVar };
                  return element;
                } else {
                  return element;
                }
              })
            };
          } else {
            return screens;
          }
        })
      }
    }
  ];
};

// experimental : Toggling FluidDatabase
export const toggleFluidDatabase = (formObj, rightSecSchema, activeIndex) => {
  let customFluidSourceSchema = {
    column: 4,
    type: "TEXT_INPUT",
    name: "fluidsdatabase",
    label: "Custom Fluid Source",
    labelClass: "app-content-label",
    value: ""
  };

  let fluidSourceDB = {
    column: 4,
    type: "SINGLE_SELECT",
    name: "fluidsdatabase",
    label: "Fluids Database",
    labelClass: "app-content-label",
    inputClass: "customRequired",
    value: "",
    options: [
      {
        value: "0",
        label: "1-2-2-TETRAFLUOROETHANE",
        id: "0"
      },
      {
        value: "1",
        label: "1-2-TRICHLOROETHANE",
        id: "1"
      },
      {
        value: "2",
        label: "1-2-4-TRICHLOROBENZENE",
        id: "2"
      },
      {
        value: "3",
        label: "1-2-BUTADIENE",
        id: "3"
      },
      {
        value: "4",
        label: "1-3-5-TRICHLOROBENZENE",
        id: "4"
      },
      {
        value: "5",
        label: "1-3-BUTADIENE",
        id: "5"
      },
      {
        value: "6",
        label: "I-4-DIOXANE",
        id: "6"
      },
      {
        value: "7",
        label: "I—4-HEXADIENE",
        id: "7"
      },
      {
        value: "8",
        label: "1-BUTENE",
        id: "8"
      },
      {
        value: "9",
        label: "1-DECANAL",
        id: "9"
      },
      {
        value: "10",
        label: "1-DECENE",
        id: "10"
      },
      {
        value: "11",
        label: "1-DODECANOL",
        id: "11"
      },
      {
        value: "12",
        label: "1-DODECENE",
        id: "12"
      },
      {
        value: "12",
        label: "1-HEPTANOL",
        id: "12"
      },
      {
        value: "13",
        label: "1-HEPTENE",
        id: "13"
      },
      {
        value: "14",
        label: "1-HEXADECANOL",
        id: "14"
      },
      {
        value: "15",
        label: "1-HEXENE",
        id: "15"
      },
      {
        value: "16",
        label: "1-NONANAL",
        id: "16"
      },
      {
        value: "17",
        label: "1-NONANOL",
        id: "17"
      },
      {
        value: "18",
        label: "1-OCTANOL",
        id: "18"
      },
      {
        value: "19",
        label: "1-OCTENE",
        id: "19"
      },
      {
        value: "20",
        label: "1-PENTADECANOL",
        id: "20"
      }
    ],
    required: true
  };

  return [
    {
      componentName: rightSecSchema[0]?.componentName,
      alignment: rightSecSchema[0]?.alignment,
      componentProps: {
        schema: rightSecSchema[0]?.componentProps?.schema.map((screens) => {
          if (screens.id == activeIndex) {
            return {
              id: activeIndex,
              fields: screens.fields.map((element) => {
                if (element.name == "fluidsdatabase") {
                  return (element =
                    formObj.fluidsource == 1 ? customFluidSourceSchema : fluidSourceDB);
                } else {
                  return element;
                }
              })
            };
          } else {
            return screens;
          }
        })
      }
    }
  ];
};
