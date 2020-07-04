import { combineReducers } from 'redux';

import {
    SET_WINNERS_LIST,
    SET_CURRENT_MODE,
    SET_MODES,
    SET_MESSAGE,
    SET_GAME_STATUS,
    SET_PLAYER_NAME
} from '../constants/index.js';



export const initialState = {
    winnersList: [],
    currentMode: {},
    modes: {},
    message: "",
    gameIsOn: false,
    playerName: ""
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
        case SET_MESSAGE :
            return {...store,
                message: action.message
            };
        case SET_GAME_STATUS :
            return {...store,
                gameIsOn: action.status
            };
        case SET_PLAYER_NAME :
            return {...store,
                playerName: action.name
            };
        default :
            return store;
    }
};



export const rootReducer = combineReducers({
    game: Game
});