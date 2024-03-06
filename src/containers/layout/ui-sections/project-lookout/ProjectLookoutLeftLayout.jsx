import { useSelector } from "react-redux";
import { NavigationMenu } from "../../../../components/dynamic-ui/uiComponentsConfig";
export default function ProjectLookoutLeftLayout() {
  const leftNavData = useSelector((state) => state.initialBuData?.leftSection);
  console.log("Project-lookouttttttttttttttttt");
  if (leftNavData?.length > 0) {
    const { componentProps } = leftNavData[0];
    return (
      <NavigationMenu
        data={componentProps?.schema}
        label="hello LeftNavigation"
        onDelete={() => {}}
        onSelect={function noRefCheck() {}}
      />
    );
  }
  return <></>;
}
