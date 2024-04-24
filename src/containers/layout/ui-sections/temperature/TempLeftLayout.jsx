import { useDispatch, useSelector } from "react-redux";
import NavigationMenu from "../../../../components/navigation-menu/NavigationMenu";
import { changeActiveIndex, updateLeftSection } from "../../../../redux/reducers/initialBuDataSlice";
import { changeStepperIndex } from "../schemaMutations";
export default function TempLeftLayout() {
  const leftSection = useSelector((state) => state.initialBuData?.leftSection);
  const activeIndex = useSelector((state) => state.initialBuData?.activeIndex);
  const dispatch = useDispatch();
  
  const allowGoingBack = (menu) => {
    if(menu.step_order < activeIndex) {
      const leftSchema = changeStepperIndex(leftSection, menu.step_order);
      dispatch(updateLeftSection(leftSchema));
      dispatch(changeActiveIndex(menu.step_order));
    }
  }

  return (
    (leftSection?.length > 0) ?
      <div className="left-nav">
        <NavigationMenu
          data={leftSection[0]?.componentProps?.schema}
          onLabelClick={allowGoingBack}
        />
      </div>
      : <></>
  );
}
