import { combineReducers } from 'redux';
import { SET_RECIPES } from '../actions';

function recipes(state , action) {
    if (typeof state === 'undefined') {
        return [];
    }
    
    switch(action.type) {
        case SET_RECIPES:
            return action.items.length !== 0 ? action.items : [];
        default:
            return state;
    }
}

const rootReducer = combineReducers({ recipes});

export default rootReducer;