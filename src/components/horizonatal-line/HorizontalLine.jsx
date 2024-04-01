const ColoredLine = ({ color }) => (
  <hr
    style={{
      border: "none",
      height: "2px",
      backgroundColor: color,
      color: color,
      borderRadius: "1rem",
      margin: "1rem"
    }}
  />
);

const HorizontalLine = (props) => {
  const { schema } = props;
  return <div>{schema.horizontalLine ? <ColoredLine color="#E5E4E2" /> : <div></div>}</div>;
};

export default HorizontalLine;
