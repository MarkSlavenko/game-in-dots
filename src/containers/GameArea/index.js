import React, { Component } from 'react';
import "./style.css";
import SettingsMenu from "../../components/SettingsMenu";
import Grid from "../../components/Grid";
import Message from "../../components/Message";
// import {connect} from 'react-redux';

// import {
//     loadWinners,
// } from '../../actions';

class GameArea extends Component {

    // componentDidMount = async () => {
    //
    // };

    render() {
        return (
            <div className="game-area col-12 col-lg-7 text-center">
                <h3>Game area</h3>
                <SettingsMenu/>
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

// const mapStateToProps = store => {
//     return {
//         winnersList: store.game.winnersList,
//     }
// };
//
// const mapDispatchToProps = dispatch => {
//     return ({
//         loadWinners: () => {
//             dispatch(loadWinners())
//         },
//     })
// };

export default GameArea;