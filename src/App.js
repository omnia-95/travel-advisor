import React, { useState, useEffect } from 'react';

import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData, getLocation } from './api/';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {

    const [places, setPlaces] = useState([]);

    const [searchQuery, setSearchQuery] = useState('');
    const [coordinates, setCoordinates] = useState([]);
    const [location, setLocations] = useState(295424);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        getLocation()
            .then((data) => {
                console.log(data)
                setLocations(data[0].result_object.location_id);
            })
    }, []);

    // useEffect(() => {
    //     getCoordinates()
    //         .then((data) => {
    //             // console.log(data.features);
    //             setCoordinates(data.features);
    //         })
    // }, []);

    // console.log(coordinates);

    // const lng = coordinates[0]?.geometry?.coordinates[0];
    // const lat = coordinates[0]?.geometry?.coordinates[1];

    // coordinates?.map((coordinate, i) => {
    //     const lng = coordinate.geometry.coordinates[0];
    //     const lat = coordinate.geometry.coordinates[1];
    //     console.log(lng); 
    //     return null; 


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