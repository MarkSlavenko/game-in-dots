import { combineReducers } from 'redux';

import {
    SET_WINNERS_LIST,
    SET_CURRENT_MODE,
    SET_MODES,
    SET_MESSAGE,
    SET_GAME_STATUS,
    SET_PLAYER_NAME,
    SET_PLAYER_POINTS,
    SET_COMPUTER_POINTS,
    SET_CURRENT_SQUARE,
    SET_ARRAY_FOR_GAME
} from '../constants/index.js';



export const initialState = {
    winnersList: [],
    currentMode: {},
    modes: {},
    message: "",
    gameIsOn: false,
    playerName: "",
    currentSquare: null,
    playerPoints: 0,
    computerPoints: 0,
    arrayForGame: []
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
        case SET_PLAYER_POINTS :
            return {...store,
                playerPoints: action.points
            };
        case SET_COMPUTER_POINTS :
            return {...store,
                computerPoints: action.points
            };
        case SET_CURRENT_SQUARE :
            return {...store,
                currentSquare: action.currentSquare
            };
        case SET_ARRAY_FOR_GAME :
            return {...store,
                arrayForGame: action.array
            };
        default :
            return store;
    }
};



export const rootReducer = combineReducers({
    game: Game
});