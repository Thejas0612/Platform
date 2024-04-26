import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";
import { MultipleSelectInput } from "./MultipleSelectInput";
import { MsolComponentHighlighter } from "../msol-component-highlighter/MsolComponentHighlighter";

export const DropdownMenuGroup = ({
                               dropdowns,
                               selectedOptions,
                               onChange,
                           }) => {
    return (
        <MsolComponentHighlighter>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="subtitle2">Filter By:</Typography>
                </Grid>
                {dropdowns.map((dropdown) => (
                    <Grid key={dropdown.id} item xs={6} md={4} xl={3}>
                        <MultipleSelectInput
                            {...dropdown}
                            value={selectedOptions[dropdown.id]}
                            onChange={(value) => {
                                onChange(dropdown.id, value);
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </MsolComponentHighlighter>
    );
};

DropdownMenuGroup.propTypes = {
    dropdowns: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })).isRequired,
    })).isRequired,
    selectedOptions: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    onChange: PropTypes.func,
};
