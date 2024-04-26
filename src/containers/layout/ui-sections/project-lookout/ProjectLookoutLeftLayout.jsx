import { useSelector } from "react-redux";
import { NavigationMenu } from "@emerson/dynamic-ui-public";

export default function ProjectLookoutLeftLayout() {
  const leftNavData = useSelector((state) => state.initialBuData?.leftSection);
  if (leftNavData?.length > 0) {
    const { componentProps } = leftNavData[0];
    return (
      <NavigationMenu
        data={componentProps?.schema}
        label="hello LeftNavigation"
        onDelete={() => {
        }}
        onSelect={function noRefCheck() {
        }}
      />
    );
  }
  return <></>;
}
