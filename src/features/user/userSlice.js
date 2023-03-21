import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import spiceFetch from "../../utils/axios";
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage";




const initialState = {
    isLoading: false,
    user: getUserFromLocalStorage (),
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
        const res = await spiceFetch.post('/auth/register', user)
        return res.data
    } catch (error) {
       return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
);
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    try {
        const res = await spiceFetch.post('/auth/login', user)
        return res.data
    } catch (error) {
       return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
);

// export const loginUser = createAsyncThunk('user/loginUser', async(user, thunkAPI) => {
//     console.log(`Login User : ${JSON.stringify(user)}`)
// })



const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [registerUser.pending]: (state)=>{
            state.isLoading = true;
        },
        [registerUser.fulfilled]: (state,{ payload })=>{
            const {user} = payload
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user)
            toast.success(`Hello There ${user.name}`)
        },
        [registerUser.rejected]: (state, { payload })=>{
            state.isLoading = false;
            toast.error(payload)
        },
        [loginUser.pending]: (state)=>{
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state,{ payload })=>{
            const {user} = payload
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`Welcome Spearmint ${user.name}`)
        },
        [loginUser.rejected]: (state, { payload })=>{
            state.isLoading = false;
            toast.error(payload)
        },
    }
})

export default userSlice.reducer