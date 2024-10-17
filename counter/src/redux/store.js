import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer';
import themeReducer from './reducers/themeReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;