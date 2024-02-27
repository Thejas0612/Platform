import { useSelector } from "react-redux";
import { NavigationMenu } from "../../../components/dynamic-ui/uiComponentsConfig";

export default function LeftLayout() {
  const leftNavData = useSelector((state) => state.initialBuData?.leftSection);

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
