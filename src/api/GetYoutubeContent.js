import axios from "axios";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: '10',
        key: 'AIzaSyD3xLmF98XpBEplSe3asCz8v8j5lKywikg'
    }
});