import { CustomTop } from "@emerson/dynamic-ui";
import { CustomTopSchema } from "../../JsonSchema/UsmSchema";
import { Grid } from "@mui/material";
const CustomInfo = () => {
  const { data } = CustomTopSchema;
  return (
    <>
      <Grid>
        <CustomTop data={data} />
      </Grid>
    </>
  );
};

export default CustomInfo;
