import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './thunk';
import { handlePending, handleRejected } from './handler';

const campervanSlice = createSlice({
  name: 'campervans',
  initialState: {
    campervans: {
      campers: [],
      loading: false,
      error: null,
    },
    favorites: [],
    filter: '',
  },
  reducers: {
    updateFavorites: (state, { payload }) => {
      state.favorites = payload;
    },
    updateFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.fulfilled, ({ campervans }, { payload }) => {
        campervans.loading = false;
        campervans.campers = payload;
      })
      // .addCase(addContact.fulfilled, ({ contacts }, { payload }) => {
      //   contacts.isLoading = false;
      //   contacts.items.push(payload);
      // })
      // .addCase(deleteContact.fulfilled, ({ contacts }, { payload }) => {
      //   contacts.isLoading = false;
      //   contacts.items = contacts.items.filter(item => item.id !== payload.id);
      // })
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const campervanReducer = campervanSlice.reducer;
export const { updateFilter, updateFavorites } = campervanSlice.actions;
