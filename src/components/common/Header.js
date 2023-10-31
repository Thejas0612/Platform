import { Header } from "@emerson/dynamic-ui";
import { headerSchema } from "../../JsonSchema/UsmSchema";
const HeaderSection = () => {
  const { data, title, userInfo, logo } = headerSchema;
  document.body.addEventListener('click', (evt) => {
    const siteLogo = document.querySelector('.siteLogo');
    if (evt.target === siteLogo) {
      window.location = '/';
    }
  }, false);
  return (
    <>
      <Header
        isAuthenticated
        logo={`${logo}`}
        menuData={data}
        title={`${title}`}
        userInfo={userInfo}
        onLogin={() => {}}
        onLogout={function noRefCheck() {}}
        onOptionClick={function noRefCheck() {}}
      />
    </>
  );
};

export default HeaderSection;
