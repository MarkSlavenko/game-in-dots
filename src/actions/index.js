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
    return (dispatch, getState) => {
        fetch("https://starnavi-frontend-test-task.herokuapp.com/winners")
            .then(response => response.json(),
                error => console.log('Error getting list of winners!', error)
            )
            .then((list) => {
                let lastWinners;
                if (list.length >= 10) {
                    lastWinners = list.slice(list.length-10, list.length).reverse(); // take 10 last winners
                } else {
                    lastWinners = list.slice();
                }
                dispatch(setWinnersList(lastWinners));
            });
    }
};

export const loadModes = () => {
    return (dispatch, getState) => {
        fetch("https://starnavi-frontend-test-task.herokuapp.com/game-settings")
            .then(response => response.json(),
                error => console.log('Error getting list of modes!', error)
            )
            .then((modes) => {
                dispatch(setModes(modes));
            });
    }
};