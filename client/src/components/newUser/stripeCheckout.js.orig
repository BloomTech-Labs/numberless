import React, { Component } from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe,
} from 'react-stripe-elements';
import axios from 'axios';

import './stripecheckout.css'

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (token) =>
  axios.post(SERVER_URL,
    {
      description: 'testcharge',
      source: token.id,
      currency: 'usd',
      amount: 100
    })
    .then(successPayment)
    .catch(errorPayment);

class _StripeCheckout extends Component {
  handleSubmit = ev => {
    ev.preventDefault();
    this.props.stripe.createToken().then(payload => {
      onToken(payload.token);
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="white">
          Card number
          <CardNumberElement/>
        </label>
        <label className="white">
          Expiration date
          <CardExpiryElement/>
        </label>
        <label className="white">
          CVC
          <CardCVCElement/>
        </label>
        <label className="white">
          Postal code
          <PostalCodeElement/>
        </label>
        <button>Done</button>
      </form>
    );
  }
}
const StripeCheckout = injectStripe(_StripeCheckout);

export default StripeCheckout;