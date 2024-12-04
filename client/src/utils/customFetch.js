import axios from "axios";

const API_URI = "https://shine-bright-api.onrender.com";

const customFetch = axios.create({
    url: API_URI,
    baseURL: "/api/v1"
})

export default customFetch;