import { combineReducers } from 'redux';
import todos from './todos';
import { categories } from './todos';

export default combineReducers({
  todos,
  categories
});