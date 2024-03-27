import { FormControl, MenuItem, Select } from "@mui/material"

const SingleSelect = (props) => {

    return (
        <FormControl size={props.size} style={{minWidth: "6rem"}}>
            <Select
                label={props.label}
                name={props.name}
                onChange={props.handleChange}
                fullWidth={true}
                style={{borderRadius: 0}}
            >
                {props.schemaProps.options.map((menu, menuIndex) => {
                    return (
                        <MenuItem key={menuIndex} value={menu.value}>{menu.label}</MenuItem>
                    );
                })}
                
            </Select>
        </FormControl>
    )
}

export default SingleSelect;