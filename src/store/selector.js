export const selectCampers = state => state.campervanrent.campervans.campers;
export const selectLoading = state => state.campervanrent.campervans.loading;
export const selectError = state => state.campervanrent.campervans.error;
export const selectLoadMore = state => state.campervanrent.campervans.loadMore;
export const selectCurrentPage = state =>
  state.campervanrent.campervans.currentPage;

export const selectFavorites = state => state.campervanrent.favorites;
export const selectLocationFilter = state => state.campervanrent.locationFilter;
export const selectToolsFilter = state => state.campervanrent.toolsFilter;
export const selectCurrentCamper = state => state.campervanrent.currentCamper;

// export const selectFilter = state => state.phonebook.filter;
