import storage from 'redux-persist/lib/storage';
import { campervanReducer } from './slice';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'favorites_ids',
  storage,
  whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, campervanReducer);

export const reducer = {
  campervanrent: persistedReducer,
};
