import axios from "axios";

const spiceFetch = axios.create({
    baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
})

export  default spiceFetch