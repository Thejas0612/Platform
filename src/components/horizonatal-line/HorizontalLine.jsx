const HorizontalLine = (props) => {
  const { schema } = props;
  return (
    <div>
      {schema.horizontalLine ? (
        <hr
          style={{
            border: "none",
            height: "2px",
            backgroundColor: "#DEDFE0",
            color: "#DEDFE0",
            borderRadius: "1rem",
            margin: "2rem"
          }}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default HorizontalLine;
