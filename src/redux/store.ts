import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const store = configureStore({ reducer: rootReducer, middleware: [thunk] });
const persistor = persistStore(store);

export { store, persistor };
