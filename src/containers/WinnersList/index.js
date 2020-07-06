import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';

import {
  loadWinners,
} from '../../actions';
import List from '../../components/List';

class WinnersList extends Component {
  componentDidMount() {
    this.props.loadWinners();
  }

  render() {
    return (
            <div className="winners-list col-12 col-xl-5">
                <h3>Leader Board (last 10)</h3>
                <List list={this.props.winnersList} />
            </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    winnersList: store.game.winnersList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadWinners: () => {
    dispatch(loadWinners());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WinnersList);
