import React, { Component } from 'react';
import "./style.css";
import SettingsMenu from "../../components/SettingsMenu";
import Grid from "../../components/Grid";
import Message from "../../components/Message";
import {connect} from 'react-redux';

import {
    loadModes,
    setMode,
    setMessage,
    startGame
} from '../../actions';

class GameArea extends Component {

    componentDidMount = () => {
        this.props.loadModes();
        this.props.setMessage("Please, select game mode");
    };

    render() {
        const modes = [];
        for (let mode in this.props.modes) {
            modes.push(mode);
        }

        return (
            <div className="game-area col-12 col-xl-7 text-center">
                <h3>Game area</h3>
                <SettingsMenu
                    modes={modes}
                    setMode={this.props.setCurrentMode}
                    startGame={this.props.startGame}
                />
                <Message
                    text={this.props.message}
                />
                <Grid
                    size={this.props.modeSettings.field}
                    squaresStatus={this.props.squaresStatus}
                />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        modes: store.game.modes,
        modeSettings: store.game.currentMode,
        message: store.game.message,
        squaresStatus: store.game.squaresStatus
    }
};

const mapDispatchToProps = dispatch => {
    return ({
        loadModes: () => {
            dispatch(loadModes())
        },
        setCurrentMode: (mode) => {
            dispatch(setMode(mode))
        },
        setMessage: (message) => {
            dispatch(setMessage(message))
        },
        startGame: (name) => {
            dispatch(startGame(name))
        }
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameArea);