import axios from "axios";

const API_URI = "https://shine-bright-api.onrender.com";

const customFetch = axios.create({
    baseURL: API_URI,
})

export default customFetch;