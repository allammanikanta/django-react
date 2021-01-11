import _ from 'lodash';
import { GET_TODOS, GET_CATEGORIES } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case GET_TODOS:
            return Object.assign({}, state, {
                ..._.mapKeys(action.payload, 'id'),
              })
            
        default:
            return state;
    }
};

export function categories(state = [], action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return [...action.payload]
        default:
            return state;
    }
}