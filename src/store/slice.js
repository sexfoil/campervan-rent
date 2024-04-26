import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './thunk';
import { handlePending, handleRejected } from './handler';
import { NAMES } from 'properties/Constants';

const campervanSlice = createSlice({
  name: 'campervans',
  initialState: {
    campervans: {
      campers: [],
      loading: false,
      error: null,
      loadMore: false,
      currentPage: 1,
      searchLocation: '',
    },
    currentCamper: null,
    favorites: [],
    locationFilter: '',
    toolsFilter: [],
    activeTab: NAMES.TABS.features,
    booked: [],
  },
  reducers: {
    updateBooked: (state, { payload }) => {
      state.booked = payload;
    },
    updateActiveTab: (state, { payload }) => {
      state.activeTab = payload;
    },
    updateCurrentCamper: (state, { payload }) => {
      state.currentCamper = payload;
    },
    updateFavorites: (state, { payload }) => {
      state.favorites = payload;
    },
    updateLocationFilter: (state, { payload }) => {
      state.locationFilter = payload;
    },
    addToolsFilter: (state, { payload }) => {
      state.toolsFilter = [...state.toolsFilter, payload];
    },
    removeToolsFilter: (state, { payload }) => {
      state.toolsFilter = state.toolsFilter.filter(tool => tool !== payload);
    },
    updateCurrentPage: ({ campervans }, { payload }) => {
      campervans.currentPage = payload;
    },
    updateSearchLocation: ({ campervans }, { payload }) => {
      campervans.searchLocation = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.fulfilled, ({ campervans }, { payload }) => {
        campervans.loading = false;
        campervans.loadMore = payload.length === NAMES.PAGINATION.limit;
        if (campervans.currentPage > 1) {
          campervans.campers = [...campervans.campers, ...payload];
        } else {
          campervans.campers = payload;
        }
      })
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const campervanReducer = campervanSlice.reducer;
export const {
  addToolsFilter,
  removeToolsFilter,
  updateCurrentPage,
  updateSearchLocation,
  updateLocationFilter,
  updateFavorites,
  updateCurrentCamper,
  updateActiveTab,
  updateBooked,
} = campervanSlice.actions;
