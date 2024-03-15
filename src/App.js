import React, { useState, useEffect } from 'react';

import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData, getLocation } from './api/';

import Header from './components/Header/Header';
import List from './components/List/List';
// import SearchComponent from './components/SearchComponent/SearchComponent';

const App = () => {



    const [places, setPlaces] = useState([]);
    const [location, setLocations] = useState(295424);

    // const handleSearchChange = (event) => {
    //     setSearchQuery(event.target.value);
    // };

    // const onLoad = (autoC) => setAutocomplete(autoC);

    const [searchInput, setSearchInput] = useState('dubai');

    // useEffect(() => {
    //     SearchComponent()
    //         .then((searchInput) => {
    //             console.log()
    //             setSearchInput(searchInput);
    //         })
    // }, []);

    // const searchInput = document.getElementById('searchInput');


    console.log(searchInput);

    useEffect(() => {
        getLocation(searchInput)
            .then((data) => {
                console.log(data)
                setLocations(data[0].result_object.location_id);
            })
    }, [searchInput]);


    useEffect(() => {
        getPlacesData(location)
            .then((data) => {
                console.log(data);
                setPlaces(data);
            })
    }, [location]);

    return (

        <>
            <CssBaseline />
            <Header setSearchInput={setSearchInput} />
            <Grid container spacing={3} style={{ width: '100%' }} >
                <Grid >
                    <List places={places} />
                </Grid>
                {/* <Grid item xs={12} md={4}>
                    <List places={places} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid> */}
            </Grid>
            {/* setCoordinates={setCoordinates}
            coordinates={coordinates} */}
        </>
    );
}

export default App;