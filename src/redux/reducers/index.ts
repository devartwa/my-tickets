import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from './userReducer';

const persistUser = {
  key: 'persistRoot',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  userReducer: persistReducer(persistUser, userReducer),
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };
