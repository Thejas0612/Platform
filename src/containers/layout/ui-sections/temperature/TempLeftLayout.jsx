import { useSelector } from "react-redux";
import { NavigationMenu } from "../../../../components/dynamic-ui/uiComponentsConfig";
export default function TempLeftLayout() {
  const leftNavData = useSelector((state) => state.initialBuData?.leftSection);
  if (leftNavData?.length > 0) {
    const { componentProps } = leftNavData[0];
    return (
      <div className="left-nav">
        <NavigationMenu
          data={componentProps?.schema}
          label="hello LeftNavigation"
          onDelete={() => {}}
          onSelect={function noRefCheck() {}}
        />
      </div>
    );
  }
  return <></>;
}
