import { Grid } from "@mui/material";
import Input from "./Input";
import SingleSelect from "./SingleSelect";
import Label from "./Label";
import "./table-input.scss";

const TableInput = ({ options, data, column = 12, onChange, name, ...props }: {
  options: any,
  data: any,
  column: number,
  onChange: any,
  name: string
}) => {
  // TODO: Temporary fix to keep backwards compatibility. Eventually will just `data` property.
  const dataOverride = data ? data : options;

  function handleChange(e: any, propertyValue: string, propertyName: string): void {
    const value: { [key: string]: string } = {};
    value[propertyName] = propertyValue;

    onChange(e, "", name, value);
  }

  return (
    <Grid item xs={column} className="msol-table-input">
      <table>
        {dataOverride.map((row: any, rowIndex: any) => (
          <tr key={rowIndex}>
            {row.map((cell: any, cellIndex: number) => (
              <td key={cellIndex} style={{ whiteSpace: "nowrap" }}>
                {cell.type === "TEXT" ? (
                  <Label
                    schemaProps={cell}
                    size="small"
                  />
                ) : cell.type === "TEXT_INPUT" ? (
                  <Input
                    schemaProps={cell}
                    size="small"
                  />
                ) : cell.type === "SINGLE_SELECT" ? (
                  <SingleSelect
                    schemaProps={cell}
                    size="small"
                    onChange={handleChange}
                  />
                ) : null}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </Grid>
  );
};

export default TableInput;