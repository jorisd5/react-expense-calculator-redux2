import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCost } from '../actions/index';

class CostsShow extends Component {
  componentWillMount() {
    if (!this.props.cost) {
      this.props.fetchCost(this.props.match.params.id);
    }
  }

  renderForm(cost) {
    const privateCost = (cost.type === 'Private');
    const professionalCost = (cost.type === 'Professional');
    const creationDate = new Date(cost.createdAt);
    return (
      <form>
        <div className="form-group">
          <label>Amount:</label>
          <input type="text" className="form-control" id="description" value={cost.amount}  disabled="true" />
        </div>
        <div className="form-group">
          <label>Source:</label>
          <input type="text" className="form-control" id="description" value={cost.source}  disabled="true" />
        </div>
        <div className="form-group">
          <label>Id:</label>
          <input type="text" className="form-control" id="description" value={cost.id}  disabled="true" />
        </div>
        <div className="form-group">
          <label>Registration time:</label>
          <input type="text" className="form-control" id="description" value={creationDate.toLocaleString(this.props.languageLocale)}  disabled="true" />
        </div>
        <div className="form-group">
          <label>Type:</label>
          <div className="clear"></div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Private" checked={privateCost} />
            <label className="form-check-label" htmlFor="inlineRadio1">Private</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Professional" checked={professionalCost} />
            <label className="form-check-label" htmlFor="inlineRadio2">Professional</label>
          </div>
        </div>


        <input type="submit" value="Submit" />
      </form>
    );
  }

  render() {
    let cost = this.props.cost;
    if (!cost) {
      cost = this.props.costFromDb;
      if (!cost) {
        return (<p>No cost found.</p>);
      }
    }
    return (
      <div className="thin-container">
        <div className="first-row">
          <h3>Costs</h3>
          <Link to="/costs/new">
            <i className="fas fa-arrow-left" />
          </Link>
          <h2>{cost.description}</h2>
          <Link to="/costs/new">
            <i className="fas fa-arrow-right" />
          </Link>
          <Link className="btn-expense" to="/">
            <span>Home - costs current month</span>
          </Link>
        </div>
        <div className="listing-container">
          {this.renderForm(cost)}
        </div>
      </div>
    );
  }
}

// TODO: refactor duplicate id from params
function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    languageLocale: state.languageLocale,
    costFromDb: state.costFromDb,
    idFromUrl: parseInt(ownProps.match.params.id, 10),
    cost: state.costsMonth.find(c => c.id === parseInt(ownProps.match.params.id, 10)),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CostsShow);
