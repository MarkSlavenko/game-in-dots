import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import List from '../../components/List';

import {
  loadWinners,
} from '../../actions';

class WinnersList extends Component {
  componentDidMount() {
    const {
      loadWinners,
    } = this.props;

    loadWinners();
  }

  render() {
    const {
      winnersList,
    } = this.props;

    return (
      <div className="winners-list col-12 col-xl-5">
        <h3>Leader Board (last 10)</h3>
        <List list={winnersList} />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  winnersList: store.game.winnersList,
});

const mapDispatchToProps = (dispatch) => ({
  loadWinners: () => {
    dispatch(loadWinners());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WinnersList);
