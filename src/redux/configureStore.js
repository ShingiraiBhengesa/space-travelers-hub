import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketsReducer, { getRocketsFromAPI } from './Rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(getRocketsFromAPI());
export default store;
