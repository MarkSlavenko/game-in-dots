import React, { Component } from 'react';
import "./style.css";
import {connect} from 'react-redux';

import {
    loadWinners,
} from '../../actions';

class WinnersList extends Component {

    componentDidMount = async () => {
        this.props.loadWinners();
    };

    render() {
        return (
            <div className="winners-list">WinnersList</div>
        )
    }
}

const mapStateToProps = store => {
    return {
        winnersList: store.game.winnersList,
    }
};

const mapDispatchToProps = dispatch => {
    return ({
        loadWinners: () => {
            dispatch(loadWinners())
        },
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WinnersList);