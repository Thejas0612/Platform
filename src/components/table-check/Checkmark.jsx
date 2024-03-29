import tick from "./tick.png";
import dash from "./dash.png";



const Checkmark = (props) => {
  const { schema } = props;
  return (
    <div style={{ margin: '4rem' }}>
      <div>
        {schema.options.map((option) => (
          <img
            key={option.id}
            src={option.type === "tick" ? tick : dash}
            alt={option.type ? "Enabled" : "Disabled"}
          />
        ))}
      </div>
    </div>
  );
};

export default Checkmark;
