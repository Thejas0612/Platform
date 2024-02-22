import React from "react";
import { NavigationMenu } from "@emerson/dynamic-ui";
const Navigation = (props) => {
  const { navSchema, setNavSchema } = props;
  const handleDelete = () => {};
  const noRefCheck = (e, id, name, bu_code) => {
    // console.log(e, id, name, bu_code);
  };
  return (
    <>
      <NavigationMenu
        data={navSchema}
        onDelete={handleDelete}
        onSelect={(sn_id, ne_id, name, bu_code) => noRefCheck(sn_id, ne_id, name, bu_code)}
      />
    </>
  );
};

export default Navigation;
