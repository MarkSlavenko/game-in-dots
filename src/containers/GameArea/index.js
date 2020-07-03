import React, { Component } from 'react';
import "./style.css";
import SettingsMenu from "../../components/SettingsMenu";
import Grid from "../../components/Grid";
import Message from "../../components/Message";
import {connect} from 'react-redux';

import {
    // loadWinners,
    loadModes
} from '../../actions';

class GameArea extends Component {

    componentDidMount = async () => {
        this.props.loadModes();
    };

    render() {

        const modes = [];
        for (let mode in this.props.modes) {
            modes.push(mode);
        }

        return (
            <div className="game-area col-12 col-lg-7 text-center">
                <h3>Game area</h3>
                <SettingsMenu
                modes={modes}/>
                <Message
                text="Test message"
                />
                <Grid
                size={5}
                />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        modes: store.game.modes,
    }
};

const mapDispatchToProps = dispatch => {
    return ({
        loadModes: () => {
            dispatch(loadModes())
        },
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameArea);