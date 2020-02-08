import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCostsMonth } from '../actions/index';

class CostsIndex extends Component {
  componentWillMount() {
    this.props.fetchCostsMonth(this.props.monthFromUrl);
  }

  renderCosts = () => {
    return this.props.costsMonth.map((cost) => {
      return (
        <Link to={`/costs/${cost.id}`} key={cost.id}>
          <div className="cost-item">
            <h3>{cost.description}</h3>
            <p>Total this month: {cost.amount} €</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Costs</h3>
          <Link to="/costs/new">
            <i className="fas fa-arrow-left" />
          </Link>
          <h2>{this.props.monthNames[(this.props.monthFromUrl) - 1]}</h2>
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
    costsMonth: state.costsMonth,
    monthNames: state.monthNames,
    monthFromUrl: parseInt(ownProps.monthFromParams, 10)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCostsMonth }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CostsIndex);
