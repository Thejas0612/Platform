import { useSelector } from "react-redux";
import { NavigationMenu } from "../../../components/dynamic-ui/uiComponentsConfig";
import { navigationElementsData } from "./NavigationElementsData"

export default function LeftLayout() {
  const leftNavData = useSelector((state) => state.initialBuData?.leftSection);
  const CurrentSelectedBU = useSelector((state) => state.initialBuData?.activeBuCode);

  //Loading navigation elements respective to tempPA
  if (CurrentSelectedBU == 'tempPA') {
    return (
      <NavigationMenu
        data={navigationElementsData}
        label="hello LeftNavigation"
        onDelete={() => { }}
        onSelect={function noRefCheck(sn_id, ne_id, CurreHtmlField, bu_code) {
          navigationElementsData.filter((el) => {
            if (el.html_field_name == CurreHtmlField) {
              el.selected = true; // to update selected status as true and highlight
            }
          }
          );
        }}
      />
    )
  }
  if (leftNavData?.length > 0 && CurrentSelectedBU == 'dpFlow') {
    const { componentProps } = leftNavData[0];
    return (
      <NavigationMenu
        data={componentProps?.schema}
        label="hello LeftNavigation"
        onDelete={() => { }}
        onSelect={function noRefCheck() { }}
      />
    );
  }

  return <></>;
}
