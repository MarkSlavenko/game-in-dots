import {
    SET_WINNERS_LIST,
} from '../constants/index.js';

export const setWinnersList = list => {
    return({
        type: SET_WINNERS_LIST,
        list
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
