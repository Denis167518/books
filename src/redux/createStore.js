import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducers from './reducers';

export default configureStore({
    reducer: reducers,
    middleware: [...getDefaultMiddleware()],
    devTools: process.env.NODE_ENV === 'development'
});

