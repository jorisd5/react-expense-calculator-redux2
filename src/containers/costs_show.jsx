import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCost } from '../actions/index';

class CostsShow extends Component {
  componentWillMount() {
    if (!this.props.cost) {
      this.props.fetchCost(this.props.match.params.id);
      console.log(this.props.match.params.id);
      console.log(this.props.costFromDb);
    }
  }

  // render() {
  //   return (
  //     <div className ="thin-container">
  //       <div className="first-row">
  //         <h3>Costs</h3>
  //         <Link to="/costs/new">
  //           <i className="fas fa-arrow-left" />
  //         </Link>
  //         <h2>Cost
  //           {this.props.cost.id} -
  //         </h2>
  //         <Link to="/costs/new">
  //           <i className="fas fa-arrow-right" />
  //         </Link>
  //         <Link className="btn-expense" to="/">
  //           <span>Home - costs current month</span>
  //         </Link>
  //       </div>

  //       <div className="cost-item">
  //         <h3>{this.props.cost.source}</h3>
  //         <h5>{this.props.cost.description}</h5>
  //         <p>{this.props.cost.type}</p>
  //         <p>{this.props.cost.amount} €</p>
  //         <p>{this.props.cost.createdAt}</p>
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    let cost = this.props.cost;
      if (!cost) {
        cost = this.props.costFromDb;
        return this.renderCost(cost);
      }
      else {
       return this.renderCost(cost);
      }
  }

  renderCost(cost) {
    return (
      <div className="thin-container">
        <div className="first-row">
          <h3>Costs</h3>
          <Link to="/costs/new">
            <i className="fas fa-arrow-left" />
          </Link>
          <h2>Cost
            cost.id -
          </h2>
          <Link to="/costs/new">
            <i className="fas fa-arrow-right" />
          </Link>
          <Link className="btn-expense" to="/">
            <span>Home - costs current month</span>
          </Link>
        </div>
        <form>
          <div className="form-group">
          <label><h5>Description:</h5></label>
          <input type="text" className="form-control" id="description" value={ `${cost.id}` }  disabled="true" />

          </div>
          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    costFromDb: state.costFromDb,
    idFromUrl: parseInt(ownProps.match.params.id, 10),
    cost: state.costsMonth.find(c => c.id === parseInt(ownProps.match.params.id, 10)),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CostsShow);
