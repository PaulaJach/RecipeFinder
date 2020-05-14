import { combineReducers } from 'redux';
import { SET_RECIPES, FAVOURITE_RECIPE } from '../actions';

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

function favouriteRecipes(state, action) {
    if (typeof state === 'undefined') {
        return [];
    }

    switch(action.type) {
        case FAVOURITE_RECIPE:
            state = [...state, action.recipe];
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ recipes, favouriteRecipes});

export default rootReducer;