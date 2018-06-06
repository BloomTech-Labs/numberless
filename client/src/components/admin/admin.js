import React, { Component } from 'react';
import axios from 'axios';

import './admin.css'

const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:3030';

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      adminUsers: [],
      charities: []
    }
  }
  componentWillMount() {
    const user = axios.get(`${SERVER_URL}/users/${sessionStorage.getItem('user')}`);
    user.then(activeUser => {
      if (!activeUser.data.admin) {
        this.props.history.push('login');
      }
    })
  }

  componentDidMount() {
    let users;
    let charities;
    const userPromise = axios.get(`${SERVER_URL}/adminusers`);
    userPromise.then(userList => {
      users = userList.data;
    })
    const charityPromise = axios.get(`${SERVER_URL}/charities`);
    charityPromise.then(charityList => {
      charities = charityList.data;
    })
    console.log(users);
  }

  render () {
    console.log(this.state)
    return (
      <div className="adminContainer">
        <div>
          <p>Admin Users</p>
        </div>
      </div>
    )
  }
}

export default Admin;