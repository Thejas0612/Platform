import { Grid } from "@mui/material";
import Input from "./Input";
import SingleSelect from "./SingleSelect";
import Label from "./Label";
import "./table-input.scss";
import React, { useState } from 'react';

const TableInput = ({ data, column = 12, onChange, name }: {
  data: any,
  column: number,
  onChange: any,
  name: string
}) => {
  const [storedValues, setStoredValues] = useState<{ [key: string]: string }>({});
  function handleChange(e: any, propertyValue: string, propertyName: string): void {
    const value = { ...storedValues };
    value[propertyName] = propertyValue;
    setStoredValues(value);

    onChange(e, "", name, value);
  }

  return (
    <Grid item xs={column} className="msol-table-input">
      <table>
        {data.map((row: any, rowIndex: any) => (
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
                    onChange={handleChange}
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