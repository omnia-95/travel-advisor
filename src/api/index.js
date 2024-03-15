
import axios from 'axios';

const URL2 = 'https://photon.komoot.io/api/?'

const options2 = {
    params: {
        q: 'dubai',
        limit: '1'
    },

};

export const getCoordinates = async () => {
    try {
        const { data } = await axios.get(URL2, options2);
        return data;
    } catch (error) {
        console.log(error)
    }
}


const URL = 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng'



export const getPlacesData = async (lng, lat) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                longitude: lng,
                latitude: lat,
                lunit: 'km',
                currency: 'USD',
                lang: 'en_US'
            },
            headers: {
                'X-RapidAPI-Key': 'ebcf5818cdmsh14c4e6cd6b14d28p141a03jsna85055a883ba',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}





// import axios from 'axios';

// const URL = 'https://travel-advisor.p.rapidapi.com/attractions/list'

// const options = {
//     params: {
//         location_id: '298571',
//         sort: 'recommended'
//     },
//     headers: {
//         'X-RapidAPI-Key': 'ebcf5818cdmsh14c4e6cd6b14d28p141a03jsna85055a883ba',
//         'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//     }
// };

// export const getPlacesData = async () => {
//     try {
//         const { data: { data } } = await axios.get(URL, options);

//         return data;

//     } catch (error) {
//         console.log(error)
//     }
// }





// import axios from 'axios';

// const URL = 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete'

// const options = {
//     params: {
//         query: 'paris',
//     },
//     headers: {
//         'X-RapidAPI-Key': 'ebcf5818cdmsh14c4e6cd6b14d28p141a03jsna85055a883ba',
//         'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//     }
// };


// export const getPlacesData = async () => {
//     try {
//         const { data: { data } } = await axios.get(URL, options);

//         return data;

//     } catch (error) {
//         console.log(error)
//     }
// }
