
import axios from 'axios';

const URL2 = 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete'


export const getCoordinates = async (searchQuery) => {
    try {
        const { data: { data } } = await axios.get(URL2, {
            params: {
                query: searchQuery,
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


const URL = 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng'

const options = {
    params: {
        longitude: '109.19553',
        latitude: '12.235588',
        lunit: 'km',
        currency: 'USD',
        lang: 'en_US'
    },
    headers: {
        'X-RapidAPI-Key': 'ebcf5818cdmsh14c4e6cd6b14d28p141a03jsna85055a883ba',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};


export const getPlacesData = async () => {
    try {
        const { data: { data } } = await axios.get(URL, options);

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
