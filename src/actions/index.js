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
  SET_ARRAY_FOR_GAME,
} from '../constants';

export const setWinnersList = (list) => ({
  type: SET_WINNERS_LIST,
  list,
});

export const setCurrentMode = (mode) => ({
  type: SET_CURRENT_MODE,
  mode,
});

export const setModes = (modes) => ({
  type: SET_MODES,
  modes,
});

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  message,
});

export const setGameStatus = (status) => ({
  type: SET_GAME_STATUS,
  status,
});

export const setPlayerPoints = (points) => ({
  type: SET_PLAYER_POINTS,
  points,
});

export const setComputerPoints = (points) => ({
  type: SET_COMPUTER_POINTS,
  points,
});

export const setPlayerName = (name) => ({
  type: SET_PLAYER_NAME,
  name,
});

export const setCurrentSquare = (currentSquare) => ({
  type: SET_CURRENT_SQUARE,
  currentSquare,
});

export const setArrayForGame = (array) => ({
  type: SET_ARRAY_FOR_GAME,
  array,
});

export const loadWinners = () => (dispatch) => {
  fetch('https://starnavi-frontend-test-task.herokuapp.com/winners')
    .then((response) => response.json(),
      (error) => console.log('Error getting list of winners!', error))
    .then((list) => {
      let lastWinners = [];
      if (list) {
        if (list.length >= 10) {
          lastWinners = list.slice(list.length - 10, list.length).reverse(); // take last 10 winners
        } else {
          lastWinners = list.slice().reverse();
        }
      }
      dispatch(setWinnersList(lastWinners));
    });
};

export const loadModes = () => (dispatch) => {
  fetch('https://starnavi-frontend-test-task.herokuapp.com/game-settings')
    .then((response) => response.json(),
      (error) => console.log('Error getting list of modes!', error))
    .then((modes) => {
      dispatch(setModes(modes));
    });
};

export const setMode = (mode) => (dispatch, getState) => {
  const modeData = getState().game.modes[mode];
  dispatch(setGameStatus(false));
  dispatch(setCurrentMode(modeData));
  dispatch(setCurrentSquare(-1)); // reset all squares to white color
  dispatch(setMessage('Enter your name and play'));
};

const setRandomSquare = () => (dispatch, getState) => {
  const newArrayForGame = getState().game.arrayForGame;
  const randomIndex = Math.floor(Math.random() * newArrayForGame.length);
  dispatch(setCurrentSquare(newArrayForGame.splice(randomIndex, 1)[0]));
  dispatch(setArrayForGame(newArrayForGame));
};

export const startGame = (name) => async (dispatch, getState) => {
  dispatch(setCurrentSquare(-1)); // reset all squares to white color
  dispatch(setComputerPoints(0));
  dispatch(setPlayerPoints(0));
  dispatch(setPlayerName(name));
  dispatch(setMessage('Get ready!'));

  const numberOfSquares = getState().game.currentMode.field ** 2;
  dispatch(setArrayForGame([...Array(numberOfSquares).keys()]));
  await new Promise((resolve) => setTimeout(resolve, 1500));
  dispatch(setCurrentSquare(-1)); // reset all squares to white color
  dispatch(setGameStatus(true));
  dispatch(setMessage('The game is on!'));
  dispatch(setRandomSquare());
};

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const addWinner = (name) => (dispatch) => {
  dispatch(setCurrentSquare(null));
  const now = new Date();
  const prettyDateTime = `${
    (`0${now.getHours()}`).slice(-2)}:${(`0${now.getMinutes()}`).slice(-2)};
            ${(`0${now.getDate()}`).slice(-2)}
            ${monthNames[now.getMonth()]}
            ${now.getFullYear()
}`.replace(/\s+/g, ' ');
  const winnerObject = { 'winner': name, 'date': prettyDateTime };
  fetch('https://starnavi-frontend-test-task.herokuapp.com/winners',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(winnerObject),
    })
    .then(setTimeout(() => dispatch(loadWinners()), 1500));
};

export const addPoint = (target) => (dispatch, getState) => {
  const numberOfPointsToWin = Math.ceil((getState().game.currentMode.field ** 2) / 2);
  let { computerPoints } = getState().game;
  let { playerPoints } = getState().game;

  if (target === 'computer') {
    dispatch(setComputerPoints(++computerPoints));
  } else if (target === 'player') {
    dispatch(setPlayerPoints(++playerPoints));
  }

  if (computerPoints >= numberOfPointsToWin) {
    dispatch(setGameStatus(false));
    dispatch(setMessage('Computer has won :('));
    dispatch(addWinner('Computer'));
  } else if (playerPoints >= numberOfPointsToWin) {
    dispatch(setGameStatus(false));
    dispatch(setMessage(`${getState().game.playerName} has won!!!`));
    dispatch(addWinner(getState().game.playerName));
  } else if (getState().game.gameIsOn) {
    dispatch(setRandomSquare());
  } else {
    dispatch(setCurrentSquare(null));
    dispatch(setGameStatus(false));
  }
};
