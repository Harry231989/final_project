
import { showLoading, hideLoading, getAllJobs } from '../allJobs/allJobsSlice';
import spiceFetch from '../../utils/axios';
import { clearValues } from './jobSlice';
import { logoutUser } from '../user/userSlice';


 

export const createJobThunk =  async(job, thunkAPI) => {
    try{
      const res = await spiceFetch.post('/jobs', job)
      thunkAPI.dispatch(clearValues());
      return res.data.msg;
    } catch (error) {
       if(error.response.status === 401){
        thunkAPI.dispatch(logoutUser())
        return thunkAPI.rejectWithValue('Unauthorized! Logging Out ....');
       }
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}



export const deleteJobThunk  =  async(jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try{
    const res = await spiceFetch.delete(`/jobs/${jobId}`);
        thunkAPI.dispatch(getAllJobs());
        return res.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading())
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
}


export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const res = await spiceFetch.patch(`/jobs/${jobId}`, job);
    thunkAPI.dispatch(clearValues());
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};