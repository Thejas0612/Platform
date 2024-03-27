import React from 'react'
import { TextField, Select, MenuItem, FormControl, IconButton } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InfoIcon from '@mui/icons-material/Info'

import SelectInput from './SelectInput';
import TextInput from './TextInput';
import styled from '@emotion/styled';

const FORM_FEILDS = {
   "SINGLE_SELECT": SelectInput,
   "TEXT_INPUT": TextInput
}

const StyledTable = styled(Table)(() => ({
   '& .MuiTableCell-root': {
      borderBottom: 'none',
      padding: 0
   }
}))

function TableInput({ value, data, onChange, ...props }) {

   const [tableData, setTableData] = React.useState(data);
   const [valueMap, setValueMap] = React.useState({});
   const [updatedSchema, setUpdatedSchema] = React.useState([])

   React.useEffect(() => {
      setTableData(data)
      fetchData()
   }, [data]);

   const fetchData = async () => {
      const updatedSchema = data.length && data[1].map(async (field) => {
         if (field.dataSourceUrl) {
            const response = await fetch(field.dataSourceUrl);
            const optData = await response.json();
            return { ...field, options: optData }
         } else {
            return field
         }
      })
      const SchemaWithOpts = await Promise.all(updatedSchema);
      setUpdatedSchema(SchemaWithOpts)
   }

   const changeHandle = (e, type, name, value) => {
      // validateTableItem(name, value)
      setValueMap({ ...valueMap, [name]: value });
      onChange(e, props.othAttr?.type, name, { ...valueMap, [name]: value });
   };

   return (
      <>
         <TableContainer>
            <StyledTable size='small'>
               <TableHead>
                  <TableRow>
                     {tableData.length && tableData[0].map(ele => (
                        <TableCell>
                           {ele.label}
                           {ele.title && (
                              <IconButton>
                                 <InfoIcon color='primary' fontSize='small' />
                              </IconButton>
                           )}
                        </TableCell>
                     ))}
                  </TableRow>
               </TableHead>
               <TableBody>
                  <TableRow>
                     {updatedSchema.length > 0 && updatedSchema.map((feild, i) => {
                        const FeildComponent = FORM_FEILDS[feild.type]
                        return FeildComponent ? (
                           <>
                              <TableCell key={i}> <FeildComponent onChange={changeHandle} size='small' {...feild} /> </TableCell>
                           </>
                        ) : null
                     }
                     )}
                  </TableRow>
               </TableBody>
            </StyledTable>
         </TableContainer>
      </>
   )
}

export default TableInput