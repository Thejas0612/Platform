import { useSelector } from "react-redux";
import { NavigationMenu } from "@emerson/dynamic-ui-public";
import PropTypes from "prop-types";

const DpFlowLeftLayout = () => {
  const leftSectionSchema = useSelector((state) => state.initialBuData?.leftSection);

  if (leftSectionSchema?.length > 0) {
    return (
      <NavigationMenu
        data={leftSectionSchema[0]?.componentProps?.schema}
        label=""
        onDelete={() => {}}
        onSelect={() => {}}
      />
    );
  }
  return <></>;
};

DpFlowLeftLayout.propTypes = {
  schema: PropTypes.object.isRequired
};

export default DpFlowLeftLayout;
