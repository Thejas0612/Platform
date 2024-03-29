import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';

const Checkmark = (props) => {
  const { schema } = props;
  return (
  <div style={{ margin: '4rem' }}>
      <div>
        {schema.options.map((option) => (
          <span key={option.id}>
             {option.type === "tick" ? (
              <CheckIcon sx={{ fontSize: 50 }} style ={{ color: 'green' }} />
            ) : (
              <RemoveIcon sx={{ fontSize: 50 }}style={{ color: 'gray' }} />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Checkmark;
