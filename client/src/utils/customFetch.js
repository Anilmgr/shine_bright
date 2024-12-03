import axios from "axios";

const customFetch = axios.create({
    baseURL: 'https://shine-bright-api.onrender.com/api/v1'
})

export default customFetch;