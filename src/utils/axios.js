import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

const spiceFetch = axios.create({
    baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
})

spiceFetch.interceptors.request.use((config) => {
 
  const user = getUserFromLocalStorage()
  if(user){
    config.headers.common['Authorization'] = `Bearer ${user.token}`;
  }
  return config;
})

export  default spiceFetch;