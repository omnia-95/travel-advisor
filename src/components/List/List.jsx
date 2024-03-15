import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './styles';

const List = ({ places }) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');


    // Function to chunk the places array into groups of four
    const chunkPlaces = (array, chunkSize) => {
        return Array.from({ length: 1 }, (_, index) =>
            array.slice()
        );
    };

    return (
        <div className={classes.container}>
            <Typography variant='h4'>
                Attractions around the world!
            </Typography>
            {/* Map over the chunked places and render each chunk in a separate row */}
            {chunkPlaces(places).map((chunk, index) => (
                <Grid container spacing={3} key={index}>
                    {chunk.map((place, i) => (
                        <Grid item key={i} xs={12} sm={6} md={3}>
                            {/* Render PlaceDetails component for each place */}
                            <PlaceDetails place={place} />
                        </Grid>
                    ))}
                </Grid>
            ))}
        </div>
    );
}

export default List;





// // Function to chunk the places array into groups of four
// const chunkPlaces = (array, chunkSize) => {
//     return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, index) =>
//         array.slice(index * chunkSize, index * chunkSize + chunkSize)
//     );
// };




// {/* Map over the chunked places and render each chunk in a separate row */}
// {chunkPlaces(places).map((chunk, index) => (
//     <Grid container spacing={3} className={classes.list} key={index}>
//         {chunk.map((place, i) => (
//             <Grid item key={i} xs={12} sm={6} md={3}>
//                 {/* Render PlaceDetails component for each place */}
//                 <PlaceDetails place={place} />
//             </Grid>
//         ))}
//     </Grid>
// ))}