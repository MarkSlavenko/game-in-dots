import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import SettingsMenu from '../../components/SettingsMenu';
import Grid from '../../components/Grid';
import Message from '../../components/Message';

import {
  loadModes,
  setMode,
  setMessage,
  startGame,
  addPoint,
} from '../../actions';

class GameArea extends Component {
  componentDidMount() {
    const {
      loadModes,
      setMessage,
    } = this.props;

    loadModes();
    setMessage('Please, select game mode');
  }

  render() {
    const {
      modes,
      modeSettings,
      message,
      currentSquare,
      gameIsOn,
      addPoint,
      setCurrentMode,
      startGame,
    } = this.props;

    const modesArray = Object.keys(modes);

    return (
      <div className="game-area col-12 col-xl-7 text-center">
        <h3>Game area</h3>
        <SettingsMenu
          modes={modesArray}
          gameIsOn={gameIsOn}
          setMode={setCurrentMode}
          startGame={startGame}
        />
        <Message
          text={message}
        />
        <Grid
          size={modeSettings.field}
          delay={modeSettings.delay}
          currentSquare={currentSquare}
          addPoint={addPoint}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  modes: store.game.modes,
  modeSettings: store.game.currentMode,
  message: store.game.message,
  currentSquare: store.game.currentSquare,
  gameIsOn: store.game.gameIsOn,
});

const mapDispatchToProps = (dispatch) => ({
  loadModes: () => {
    dispatch(loadModes());
  },
  setCurrentMode: (mode) => {
    dispatch(setMode(mode));
  },
  setMessage: (message) => {
    dispatch(setMessage(message));
  },
  startGame: (name) => {
    dispatch(startGame(name));
  },
  addPoint: (target) => {
    dispatch(addPoint(target));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameArea);
