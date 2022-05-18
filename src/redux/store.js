import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import postsReducer from './postsRedux';
import modalReducer from './showModalRedux';
import categoriesReducer from './categoriesRedux';

const subreducers = {
  posts: postsReducer,
  modal: modalReducer,
  categories: categoriesReducer,
};

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;