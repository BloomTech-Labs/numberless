import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';

import StripeForm from './stripeForm';
import Loader from './loader';

import './newUser.css'

class NewUser extends Component {
  constructor() {
    super();
    this.state = {
      userPledge: null
    };
  }

  componentWillMount(){
    if (sessionStorage.getItem('loggedIn')) {
      this.props.history.push('voting');
    }
    if (this.props.location.state) {
      this.setState(() => ({ userPledge: this.props.location.state.userPledge }));
    }
  }

  onSubmit() {
    
  }

  render() {
    return (
      <div className="container">
        <Loader/>
        <img className="logo" src={require('../static/logo.png')} alt="Numberless" />
        <Elements>
          <StripeForm userPledge={this.state.userPledge} history={this.props.history} />
        </Elements>
      </div>
    );
  }
}

export default NewUser;