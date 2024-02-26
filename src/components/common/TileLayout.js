import { TileOrThumbnail } from "@emerson/dynamic-ui";
import { TileSchema } from "../../JsonSchema/UsmSchema";
const TileLayout = (props) => {
  const { navSchema, setNavSchema, schema } = props;
  console.log(schema, 5)
  const { data, description, defaultIds } = TileSchema;
  const onChangeHandler = (en, en1, en2, en3) => {
    console.log(en3, navSchema);
  };
  return (
    <>
      <TileOrThumbnail
        data={schema.data || []}
        defaultDirection="tile"
        defaultIds={defaultIds}
        description={`${description}`}
        onChange={(en, en1, en2, en3) => onChangeHandler(en, en1, en2, en3)}
      />
    </>
  );
};

export default TileLayout;
