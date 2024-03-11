// import axios from 'axios';

// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// const options = {
//     params: {
//         bl_latitude: '11.847676',
//         tr_latitude: '12.838442',
//         bl_longitude: '109.095887',
//         tr_longitude: '109.149359',
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




import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/locations/search'

const options = {
    params: {
        query: 'dubai',
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


// category: {key: "attraction", name: "Attraction"}

