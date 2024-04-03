import { TextField, Typography } from "@mui/material";
import Input from "./Input";
import SingleSelect from "./SingleSelect";
import Label from "./Label";

const TableInput = (props) => {

   return (
      <>
         <table>
            {props.options.map((row, rowIndex) => (
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
      </>
    )
}

export default TableInput;