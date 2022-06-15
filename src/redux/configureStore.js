import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './missions/missions';

// Combine all the reducers into one place
const rootReducer = combineReducers({
  missions: missionsReducer,
});

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk, logger),
);

export default store;

export { rootReducer };
