import axios from "axios";

const API_URI = "https://shine-bright-api.onrender.com/api/v1";

const customFetch = axios.create({
    url: API_URI
})

export default customFetch;