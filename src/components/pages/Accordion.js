import { Grid } from "@mui/material";

import data from "../../JsonSchema/DynamicUi/AccordionSchema.json";
import "../../styles/custom.css";

import { useReducer, useEffect, useRef, useState } from "react";
import inch_data from "../../JsonSchema/processPiping/processPipeInch.json";
import diameter_data from "../../JsonSchema/processPiping/processDiameter.json";
import { Header, NavigationMenu, PaStepper, DynamicForm } from "@emerson/dynamic-ui";
import { inchValues, nonAvailablePsh } from "../../JsonSchema/processPiping/Inch";
import { diameter_options } from "../../JsonSchema/processPiping/diameter";

const initialState = {
  schema: data,

  activeIndx: 0,

  stepId: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SCHEMA":
      return { ...state, schema: action.payload };

    case "UPDATE_STEPPER_INDEX":
      return { ...state, activeIndx: action.payload };

    case "UPDATE_NAVIGATION_INDEX":
      return { ...state, activeIndx: action.payload };

    case "UPDATE_SCHEMA11":
      return { ...state, schema: action.payload };

    default:
      return state;
  }
};

export default function Accordion() {
  const [state, setState] = useState(initialState);

  const DynamicEleRef = useRef();

  // console.log("STATE_", state);

  const getSchemaData = (compName) => {
    return state?.schema.filter((x) => x.componentName === compName)[0]?.schema;
  };

  const commonUpdateSchema = (info) => {
    // dispatch({ type: "UPDATE_SCHEMA", payload: info });
  };

  // const updateBadges = (data, id) => {
  //   const sch = state?.schema?.map((ele) => {
  //     if (ele.componentName === "NavigationMenu") {
  //       return {
  //         ...ele,
  //         schema: ele.schema?.map((x) => {
  //           if (x?.ne_id === id) {
  //             return { ...x, badges: data };
  //           } else return x;
  //         })
  //       };
  //     } else return ele;
  //   });
  //   dispatch({ type: "UPDATE_SCHEMA", payload: sch });
  // };

  const onNavDelete = (value, item) => {
    if (value && item) {
      const nav_badge_filter = item?.badges?.filter((x) => x.label !== value.label);
      const sch = state?.schema?.map((ele) => {
        if (ele.componentName === "NavigationMenu") {
          return {
            ...ele,
            schema: ele.schema?.map((x) => {
              if (x?.ne_id === item?.ne_id) {
                return { ...x, badges: nav_badge_filter };
              } else return x;
            })
          };
        } else return ele;
      });
      if (value?.name !== "TILE_THUMBNAIL") {
        const results_ = sch?.map((x) => {
          if (x?.componentName === "DynamicForm") {
            return {
              ...x,
              schema: x.schema.map((y) => {
                if (y?.id === item?.ne_id) {
                  return {
                    ...y,
                    fields: y.fields.map((z) => {
                      if (z?.name === value?.value) {
                        return { ...z, value: "" };
                      } else return z;
                    })
                  };
                } else return y;
              })
            };
          } else return x;
        });
        //dispatch({ type: "UPDATE_SCHEMA", payload: results_ });
        setState({ ...state, schema: results_ });
      }
      if (value?.name === "TILE_THUMBNAIL") {
        const results_ = sch?.map((x) => {
          if (x?.componentName === "DynamicForm") {
            return {
              ...x,
              schema: x.schema.map((y) => {
                if (y?.id === item?.ne_id) {
                  return {
                    ...y,
                    fields: y.fields.map((z) => {
                      if (z?.name === value?.value) {
                        return {
                          ...z,
                          value: z.value.filter((m) => m !== value?.id)
                        };
                      } else return z;
                    })
                  };
                } else return y;
              })
            };
          } else return x;
        });
        // dispatch({ type: "UPDATE_SCHEMA", payload: results_ });
        setState({ ...state, schema: results_ });
      }
    }
  };

  const handleDataChange = (e, formObj, formData, name, isValid) => {
    // console.log("event", e);
    // console.log("formObj", formObj);
    // console.log("formData", formData);
    // console.log("name", name);
    let badges = [];
    if (state?.activeIndx <= 2 ) {
      formData[0].fields.forEach((x) => {
        if (x.value && x?.type === "TILE_THUMBNAIL") {
          //TileorTHumbnail
          badges = x?.options
            ?.filter((y) => x.value.includes(y.id))
            ?.map((z) => {
              return {
                id: z?.id,
                label: z?.title,
                value: x?.name,
                name: x?.type
              };
            });
        } else if (
          x.value &&
          (Object.prototype.toString.call(x.value) == "[object String]" ||
            Object.prototype.toString.call(x.value) == "[object Number]")
        ) {
          //Dropdown
          if (x?.type === "SINGLE_SELECT") {
            // alert("Dropdown");
            const find_badge = x?.options?.find((y) => y.id === x.value);
            // console.log("Findbadge", find_badge);
            if (find_badge) {
              badges.push({ ...find_badge, id: find_badge.label });
            }
          }
          // Input

          if (x?.type === "TEXT_INPUT") {
            const text_input = formData[0]?.fields
              ?.filter((z) => z?.value?.length > 0)
              ?.map((a) => {
                return {
                  label: a.value,
                  value: a.name,
                  id: a.name
                };
              });
            badges = text_input;
          }

          if (x?.type === "CUSTOM_TOGGLE_BUTTON") {
            // console.log("CUSTOMTOGLLE", x);
            // if (x?.value?.length > 0) {
            //   const findVal = x?.options?.find((z) => z?.label === x?.value);
            //   if (findVal) {
            //     badges.push(findVal);
            //   }
            // }
          }
        }
      });

      const badgesFilt = badges.filter((x) => {
        if (!["Inch", "Circular", "Standard"]?.includes(x?.label)) {
          return x;
        }
      });
      // console.log("badgesFilt", badgesFilt);

      //nominalpipesize
      // console.log("Badgesssssss", badges);

      let sch = state?.schema?.map((ele) => {
        if (ele.componentName === "NavigationMenu") {
          return {
            ...ele,
            schema: ele.schema?.map((x) => {
              if (x?.ne_id === state?.activeIndx) {
                return { ...x, badges: badgesFilt };
              } else return x;
            })
          };
        } else return ele;
      });
      setState({ ...state, schema: sch });
    }

    if (state?.activeIndx >= 3 ) {
      if (name === "unitsofmeasurement") {
        const inputFiledName =
          formObj[name] === "Inch" ? "Nominal Pipe Schedule" : "Nominal Diameter";
        const inputFiledOptions = formObj[name] === "Inch" ? inchValues : diameter_options;
        const update_input_values = state?.schema?.map((x) => {
          if (x?.componentName === "DynamicForm") {
            return {
              ...x,
              schema: x?.schema?.map((z) => {
                if (z?.id === state?.activeIndx) {
                  return {
                    ...z,
                    fields: z?.fields?.map((a) => {
                      if (a?.name === "pipemeterial") {
                        return { ...a, value: "" };
                      } else if (a?.name === "nominalpipesize") {
                        return {
                          ...a,
                          label: inputFiledName,
                          options: inputFiledOptions,
                          value: ""
                        };
                      } else if (a?.name === "pipeschedule") {
                        return { ...a, value: "" };
                      } else if (a?.name === "pipeid") {
                        return { ...a, value: "" };
                      } else if (a?.name === "wallthickness") {
                        return { ...a, value: "" };
                      } else return a;
                    })
                  };
                } else return z;
              })
            };
          } else return x;
        });
        const rem_badges = update_input_values.map((ele) => {
          if (ele.componentName === "NavigationMenu") {
            return {
              ...ele,
              schema: ele.schema?.map((x) => {
                if (x?.ne_id === state?.activeIndx) {
                  return {
                    ...x,
                    badges: []
                  };
                } else return x;
              })
            };
          } else return ele;
        });
        setState({ ...state, schema: rem_badges });

        return;
      }

      if (name === "pipecrosssection") {
        let indx;
        let update_input_values = state?.schema?.map((x) => {
          if (x?.componentName === "DynamicForm") {
            return {
              ...x,
              schema: x?.schema?.map((z) => {
                if (z?.id === state?.activeIndx) {
                  return {
                    ...z,
                    fields: z?.fields?.map((a) => {
                      if (a?.name === "pipecrosssection") {
                        a?.options?.forEach((b, ind) => {
                          if (b.label === formObj[name]) {
                            indx = ind;
                          }
                        });
                        return a;
                      } else if (a?.name === "custompipeid") {
                        return { ...a, value: a?.options[indx]?.label };
                      } else return a;
                    })
                  };
                } else return z;
              })
            };
          } else return x;
        });

        if (formObj["pipecrosssection"] === "Rectangular") {
          const updated_val = update_input_values?.map((x) => {
            if (x?.componentName === "DynamicForm") {
              return {
                ...x,
                schema: x?.schema?.map((z) => {
                  if (z?.id === state?.activeIndx) {
                    return {
                      ...z,
                      fields: z?.fields
                        ?.filter((m, inx) => inx !== 8 && inx !== 9)
                        ?.map((a, indx) => {
                          if (a?.name === "pipemeterial") {
                            return { ...a, value: "" };
                          } else if (a?.name === "nominalpipesize") {
                            return {
                              ...a,
                              type: "NUMBER_INPUT",
                              column: 5.6,
                              label: "Duct Span",
                              value: ""
                            };
                          } else if (a?.name === "pipeschedule") {
                            return {
                              ...a,
                              type: "NUMBER_INPUT",
                              column: 5.6,
                              label: "Duct Width",
                              value: ""
                            };
                          } else if (a?.type === "CUSTOM_TOGGLE_BUTTON") {
                            return a;
                          } else if (a?.name === "wallthickness") {
                            return { ...a, type: "NUMBER_INPUT", disabled: false, value: "" };
                          } else return a;
                        })
                    };
                  } else return z;
                })
              };
            } else return x;
          });
          const filter_badges = updated_val.map((x) => {
            if (x.componentName === "NavigationMenu") {
              return {
                ...x,
                schema: x?.schema?.map((y) => {
                  if (y?.ne_id === state?.activeIndx) {
                    return {
                      ...y,
                      badges: y?.badges?.filter((z) => {
                        if (
                          ![
                            "nominalpipesize",
                            "pipeschedule",
                            "wallthickness",
                            "pipeid",
                            "pipemeterial"
                          ].includes(z?.id)
                        ) {
                          return z;
                        }
                      })
                    };
                  } else return y;
                })
              };
            } else return x;
          });
          setState({ ...state, schema: filter_badges });
          return;
        }

        if (formObj["pipecrosssection"] === "Circular") {
          const updated_circular = update_input_values?.map((x) => {
            if (x?.componentName === "DynamicForm") {
              return {
                ...x,
                schema: data.filter((c) => {
                  if (c.componentName === "DynamicForm") {
                    return c;
                  }
                })?.[0]?.schema
              };
            } else return x;
          });

          ///updating badges
          const filter_badges = updated_circular.map((x) => {
            if (x.componentName === "NavigationMenu") {
              return {
                ...x,
                schema: x?.schema?.map((y) => {
                  if (y?.ne_id === state?.activeIndx) {
                    return {
                      ...y,
                      badges: y?.badges?.filter((z) => {
                        if (
                          ![
                            "nominalpipesize",
                            "pipeschedule",
                            "wallthickness",
                            "pipemeterial",
                            "pipeid"
                          ].includes(z?.id)
                        ) {
                          return z;
                        }
                      })
                    };
                  } else return y;
                })
              };
            } else if (x.componentName === "DynamicForm") {
              return {
                ...x,
                schema: x?.schema?.map((y) => {
                  if (y?.id === state?.activeIndx) {
                    return {
                      ...y,
                      fields: y?.fields?.map((z) => {
                        if (z?.name === "pipemeterial") {
                          return { ...z, value: "" };
                        } else if (z?.name === "nominalpipesize") {
                          return {
                            ...z,
                            value: "",
                            options:
                              formObj["unitsofmeasurement"] === "Millimeter"
                                ? diameter_options
                                : inchValues
                          };
                        } else if (z?.name === "pipeschedule") {
                          return { ...z, value: "" };
                        }
                        if (z?.name === "custompipeid") {
                          return { ...z, value: z?.options[indx]?.label };
                        } else return z;
                      })
                    };
                  } else return y;
                })
              };
            } else return x;
          });
          setState({ ...state, schema: filter_badges });
          return;
        }

        setState({ ...state, schema: update_input_values });
        return;
      }

      if (name === "custompipeid") {
        const update_input_values = state?.schema?.map((x) => {
          if (x?.componentName === "DynamicForm") {
            return {
              ...x,
              schema: x?.schema?.map((z) => {
                if (z?.id === state?.activeIndx) {
                  return {
                    ...z,
                    fields: z?.fields?.map((a) => {
                      if (
                        a?.name === "custompipeid" &&
                        name === "custompipeid" &&
                        formObj["pipecrosssection"] === "Rectangular"
                      ) {
                        return { ...a, value: "Custom" };
                      } else return a;
                    })
                  };
                } else return z;
              })
            };
          } else return x;
        });
        setState({ ...state, schema: update_input_values });
        return;
      }

      //Input fields

      if (name === "pipemeterial") {
        let schemInfoo = state?.schema?.map((x) => x);
        const checkSch = nonAvailablePsh.filter((a) => a.name === formObj["pipemeterial"])[0]
          ?.values;
        if (formObj["unitsofmeasurement"] === "Inch") {
          if (formObj["nominalpipesize"]) {
            const pipschFilt = inch_data?.filter(
              (x) => x?.selectedNps === `NPS ${formObj["nominalpipesize"]}`
            );
            const resu = pipschFilt[0].pipSch.filter((x) => checkSch.includes(x?.value) === false);
            const updated_opt = schemInfoo?.map((x) => {
              if (x?.componentName === "DynamicForm") {
                return {
                  ...x,
                  schema: x?.schema?.map((z) => {
                    if (z?.id === state?.activeIndx) {
                      return {
                        ...z,
                        fields: z?.fields?.map((a) => {
                          if (a?.name === "pipeschedule") {
                            return { ...a, options: resu };
                          } else return a;
                        })
                      };
                    } else return z;
                  })
                };
              } else return x;
            });
            setState({ ...state, schema: updated_opt });
            return;
          }
        }

        if (formObj["unitsofmeasurement"] === "Milimeter") {
          if (formObj["nominalpipesize"]) {
            const pipschFilt = diameter_data?.filter(
              (x) => x?.selectedNps === `NPS ${formObj["nominalpipesize"]}`
            );
            const resu = pipschFilt[0].pipSch.filter((x) => checkSch.includes(x?.value) === false);
            const updated_opt = schemInfoo?.map((x) => {
              if (x?.componentName === "DynamicForm") {
                return {
                  ...x,
                  schema: x?.schema?.map((z) => {
                    if (z?.id === state?.activeIndx) {
                      return {
                        ...z,
                        fields: z?.fields?.map((a) => {
                          if (a?.name === "pipeschedule") {
                            return { ...a, options: resu };
                          } else return a;
                        })
                      };
                    } else return z;
                  })
                };
              } else return x;
            });
            setState({ ...state, schema: updated_opt });
            return;
          }
        }
      }

      if (name === "nominalpipesize") {
        let schemInfoo = state?.schema?.map((x) => x);
        const checkSch = nonAvailablePsh.filter((a) => a.name === formObj["pipemeterial"])[0]
          ?.values;
        if (formObj["unitsofmeasurement"] === "Inch") {
          console.log("Inch");
          if (formObj["pipemeterial"]) {
            const pipschFilt = inch_data?.filter(
              (x) => x?.selectedNps === `NPS ${formObj["nominalpipesize"]}`
            );
            const resu = pipschFilt[0]?.pipSch.filter((x) => checkSch.includes(x?.value) === false);
            const updated_opt = schemInfoo?.map((x) => {
              if (x?.componentName === "DynamicForm") {
                return {
                  ...x,
                  schema: x?.schema?.map((z) => {
                    if (z?.id === state?.activeIndx) {
                      return {
                        ...z,
                        fields: z?.fields?.map((a) => {
                          if (a?.name === "pipeschedule") {
                            return { ...a, options: resu };
                          } else return a;
                        })
                      };
                    } else return z;
                  })
                };
              } else return x;
            });
            setState({ ...state, schema: updated_opt });
            return;
          }
        }

        if (formObj["unitsofmeasurement"] === "Millimeter") {
          if (formObj["pipemeterial"]) {
            const pipschFilt = diameter_data?.filter(
              (x) => x?.selectedNps === `NPS ${formObj["nominalpipesize"]}`
            );
            const resu = pipschFilt[0]?.pipSch.filter((x) => checkSch.includes(x?.value) === false);
            const updated_opt = schemInfoo?.map((x) => {
              if (x?.componentName === "DynamicForm") {
                return {
                  ...x,
                  schema: x?.schema?.map((z) => {
                    if (z?.id === state?.activeIndx) {
                      return {
                        ...z,
                        fields: z?.fields?.map((a) => {
                          if (a?.name === "pipeschedule") {
                            return { ...a, options: resu };
                          } else return a;
                        })
                      };
                    } else return z;
                  })
                };
              } else return x;
            });
            setState({ ...state, schema: updated_opt });
            return;
          }
        }
        // console.log("Pipemeterialllll");
      }
      console.log("Outside");

      const pipeId = { id: "", value: "", label: "" };
      const wallThickness = { id: "", value: "", label: "" };
      let pipeSchedIn = state?.schema;

      if (name === "pipeschedule") {
        let indx;
        const pipeSched = { ...e, id: name };
        // alert("Inside pipeschedule");
        let selNps;
        pipeSchedIn = pipeSchedIn?.map((x) => {
          if (x?.componentName === "DynamicForm") {
            return {
              ...x,
              schema: x?.schema?.map((z) => {
                if (z?.id === state?.activeIndx) {
                  return {
                    ...z,
                    fields: z?.fields?.map((a) => {
                      if (a?.name === "pipeschedule") {
                        if (formObj["unitsofmeasurement"] === "Inch") {
                          selNps = inch_data
                            .filter((m) => m.selectedNps === `NPS ${formObj["nominalpipesize"]}`)[0]
                            ?.pipSch?.map((b, indxx) => {
                              if (formObj["pipeschedule"] === b?.id) {
                                indx = indxx;
                                return b;
                              } else return b;
                            });
                        }
                        if (formObj["unitsofmeasurement"] === "Millimeter") {
                          selNps = diameter_data
                            .filter((m) => m.selectedNps === `NPS ${formObj["nominalpipesize"]}`)[0]
                            ?.pipSch?.map((b, indxx) => {
                              if (formObj["pipeschedule"] === b?.id) {
                                indx = indxx;
                                return b;
                              } else return b;
                            });
                        }

                        return a;
                      } else if (a?.name === "pipeid") {
                        const pip_id =
                          formObj["unitsofmeasurement"] === "Inch"
                            ? inch_data.filter(
                                (m) => m.selectedNps === `NPS ${formObj["nominalpipesize"]}`
                              )[0]?.pipeIds[indx]
                            : diameter_data.filter(
                                (m) => m.selectedNps === `NPS ${formObj["nominalpipesize"]}`
                              )[0]?.pipeIds[indx];
                        pipeId.id = a?.name;
                        pipeId.label = pip_id;
                        pipeId.value = a?.name;
                        return {
                          ...a,
                          value: pip_id
                        };
                      } else if (a?.name === "wallthickness") {
                        const wallId =
                          formObj["unitsofmeasurement"] === "Inch"
                            ? inch_data.filter(
                                (m) => m.selectedNps === `NPS ${formObj["nominalpipesize"]}`
                              )[0]?.wallThickness[indx]
                            : diameter_data.filter(
                                (m) => m.selectedNps === `NPS ${formObj["nominalpipesize"]}`
                              )[0]?.wallThickness[indx];
                        wallThickness.id = a?.name;
                        wallThickness.label = wallId;
                        wallThickness.value = a?.name;
                        return {
                          ...a,
                          value: wallId
                        };
                      } else return a;
                    })
                  };
                } else return z;
              })
            };
          } else return x;
        });
      }

      let evnVal = e?.type
        ? { id: name, value: name, label: e?.target?.value }
        : { ...e, id: name, value: name };
      let sch = pipeSchedIn.map((ele) => {
        if (ele.componentName === "NavigationMenu") {
          return {
            ...ele,
            schema: ele.schema?.map((x) => {
              if (x?.ne_id === state?.activeIndx) {
                return {
                  ...x,
                  badges:
                    name === "pipeschedule"
                      ? [
                          ...x?.badges.filter((y) => {
                            if (
                              y?.id !== evnVal.id &&
                              y?.label?.length > 0 &&
                              y?.id !== pipeId.id &&
                              y?.id !== wallThickness.id
                            ) {
                              return y;
                            }
                          }),
                          evnVal,
                          pipeId,
                          wallThickness
                        ]
                      : [
                          ...x?.badges.filter((y) => {
                            if (y?.id !== evnVal.id && y?.label?.length > 0) {
                              return y;
                            }
                          }),
                          evnVal
                        ]
                };
              } else return x;
            })
          };
        } else return ele;
      });

      let sch_filt = sch?.map((ele) => {
        if (ele.componentName === "NavigationMenu") {
          return {
            ...ele,
            schema: ele.schema?.map((x) => {
              if (x?.ne_id === state?.activeIndx) {
                return {
                  ...x,
                  badges: x.badges?.filter((y) => y?.label?.length > 0)
                };
              } else return x;
            })
          };
        } else return ele;
      });
      const update_errors = sch_filt?.map((a) => {
        //console.log("AAA", a);
        if (a?.componentName === "DynamicForm") {
          return {
            ...a,
            schema: a?.schema?.map((b) => {
              if (b?.id === state?.activeIndx) {
                return {
                  ...b,
                  fields: b.fields?.map((c) => {
                    // if (c?.name === "pipemeterial" && name === "pipemeterial") {
                    //   let new_field;
                    //   if (formObj["pipemeterial"]?.length < 15) {
                    //     //  alert("Came in error");
                    //     new_field = { ...c, error: "required" };
                    //   } else {
                    //     // alert("Came outside error");
                    //     new_field = { ...c, error: "" };
                    //   }
                    //   console.log("New_obj", new_field);
                    //   return new_field;
                    // } else
                    if (c?.name === "nominalpipesize" && name === "nominalpipesize") {
                      if (parseFloat(c?.value) < 5) {
                        return { ...c, error: "Selected value less than 5" };
                      } else return { ...c, error: "" };
                    } else return c;
                  })
                };
              } else return b;
            })
          };
        } else return a;
      });
      setState({ ...state, schema: update_errors });
    }
  };

  const handleStepperChange = (item, indx) => {
    setState({ ...state, activeIndx: item?.ne_id });
    const badges_length = state?.schema
      ?.find((x) => x.componentName === "NavigationMenu")
      ?.schema?.find((x) => x?.ne_id === state?.activeIndx);
    // const check_err = state?.schema?.map((x) => {
    //   if (x?.componentName === "DynamicForm") {
    //     return {
    //       ...x,
    //       schema: x?.schema?.map((y) => {
    //         if (y?.id === state?.activeIndx) {
    //           return {
    //             ...y,
    //             fields: y?.fields?.map((z) => {
    //               if (z?.required === true) {
    //                 return { ...z, error: "Required" };
    //               } else return z;
    //             })
    //           };
    //         } else return y;
    //       })
    //     };
    //   } else return x;
    // });
    // console.log("check_err", check_err);
    // setState({ ...state, schema: check_err });
    if (badges_length?.badges?.length > 0 || item?.ne_id < state?.activeIndx) {
      //dispatch({ type: "UPDATE_STEPPER_INDEX", payload: item?.ne_id });
      const err_valid = state?.schema?.map((x) => {
        if (x?.componentName === "DynamicForm") {
          return {
            ...x,
            schema: x?.schema?.map((y) => {
              if (y?.id === state?.activeIndx) {
                return {
                  ...y,
                  fields: y?.fields?.map((z) => {
                    if (z?.required === true && z?.value?.length > 0) {
                      return { ...z, error: "" };
                    } else return z;
                  })
                };
              } else return y;
            })
          };
        } else return x;
      });
      setState({ ...state, activeIndx: item?.ne_id, schema: err_valid });
    } else if (state?.activeIndx === 2) {
      const check_err = state?.schema?.map((x) => {
        if (x?.componentName === "DynamicForm") {
          return {
            ...x,
            schema: x?.schema?.map((y) => {
              if (y?.id === state?.activeIndx) {
                return {
                  ...y,
                  fields: y?.fields?.map((z) => {
                    if (z?.required === true && z?.value?.length === 0) {
                      return { ...z, error: "Required" };
                    } else return z;
                  })
                };
              } else return y;
            })
          };
        } else return x;
      });
      setState({ ...state, schema: check_err });
    }
  };

  const onNavSelect = (sn_id, ne_id, name, bu_code) => {
    const badges_length = state?.schema
      ?.find((x) => x.componentName === "NavigationMenu")
      ?.schema?.find((x) => x?.ne_id === state?.activeIndx);
    if (badges_length?.badges?.length > 0 || ne_id < state?.activeIndx) {
      //dispatch({ type: "UPDATE_STEPPER_INDEX", payload: ne_id });
      setState({ ...state, activeIndx: ne_id });
    }
  };

  const handleDynamicKeypress = () => {};

  const updateDynamicFormData = (formObj, name) => {};
  const updateData = async (info) => {
    setState({ ...state, schema: info });
  };
  // useEffect(async () => {
  //   // dispatch({ type: "UPDATE_SCHEMA", payload: data });
  //   //alert("dispatched");
  //   await updateData(data);
  // }, [data]);

  // console.log("State", state);

  useEffect(() => {
    if (state?.schema?.length > 0) {
      const nav = state.schema.map((x) => {
        if (x.componentName === "NavigationMenu") {
          return {
            ...x,
            schema: x.schema.map((y, indx) => {
              if (y.ne_id === state?.activeIndx) {
                if (state?.activeIndx === 3) {
                  return {
                    ...y,
                    selected: true
                  };
                } else return y;
              } else {
                return { ...y, selected: false };
              }
            })
          };
        } else return x;
      });
      //dispatch({ type: "UPDATE_SCHEMA", payload: nav });
      setState({ ...state, schema: nav });
    }
  }, [state?.activeIndx]);

  return (
    <Grid container>
      <Grid style={{ position: "sticky" }} item xs={12}>
        {getSchemaData("Header")?.length > 0 && (
          <Header
            menuData={getSchemaData("Header")}
            logo={"https://www.emerson.com/resource/blob/emerson-logo-compressed--data-5576584.png"}
          />
        )}
      </Grid>

      <Grid container style={{ margin: "1rem 1rem" }} direction="row">
        <Grid xs={12} md={3}>
          <NavigationMenu
            data={getSchemaData("NavigationMenu")}
            onDelete={onNavDelete}
            onSelect={onNavSelect}
          />
        </Grid>

        <Grid container xs={12} md={9}>
          {getSchemaData("PaStepper") && (
            <PaStepper
              data={getSchemaData("PaStepper")}
              onChange={(itm, indx) => handleStepperChange(itm, indx)}
              activeIndex={state?.activeIndx}
            />
          )}

          <div style={{ marginTop: "1rem" }}>
            {getSchemaData("DynamicForm")?.length > 0 && (
              <DynamicForm
                ref={DynamicEleRef}
                schema={getSchemaData("DynamicForm")?.filter((x) => x?.id === state?.activeIndx)}
                dataSourceUrl=""
                handleChange={(a, b, c, d, e) => handleDataChange(a, b, c, d, e)}
                handleKeyPress={handleDynamicKeypress}
                handleSubmit={function noRefCheck() {}}
                updateData={updateDynamicFormData}
                formKey={state.stepId}
              />
            )}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
