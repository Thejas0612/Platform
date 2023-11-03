import { Header } from "@emerson/dynamic-ui";
import { headerSchema } from "../../JsonSchema/UsmSchema";
const HeaderSection = () => {
  const HeaderProps = {
    logo: {},
    menuData: {},
    title: {},
    isAuthenticated:false,
    userInfo: {},
    onLogin: () => {},
    onLogout: (noRefCheck = () => {}),
    onOptionClick: (noRefCheck = () => {})
  };

  return (
    <>
      <Header  {...HeaderProps} />
    </>
  );
};

export default HeaderSection;
