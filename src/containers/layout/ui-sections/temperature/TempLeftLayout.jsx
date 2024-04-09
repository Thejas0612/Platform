import { useSelector } from "react-redux";
import NavigationMenu from "../../../../components/navigation-menu/NavigationMenu";
export default function TempLeftLayout({changeIndex}) {
  const leftSection = useSelector((state) => state.initialBuData?.leftSection);
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);
  
  const { componentProps } = leftSection[0];

  const allowGoingBack = (menu) => {
    if(menu.step_order < activeIndex) {
      changeIndex(menu.step_order);
    }
  }

  return (
    (leftSection?.length > 0) ?
      <div className="left-nav">
        <NavigationMenu
          data={componentProps?.schema}
          onLabelClick={allowGoingBack}
        />
      </div>
      : <></>
  );
}
