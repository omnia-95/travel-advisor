
import axios from 'axios';


const URL = 'https://travel-advisor.p.rapidapi.com/locations/search'

export const getLocation = async (searchInput) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                query: searchInput,
                limit: '1'
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}



const URL2 = 'https://travel-advisor.p.rapidapi.com/attractions/list'



export const getPlacesData = async (location) => {
    try {
        const { data: { data } } = await axios.get(URL2, {
            params: {
                location_id: location
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}










