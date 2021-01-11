import axios from 'axios';
import * as actions from './types';

// GET TODOS
export const getTodos = () => async dispatch => {
  const res = await axios.get('/api/todo-list/');
  dispatch({
    type: actions.GET_TODOS,
    payload: res.data
  });
};

// GET CATEGoRIES
export const getCategories = () => async dispatch => {
    const res = await axios.get('/api/category-list/');
    dispatch({
      type: actions.GET_CATEGORIES,
      payload: res.data
    });
  };

  // ADD CATEGORY
  export const addCategories = (payload) => async dispatch => {
    await axios.post('http://localhost:8000/api/category-create/',{category: payload})
                    .then((response) => {
                        dispatch(getCategories());
                        console.log(response);
                    }, (error) => {
                        console.log(error);
                    });
  };

  // REMOVE TODO
  export const removeTodo = (payload) => async dispatch => {
    await axios.delete(`http://localhost:8000/api/todo-delete/${payload}`)
                    .then((response) => {
                        dispatch(getTodos());
                        console.log(response);
                    }, (error) => {
                        console.log(error);
                    });
  };