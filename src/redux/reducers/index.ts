import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from './userReducer';
import eventsReducer from './eventsReducer';

const persistInfo = {
  key: 'persistRoot',
  storage: AsyncStorage,
  whitelist: ['user', 'events'],
};

const rootReducer = combineReducers({
  userReducer: persistReducer(persistInfo, userReducer),
  eventsReducer: persistReducer(persistInfo, eventsReducer),
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };
