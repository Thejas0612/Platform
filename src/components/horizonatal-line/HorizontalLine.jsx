const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            margin:"1rem",
            borderRadius:"1rem"
        }}
    />
);
const HorizontalLine = (props) => {
    const {schema}  = props;
    console.log(schema.horizontalLine);
  return (
    <div>
        {schema.horizontalLine ? <ColoredLine color="#E5E4E2" /> : <div></div> }
    </div>
  )
}

export default HorizontalLine