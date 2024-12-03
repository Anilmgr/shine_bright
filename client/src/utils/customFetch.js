import axios from "axios";
import { API_URI } from "../../../utils/constants";

const customFetch = axios.create({
    baseURL: API_URI+'api/v1'
})

export default customFetch;