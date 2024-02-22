import TileLayout from "../common/TileLayout";
const TechnologyType = (props) => {
  const { navSchema, setNavSchema, schema } = props;
  return (
    <>
      <TileLayout navSchema={navSchema} setNavSchema={(e) => setNavSchema(e)} schema={schema} />
    </>
  );
};

export default TechnologyType;
