import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';

import StripeForm from './stripeForm';

import './newUser.css'

class NewUser extends Component {
  constructor() {
    super();
    this.state = {
      elementFontSize: window.innerWidth < 450 ? '14px' : '18px',
      userPledge: null,
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

  componentWillMount(){
    if (this.props.userPledge) {
      this.setState(() => ({ userPledge: this.props.userPledge }));
    } else this.setState(() => ({ userPledge: 50 }));
  }

  render() {
    console.log(this.state.userPledge);
    const {elementFontSize} = this.state;
    return (
      <div className="Checkout">
        <Elements>
          <StripeForm fontSize={elementFontSize} userPledge={this.state.userPledge} />
        </Elements>
      </div>
    );
  }
}

export default NewUser;