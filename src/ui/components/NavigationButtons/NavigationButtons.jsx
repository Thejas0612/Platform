import { ButtonInput } from "@emerson/dynamic-ui-public";
import "./navigation-buttons.css";
import {useHistory, useLocation} from "react-router-dom";
import {useEffect} from "react";

// TODO: Define a way to navigate across the flow. Json file? Backend? flowConfig is temporal

const flowConfig = [
  {
    current: 'measurement-type',
    previous: null,
    next: '/flow/process-conditions'
  },
  {
    current: 'process-conditions',
    previous: '/flow/measurement-type',
    next: '/test'
  },
  {
    current: 'test',
    previous: '/process-conditions',
    next: null
  }
]
export default function NavigationButtons() {
  const history = useHistory();
  const { pathname } = useLocation();
  let currentRoute;
  const findNext = () => {
    currentRoute = flowConfig.find((route) => pathname.endsWith(route.current));
    history.push(currentRoute.next);
  }
  useEffect(() => {
    currentRoute = flowConfig.find((route) => pathname.endsWith(route.current));
  }, [pathname]);
  return (
    <div className="button_stepper_wrapper">
      {(currentRoute && currentRoute.previous !== null) ? (
        <ButtonInput
          label="Previous"
          showBackIcon={true}
          onClick={() => history.back()}
        />
      ) : (
        <div></div>
      )}
      <ButtonInput label="Next" onClick={ () => findNext()} />
    </div>
  );
}
