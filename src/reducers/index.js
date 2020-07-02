import { combineReducers } from 'redux';

import {
    SET_WINNERS_LIST
} from '../constants/index.js';



export const initialState = {
    winnersList: [],
};


export const Game = (store = initialState, action) => {
    switch (action.type) {
        case SET_WINNERS_LIST :
            return {...store,
                winnersList: action.list
            }
        default :
            return store;
    }
};



export const rootReducer = combineReducers({
    game: Game
});