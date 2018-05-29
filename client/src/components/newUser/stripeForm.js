import React, { Component } from 'react';
import {
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe,
} from 'react-stripe-elements';
import axios from 'axios';

import './stripeform.css'

const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:3030';

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

class _StripeForm extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      userPledge: null,
      customerID: null,
      subscriptionID: null,
      voted: false,
    }
  }

  // the following function sets the user's pledge amount to the incoming prop from the pledge component

  componentDidMount(newProps){
    this.setState(() => ({ userPledge: this.props.userPledge }));
  }

  // the following code generates a stripe token when the form is submitted

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.stripe.createToken().then(payload => {
      this.onToken(payload.token)
    });
  };

  // the following code creates a new customer in the stripe database and updates the state with the returned data

  onToken = (token) => {
    axios.post(`${SERVER_URL}/create-stripe-customer`,
      {
        description: 'numberlesssetup',
        source: token.id,
        email: document.getElementById('email').value,
      })
      .then(createdCustomer => {
        this.setState(() => ({ 
          email: createdCustomer.data.email,
          customerID: createdCustomer.data.id,
          password: document.getElementById('pass').value,
        }));
        this.addSubscription();
      })
      .catch(errorPayment);
  };

  //the following code adds a subscription to the user's stripe billing

  addSubscription = () => {
    let product = null;
    if (this.state.userPledge === 50) {
      product = process.env.STRIPE_PLAN_50 || 'plan_Cwq75ozX5poOY2';
    } else if (this.state.userPledge === 25) {
      product = process.env.STRIPE_PLAN_25;
    } else {
      product = process.env.STRIPE_PLAN_10;
    }
    axios.post(`${SERVER_URL}/create-stripe-subscription`,
      {
        customer: this.state.customerID,
        items: [
          {
            plan: product,
          }
        ]
      })
      .then(createdSubscription => {
        this.setState(() => ({
          subscriptionID: createdSubscription.data.id,
        }));
        this.createUser();
      })
  }

  // the following code creates a new user in the numberless database

  createUser = () => {
    const {
      email,
      password,
      customerID,
      userPledge,
      subscriptionID,
      voted
    } = this.state;
    axios.post(`${SERVER_URL}/create-user`,
    {
      email: email,
      password: password,
      customerID: customerID,
      userPledge: userPledge,
      subscriptionID: subscriptionID,
      voted: voted
    })
    .then(createdUser => {
      console.log(createdUser);
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input className="stripeInput" id="email" />
        </label>
        <label>
          Password
          <input className="stripeInput" id="pass" />
        </label>
        <label>
          Subscription Info
          <CardElement className='stripeInput'/>
        </label>
        <button>Done</button>
      </form>
    );
  }
}
const StripeForm = injectStripe(_StripeForm);

export default StripeForm;