import TileLayout from "../common/TileLayout";
const InstrumentType = (props) => {
  const { navSchema, setNavSchema, schema } = props;
  return (
    <>
      <TileLayout navSchema={navSchema} setNavSchema={(e) => setNavSchema(e)} schema={schema} />
    </>
  );
};

export default InstrumentType;
