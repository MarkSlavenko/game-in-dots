import { combineReducers } from 'redux';

import {
    SET_WINNER_LIST
} from '../constants/index.js';



export const initialState = {
    winnersList: [],
};


export const Game = (store = initialState, action) => {
    switch (action.type) {
        default :
            return store;
    }
};



export const rootReducer = combineReducers({
    game: Game
});