import React, {FunctionComponent, useState} from "react";
import {
    Button,
    Grid,
    MenuItem,
    Select, SelectChangeEvent,
    Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Option{
    value: string;
    label: string;
}

export interface TechnologyTypeFilterProps {
    onClose?: (sortByValue: string) => void;
    sortOptions: Option[];
}
const useStyles = makeStyles({
    button: {
        textTransform: "none",
        color: "black",
        padding: "20px"
    }
});
export const TechnologyTypeFilter: FunctionComponent<TechnologyTypeFilterProps> = ({sortOptions, onClose = () => {}}) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [sortValue, setSortValue] = useState("");
    const classes = useStyles();

    const handleFilterOpen = () => () => {
        setExpanded(!expanded);
        expanded && onClose(sortValue);
        };

    const handleSortChange = (event: SelectChangeEvent<unknown>) => {
        const selectedValue = event.target.value as string;
        setSortValue(selectedValue);
    };

    return (
        <Grid container justifyContent="flex-end" alignItems="center">
            <Grid item>
                {expanded ? (<Grid container direction="row" alignItems="center">
                    <Typography sx={{ paddingRight: "20px"}}> Sort By: </Typography>
                    <Select
                        IconComponent={KeyboardArrowDownIcon}
                        onChange={handleSortChange}
                        sx={{minWidth: "160px", fontSize: "12px"}}
                        value={sortValue}
                    >
                        {sortOptions.map((option, index) => (
                            <MenuItem key={index} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>) : <></>}
            </Grid>
            <Grid item>
                <Button
                    variant="text"
                    endIcon={expanded ? <CloseIcon/> : <TuneIcon/>}
                    onClick={handleFilterOpen()}
                    className={classes.button}
                >
                    <Typography>Filters </Typography>
                </Button>
            </Grid>
        </Grid>
        );
};