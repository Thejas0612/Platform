import React from "react";
import { useSelector } from "react-redux";
import { NavigationMenu } from "../../../../components/dynamic-ui/uiComponentsConfig";
import { getNavigationMenuSchema } from "../../../../schema-service/schemaService";
import PropTypes from "prop-types";

const DpFlowLeftLayout = ({ schema }) => {
  const buCode = useSelector((state) => state.initialBuData?.selectedBu);
  const schema_data = getNavigationMenuSchema(buCode, "NavigationMenu", schema);

  if (schema_data?.length > 0) {
    return <NavigationMenu data={schema_data} label="" onDelete={() => {}} onSelect={() => {}} />;
  }

  return <></>;
};

DpFlowLeftLayout.propTypes = {
  schema: PropTypes.object.isRequired
};

export default DpFlowLeftLayout;
