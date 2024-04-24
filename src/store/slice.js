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
      currentPage: 0,
    },
    currentCamper: null,
    favorites: [],
    locationFilter: '',
    toolsFilter: [],
    activeTab: NAMES.TABS.features,
  },
  reducers: {
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
    updateCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
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
        campervans.currentPage = campervans.currentPage + 1;
      })
      // .addCase(
      //   fetchCampersFilterBy.fulfilled,
      //   ({ campervans }, { payload }) => {
      //     campervans.loading = false;
      //     campervans.loadMore = payload.length === NAMES.PAGINATION.limit;
      //     if (campervans.currentPage > 1) {
      //       campervans.campers = [...campervans.campers, ...payload];
      //     } else {
      //       campervans.campers = payload;
      //     }
      //     campervans.currentPage = campervans.currentPage + 1;
      //   }
      // )
      // .addCase(deleteContact.fulfilled, ({ contacts }, { payload }) => {
      //   contacts.isLoading = false;
      //   contacts.items = contacts.items.filter(item => item.id !== payload.id);
      // })
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const campervanReducer = campervanSlice.reducer;
export const {
  updateLocationFilter,
  addToolsFilter,
  removeToolsFilter,
  updateFavorites,
  updateCurrentPage,
  updateCurrentCamper,
  updateActiveTab,
} = campervanSlice.actions;
