import { combineReducers } from 'redux';

import {
    SET_WINNERS_LIST,
    SET_CURRENT_MODE,
    SET_MODES
} from '../constants/index.js';



export const initialState = {
    winnersList: [],
    currentMode: {},
    modes: {}
};


export const Game = (store = initialState, action) => {
    switch (action.type) {
        case SET_WINNERS_LIST :
            return {...store,
                winnersList: action.list
            };
        case SET_CURRENT_MODE :
            return {...store,
                currentMode: action.mode
            };
        case SET_MODES :
            return {...store,
                modes: action.modes
            };
        default :
            return store;
    }
};



export const rootReducer = combineReducers({
    game: Game
});