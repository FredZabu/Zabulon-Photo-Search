import axios from "axios";
const SearchImages = async (term)=> {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
          Authorization: 'Client-ID LmkhP03JZ3aNEvix_3WH-B5CJI29o2DaVjROAc8bnNQ'
        },
        params: {
            query: term
        }
    })
    
    console.log(response);
    return response.data.results;
}

export default SearchImages;