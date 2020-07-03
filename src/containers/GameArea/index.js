import React, { Component } from 'react';
import "./style.css";
import SettingsMenu from "../../components/SettingsMenu";
import Grid from "../../components/Grid";
import Message from "../../components/Message";
import {connect} from 'react-redux';

import {
    // loadWinners,
    loadModes,
    setMode
} from '../../actions';

class GameArea extends Component {

    componentDidMount = async () => {
        await this.props.loadModes();
    };

    render() {

        const modes = [];
        for (let mode in this.props.modes) {
            modes.push(mode);
        }

        let message = "Please, select game mode to start";
        if (Object.keys(this.props.modeSettings).length) {
            message = "Enter the name and press Play";
        }

        return (
            <div className="game-area col-12 col-xl-7 text-center">
                <h3>Game area</h3>
                <SettingsMenu
                modes={modes}
                setMode={this.props.setCurrentMode}
                />
                <Message
                text={message}
                />
                <Grid
                size={this.props.modeSettings.field}
                />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        modes: store.game.modes,
        modeSettings: store.game.currentMode,
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

    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameArea);