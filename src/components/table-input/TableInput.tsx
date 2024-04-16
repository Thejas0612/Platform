import { Grid } from "@mui/material";
import Input from "./Input";
import SingleSelect from "./SingleSelect";
import Label from "./Label";
import "./table-input.scss"

const TableInput = ({options, data, column = 12, ...props}) => {
  // TODO: Temporary fix to keep backwards compatibility. Eventually will just `data` property.
  const dataOverride = data ? data : options

   return (
      <Grid item xs={column} className="msol-table-input">
         <table>
            {dataOverride.map((row, rowIndex) => (
               <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                     <td key={cellIndex} style={{ whiteSpace: "nowrap" }}>
                        {cell.type === 'TEXT' ? (
                              <Label 
                                 schemaProps={cell}
                                 size="small"
                              />
                        ) : cell.type === 'TEXT_INPUT' ? (
                              <Input
                                 schemaProps={cell}
                                 size="small"
                              />
                        ) : cell.type === 'SINGLE_SELECT' ? (
                              <SingleSelect 
                                 schemaProps={cell}
                                 size="small"
                              />
                        ) : null}
                     </td>
                  ))}
               </tr>
            ))}
         </table>
      </Grid>
    )
}

export default TableInput;