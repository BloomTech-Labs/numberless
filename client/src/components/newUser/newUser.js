import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';

import StripeForm from './stripeForm';

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
    if (this.props.userPledge) {
      this.setState(() => ({ userPledge: this.props.userPledge }));
    } else this.setState(() => ({ userPledge: 50 }));
  }

  render() {
    return (
      <div className="Checkout">
        <Elements>
          <StripeForm userPledge={this.state.userPledge} history={this.props.history} />
        </Elements>
      </div>
    );
  }
}

export default NewUser;