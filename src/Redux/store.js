import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoReducer from './ClientSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['clients'],
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
    reducer: {
        clientList: persistedReducer,
    },
});

export const persistor = persistStore(store);