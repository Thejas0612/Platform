import React from "react";
import { NavigationMenu } from "@emerson/dynamic-ui";
const NavigationMenu = (props) => {
  const NavMenuProps = {
    data: [],
    onDelete: () => {},
    onSelect: () => {},
    dataSourceUrl: ""
  };
  return (
    <>
      <NavigationMenu {...NavMenuProps} />
    </>
  );
};

export default NavigationMenu;
