import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CostsShow extends Component {
  componentWillMount() {
  }

  render() {
    if (!this.props.cost) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div className="first-row">
          <h3>Costs</h3>
          <Link to="/costs/new">
            <i className="fas fa-arrow-left" />
          </Link>
          <h2>Cost
            {this.props.cost.id} -
          </h2>
          <Link to="/costs/new">
            <i className="fas fa-arrow-right" />
          </Link>
          <Link className="btn-expense" to="/">
            <span>Home - costs current month</span>
          </Link>
        </div>

        <div className="cost-item">
          <h3>{this.props.cost.source}</h3>
          <h5>{this.props.cost.description}</h5>
          <p>{this.props.cost.type}</p>
          <p>{this.props.cost.amount} €</p>
          <p>{this.props.cost.createdAt}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    cost: state.costsMonth.find(c => c.id === parseInt(ownProps.match.params.id, 10))
  };
}

export default connect(mapStateToProps)(CostsShow);
