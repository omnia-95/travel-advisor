import React, { useState } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { AppBar, Box, InputBase, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const Header = ({ setSearchInput, searchInput }) => {
    const classes = useStyles();

    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display='flex'>
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                    <div id="searchContainer">
                        <InputBase
                            id="searchInput"
                            placeholder="Search..."
                            // onChange={(event) => {
                            //     setSearchInput(event.target.value);
                            // }}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    setSearchInput(event.target.value);
                                }
                            }}
                        />
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;