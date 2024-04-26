import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { campervanReducer } from './slice';

const persistConfig = {
  key: 'favorites_ids',
  storage,
  whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, campervanReducer);

export const reducer = {
  campervanrent: persistedReducer,
};
