import React, { Component } from 'react';
import {
  Elements,
} from 'react-stripe-elements';

import StripeCheckout from './stripeCheckout';

import './newUser.css'

class NewUser extends Component {
  constructor() {
    super();
    this.state = {
      elementFontSize: window.innerWidth < 450 ? '14px' : '18px',
    };
    window.addEventListener('resize', () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
        this.setState({elementFontSize: '14px'});
      } else if (
        window.innerWidth >= 450 &&
        this.state.elementFontSize !== '18px'
      ) {
        this.setState({elementFontSize: '18px'});
      }
    });
  }

  render() {
    const {elementFontSize} = this.state;
    return (
      <div className="checkout">
        <Elements>
          <StripeCheckout fontSize={elementFontSize} />
        </Elements>
      </div>
    );
  }
}

export default NewUser;