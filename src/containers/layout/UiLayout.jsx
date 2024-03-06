import { CircularProgress, Grid } from "@mui/material";
import "./uiLayout.css";
import LeftLayout from "./ui-sections/LeftLayout";
import RightLayout from "./ui-sections/RightLayout";
import TopLayout from "./ui-sections/TopLayout";
import { useEffect, useState } from "react";
import data from "../../schema-service/schema_version_0.0.1.json";
import { getLineSizeValues } from "../../api/dp-flow/dpFlowApis";
import { updateApiDataInSchema } from "../../schema-service/schemaService";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateBu } from "../../redux/reducers/initialBuDataSlice";

export default function UiLayout() {
  const [schema, setSchema] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const use_location = useLocation();
  const dispatch = useDispatch();

  const buCode = useSelector((state) => state.initialBuData?.selectedBu);
  const updateFieldsInSchema = (data) => {
    if (Object.keys(data)?.length > 0) {
      const update_schema = {
        ...schema,
        [data.buCode]: {
          uiComponents: schema[data?.buCode]?.uiComponents?.map((itm) => {
            if (itm.componentName === "NavigationMenu") {
              return {
                ...itm,
                componentProps: {
                  schema: itm.componentProps?.schema?.map((field) => {
                    if (field?.ne_id === data?.activeIndex) {
                      const findBadgeId = field?.badges?.find(
                        (itm) => itm.id === data?.badges[0]?.id
                      );
                      return {
                        ...field,
                        badges: data?.badges
                          ? //data?.badges
                            findBadgeId === undefined
                            ? [...field.badges, ...data?.badges]
                            : field?.badges.map((ele) => {
                                if (ele.id === data?.badges[0]?.id) {
                                  return data?.badges[0];
                                } else return ele;
                              })
                          : []
                      };
                    } else return field;
                  })
                }
              };
            } else if (itm.componentName === "DynamicForm") {
              return {
                ...itm,
                componentProps: {
                  schema: itm.componentProps?.schema?.map((field) => {
                    if (field.id === data?.activeIndex) {
                      return {
                        ...field,
                        fields: field?.fields?.map((itm) => {
                          if (itm?.name === data?.field?.name) {
                            return data?.field;
                          } else return itm;
                        })
                      };
                    } else return field;
                  })
                }
              };
            } else return itm;
          })
        }
      };
      setSchema(update_schema);
    }
  };

  const updateValidations = (field, buCode) => {
    setSchema({ ...schema, [buCode]: field });
  };

  const getSchema = async () => {
    const res = await getLineSizeValues();
    if (Object.keys(res)?.length > 0 && res?.apiResponse?.length > 0) {
      const updated_schema = await updateApiDataInSchema(res, data[buCode]);
      setSchema({ ...data, [buCode]: updated_schema });
      setIsLoading(false);
      return;
    }
    setSchema(data);
    setIsLoading(false);
  };

  useEffect(async () => {
    dispatch(updateBu(use_location?.state?.bu_code));
    await getSchema();
  }, [buCode]);

  return (
    <Grid container>
      <div className="top_section">
        <TopLayout />
      </div>
      {Object.keys(schema)?.length > 0 && isLoading === false && (
        <Grid className="left_section" container direction="row">
          <Grid xs={12} md={3}>
            <LeftLayout schema={schema} />
          </Grid>
          <Grid className="right_section" container xs={12} md={9}>
            <RightLayout
              schema={schema}
              updateFieldsInSchema={updateFieldsInSchema}
              updateValidations={updateValidations}
            />
          </Grid>
        </Grid>
      )}
      {Object.keys(schema)?.length === 0 && isLoading && (
        <div className="spinner_wrapper">
          <CircularProgress />
        </div>
      )}
    </Grid>
  );
}
