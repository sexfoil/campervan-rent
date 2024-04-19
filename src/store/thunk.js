import { createAsyncThunk } from '@reduxjs/toolkit';
import { findAll } from 'api/AdvertsApi';

export const fetchCampers = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await findAll();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
