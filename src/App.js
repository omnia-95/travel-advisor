import React, { useState, useEffect } from 'react';

import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData, getCoordinates } from './api/';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {

    const [places, setPlaces] = useState([]);

    const [searchQuery, setSearchQuery] = useState('');
    const [coordinates, setCoordinates] = useState([]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        getCoordinates()
            .then((data) => {
                console.log(data);
                setCoordinates(data);
            })
    }, []);

    useEffect(() => {
        getPlacesData()
            .then((data) => {
                console.log(data);
                setPlaces(data);
            })
    }, []);

    return (
        <>
            <CssBaseline />
            <Header />
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