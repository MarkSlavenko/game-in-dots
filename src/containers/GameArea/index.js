import React, { Component } from 'react';
import "./style.css";
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
            <div className="game-area col-12 col-md-6">GameArea</div>
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