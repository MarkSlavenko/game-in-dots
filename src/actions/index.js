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
        dispatch(setMessage("Enter your name and play"));
    }
};

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const startGame = (name) => {
    return async (dispatch, getState) => {
        dispatch(setPlayerName(name));
        dispatch(setComputerPoints(0));
        dispatch(setPlayerPoints(0));
        dispatch(setGameStatus(true));
        dispatch(setMessage("The game is on!"));

        const numberOfSquares = Math.pow(getState().game.currentMode.field, 2);
        const timeDelay = getState().game.currentMode.delay;
        const numberOfPointsToWin = Math.ceil(numberOfSquares/2);

        const arrayForGame = [...Array(numberOfSquares).keys()];
        for (let i = 0; i < numberOfSquares; i++) {
            let randomIndex = Math.floor(Math.random() * arrayForGame.length);
            await timeout(timeDelay);
            if (getState().game.computerPoints >= numberOfPointsToWin) {
                dispatch(setGameStatus(false));
                dispatch(setMessage("Computer has won :("));
                dispatch(addWinner("Computer"));
                break;
            } else if (getState().game.playerPoints >= numberOfPointsToWin) {
                dispatch(setGameStatus(false));
                dispatch(setMessage(`${getState().game.playerName} has won !!!`));
                dispatch(addWinner(getState().game.playerName));
                break;
            }
            if (!getState().game.gameIsOn) break;
            dispatch(setCurrentSquare(arrayForGame.splice(randomIndex, 1)[0]));
        }

        dispatch(setCurrentSquare(null));
        dispatch(setGameStatus(false));
    }
};

export const addPoint = (target) => {
    return (dispatch, getState) => {
        let computerPoints = getState().game.computerPoints;
        let playerPoints =  getState().game.playerPoints;
        if (target === "computer") {
            dispatch(setComputerPoints(++computerPoints));
        } else if (target === "player") {
            dispatch(setPlayerPoints(++playerPoints));
        }
    }
};

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const addWinner = (name) => {
    return (dispatch) => {
    const now = new Date();
    const prettyDateTime = `${now.getHours()}:${now.getMinutes()}; ${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
    const winnerObject = {"winner": name, "date":prettyDateTime};
    fetch("https://starnavi-frontend-test-task.herokuapp.com/winners",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(winnerObject)
    })
        .then(setTimeout(() => dispatch(loadWinners()), 1000));
    }
};