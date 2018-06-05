import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {
  CardElement,
  injectStripe,
} from 'react-stripe-elements';
import axios from 'axios';

import './stripeform.css'

const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:3030';

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
    console.log(this.props);
    this.setState(() => ({ userPledge: this.props.userPledge }));
  }

  // the following code generates a stripe token when the form is submitted

  handleSubmit = ev => {
    ev.preventDefault();
    console.log('handlesubmit fired');
    this.props.stripe.createToken().then(payload => {
      if (payload.token) {
        this.onToken(payload.token);
      }
    });
  };

  // the following code creates a new customer in the stripe database and updates the state with the returned data

  onToken = (token) => {
    console.log('ontoken fired')
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
      product = process.env.REACT_APP_STRIPE_PLAN_50;
    } 
    if (this.state.userPledge === 25) {
      product = process.env.REACT_APP_STRIPE_PLAN_25;
    } 
    else {
      product = process.env.REACT_APP_STRIPE_PLAN_10;
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

  // the following code creates a new user in the numberless database, then upon creation moves the user to the 
  // voting page, setting sessionStorage and a cookie

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
      if (createdUser.data._id) {
        sessionStorage.setItem('user', createdUser.data._id);
        sessionStorage.setItem('loggedIn', 'true');
        this.props.history.push('voting');
      }
    })
  }

  render() {
    return (
      <div className="formBox">
        <Form>
            <FormGroup>
              <Input className="input" type="email" name="email" id="email" placeholder="Email"/>
            </FormGroup>
            <FormGroup>
              <Input className="input" type="password" name="password" id="pass" placeholder="Password"/>
            </FormGroup>
            <CardElement className='stripeInput'/>
          <Button onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
const StripeForm = injectStripe(_StripeForm);

export default StripeForm;