import {
    SET_WINNERS_LIST,
    SET_CURRENT_MODE,
    SET_MODES
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
        dispatch(setCurrentMode(modeData));
    }
};