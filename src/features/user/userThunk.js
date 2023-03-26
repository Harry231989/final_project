

import spiceFetch from '../../utils/axios';
import { logoutUser } from './userSlice';


export const registerUserThunk = async(url,user,thunkAPI) => {
    try {
      const res = await spiceFetch.post(url, user);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}


export const loginUserThunk = async(url, user, thunkAPI) => {
     try {
       const res = await spiceFetch.post(url, user);
       return res.data;
     } catch (error) {
       return thunkAPI.rejectWithValue(error.response.data.msg);
     }
}

export const updateUserThunk = async(url, user, thunkAPI) => {
   try {
     const res = await spiceFetch.patch(url, user, );
     return res.data;
   } catch (error) {
     if (error.response.status === 401) {
       thunkAPI.dispatch(logoutUser());
       return thunkAPI.rejectWithValue('Unauthorized! Logging...');
     }
     return thunkAPI.rejectWithValue(error.response.data.msg);
   }
}