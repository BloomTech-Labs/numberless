import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

import './login.css'

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class Login extends Component {

  // The verifyUser function sends the info out to the server, where the password is checked against the 
  // encrypted password stored in the database

  verifyUser = (email, pass) => {
    const user = {email: email, password: pass};
    const activeUser = axios.post(`${SERVER_URL}/login/`, user);
    activeUser
      .then(returnedUser => {
        if (returnedUser.data.email) {
          sessionStorage.setItem('loggedIn', 'true')
          sessionStorage.setItem('userEmail', `${returnedUser.data.email}`);
          this.props.history.push('voting')
        }
      })
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="email" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="password" placeholder="password placeholder" />
        </FormGroup>
        <Button onClick={ () => {
          let email = document.getElementById('email').value;
          let pass = document.getElementById('password').value;
          this.verifyUser(email, pass); 
        }}>Sign In</Button>
        <Button onClick={ () => {
          this.props.history.push('newuser');
        }}>Sign Up</Button>
      </Form>
    );
  }
}

export default Login;