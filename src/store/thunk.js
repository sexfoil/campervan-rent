import { createAsyncThunk } from '@reduxjs/toolkit';
import { findAll, findAllFilterBy } from 'api/AdvertsApi';

export const fetchCampers = createAsyncThunk(
  'adverts/fetchAll',
  async (params, thunkAPI) => {
    try {
      const response = await findAll(params?.page, params?.limit);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCampersFilterBy = createAsyncThunk(
  'adverts/fetchAllFiltered',
  async (params, thunkAPI) => {
    try {
      const response = await findAllFilterBy(
        params?.filter,
        params?.page,
        params?.limit
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
