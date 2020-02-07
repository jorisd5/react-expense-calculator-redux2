import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCosts } from '../actions/index';

class CostsIndex extends Component {
  componentWillMount() {
    console.log(this.props.monthFromUrl);
  }

  renderCosts() {

  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Costs</h3>
          <Link to="/costs/new">
            <i className="fas fa-arrow-left" />
          </Link>
          <h2>Test_Month</h2>
          <Link to="/costs/new">
            <i className="fas fa-arrow-right" />
          </Link>
          <Link className="btn-expense" to="/costs/new">
            <span>Let&apos;s add an expense.</span>
          </Link>
        </div>
        {this.renderCosts()}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    costs: state.costs,
    monthName: state.monthName,
    monthFromUrl: parseInt(ownProps.monthFromParams, 10)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CostsIndex);
