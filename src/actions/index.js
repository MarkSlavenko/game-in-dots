import {
    SET_WINNERS_LIST,
    SET_CURRENT_MODE,
    SET_MODES,
    SET_MESSAGE,
    SET_GAME_STATUS,
    SET_PLAYER_NAME,
    SET_PLAYER_POINTS,
    SET_COMPUTER_POINTS,
    SET_CURRENT_SQUARE
} from '../constants/index.js';

export const setWinnersList = list => {
    return({
        type: SET_WINNERS_LIST,
        list
    })
};

export const setCurrentMode = mode => {
    return({
        type: SET_CURRENT_MODE,
        mode
    })
};

export const setModes = modes => {
    return({
        type: SET_MODES,
        modes
    })
};

export const setMessage = message => {
    return({
        type: SET_MESSAGE,
        message
    })
};

export const setGameStatus = status => {
    return({
        type: SET_GAME_STATUS,
        status
    })
};

export const setPlayerPoints = points => {
    return({
        type: SET_PLAYER_POINTS,
        points
    })
};

export const setComputerPoints = points => {
    return({
        type: SET_COMPUTER_POINTS,
        points
    })
};

export const setPlayerName = name => {
    return({
        type: SET_PLAYER_NAME,
        name
    })
};

export const setCurrentSquare = currentSquare => {
    return({
        type: SET_CURRENT_SQUARE,
        currentSquare
    })
};


export const loadWinners = () => {
    return (dispatch) => {
        fetch("https://starnavi-frontend-test-task.herokuapp.com/winners")
            .then(response => response.json(),
                error => console.log('Error getting list of winners!', error)
            )
            .then((list) => {
                let lastWinners;
                if (list.length >= 10) {
                    lastWinners = list.slice(list.length-10, list.length).reverse(); // take 10 last winners
                } else {
                    lastWinners = list.slice().reverse();
                }
                dispatch(setWinnersList(lastWinners));
            });
    }
};

export const loadModes = () => {
    return (dispatch) => {
        fetch("https://starnavi-frontend-test-task.herokuapp.com/game-settings")
            .then(response => response.json(),
                error => console.log('Error getting list of modes!', error)
            )
            .then((modes) => {
                dispatch(setModes(modes));
            });
    }
};

export const setMode = (mode) => {
    return (dispatch, getState) => {
        const modeData = getState().game.modes[mode];
        dispatch(setGameStatus(false));
        dispatch(setCurrentMode(modeData));
        dispatch(setMessage("Enter the name and press \"Play\""));
    }
};

export const startGame = (name) => {
    return (dispatch) => {
        dispatch(setPlayerName(name));
        dispatch(setComputerPoints(0));
        dispatch(setPlayerPoints(0));
        dispatch(setGameStatus(true));
        dispatch(setCurrentSquare(5));
        dispatch(setMessage("The game is on!"));
    }
};

export const addPoint = (target) => {
    return (dispatch, getState) => {
        if (target === "computer") {
            dispatch(setComputerPoints(getState().game.computerPoints + 1));
        } else {
            dispatch(setPlayerPoints(getState().game.playerPoints + 1));
        }
    }
};