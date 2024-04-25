import { createAsyncThunk } from '@reduxjs/toolkit';
import { findAll } from 'api/AdvertsApi';

export const fetchCampers = createAsyncThunk(
  'adverts/fetchAll',
  async (params, thunkAPI) => {
    try {
      const response = await findAll(
        params?.page,
        params?.limit,
        params?.location
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
