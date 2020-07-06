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
    this.props.loadModes();
    this.props.setMessage('Please, select game mode');
  }

  render() {
    const modes = [];
    for (const mode in this.props.modes) {
      modes.push(mode);
    }

    return (
      <div className="game-area col-12 col-xl-7 text-center">
        <h3>Game area</h3>
        <SettingsMenu
          modes={modes}
          gameIsOn={this.props.gameIsOn}
          setMode={this.props.setCurrentMode}
          startGame={this.props.startGame}
        />
        <Message
          text={this.props.message}
        />
        <Grid
          size={this.props.modeSettings.field}
          delay={this.props.modeSettings.delay}
          currentSquare={this.props.currentSquare}
          addPoint={this.props.addPoint}
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
