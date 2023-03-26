import axios from 'axios';
// import { clearStore } from '../features/user/userSlice';
import { getUserFromLocalStorage } from './localStorage';

const spiceFetch = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
});

spiceFetch.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  if (user) {
    config.headers['Authorization'] = `Bearer ${user.token}`;
  }
  return config;
});

// export const checkForUnauthorizedResponse = (error, thunkAPI) => {
//   if (error.response.status === 401) {
//     thunkAPI.dispatch(clearStore());
//     return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
//   }
//   return thunkAPI.rejectWithValue(error.response.data.msg);
// };

export default spiceFetch;

// import axios from "axios";
// import { getUserFromLocalStorage } from "./localStorage";

// const spiceFetch = axios.create({
//     baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
// })

// spiceFetch.interceptors.request.use((config) => {

//   const user = getUserFromLocalStorage()
//   if(user){
//     config.headers.common['Authorization'] = `Bearer ${user.token}`;
//   }
//   return config;
// })

// export  default spiceFetch;
