// you will have to insert a voting-card component
// similar to the way you had a post container in you instagram app
// the voting-card component will go through the database 
// and select the following for each charity of the month:
	// charity of the month image
	// charity of the month name
// the voting card component will then have 2 buttons:
	// details button - opens popup with charityinfo page
	// select button - need to keep track of charity votes somehow

// charity info page - depending on how the details button works, i have to build this also
	// title of charity
	// extended info about charity
	// close button - return to voting page
	// select as winner button - again, need to keep track of charity votes somehow

  import React, { Component } from 'react';
  import './styles/votingcard.css';
  // i'm using the below reactjs library "popup" to generate a popup window once the user clicks on the DETAILS button
  import Popup from 'reactjs-popup';
  import { Link } from 'react-router-dom';
  import axios from 'axios';
  
  class VotingCard extends Component {
    state = { data: [], activeUser: [], activeCharities:[] }
    SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:3030';
    
    componentDidMount() {
    // get the current user
      this.getActiveUser();
      this.getActiveCharities();
      
    // get the activeCharities
    }
  
    getActiveUser = () => {
        const currentUser = sessionStorage.getItem('user') || '5b1028f62cd2dc1e51bdf952'
      console.log(sessionStorage.getItem('user'))
      axios
        .get(`${this.SERVER_URL}/users/${currentUser}`)
        .then(response => {
          this.setState({
            activeUser: response.data,
          });
          console.log(response.data)
        })
        .catch(() => {
          console.error('error getting data');
        });
    }
  
    getActiveCharities = () => {
      const active =  []
      axios
        .get(`${this.SERVER_URL}/charities`)
        .then(response => {
          response.data.forEach((e) => {
            if (e.active==true) active.push(e)
          })
          this.setState({
            activeCharities: active,
          });
          console.log(response.data)
        })
        .catch(() => {
          console.error('error getting data');
        });
      
  
    }
  
   handleChange = (event) => {
    //const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    // the select button will increment the tally counter for the appropriate charity
    // the amount the tally counter will be incremented by depends on the user's subscription rate
    // for now, the select as winner page will just be a route to the thank you page
     
      let pledgeAmount = 10
     if (this.state.activeUser && this.state.activeUser.userPledge) pledgeAmount = this.state.activeUser.userPledge;
     const votes = pledgeAmount / 10
  
     axios
        .put(`${this.SERVER_URL}/charities/id`,votes)
        .then(response => {
          console.log('response from post', response);
        })
        .catch(() => {
          console.error('error getting data');
        });
    }
  
    render() {
      return (
        <div className="VotingCard">
        {/*places each charity in it's own voting card  */}
        {this.props.charity.map((c => {
          console.log(c);
          return (
            <div className="VotingCard">
              <div className="VotingCard_image">
                <img src={c.img} width="400" height="100"/>
              </div>
              <div >
                <h4  className="VotingCard_Header">{c.name}</h4>
              </div>
              <Popup 
                trigger={<button>DETAILS</button>} 
                position="right center">
                  {close => (
                    <div>
                      <h2>{c.name}</h2>
                      <p>{c.info}</p>
                      <button onClick={close}>CLOSE</button>
                      <Link to="/thankyou">
                        <button onClick={this.handleChange}>SELECT AS WINNER</button>
                      </Link>
                    </div>
                  )}
                  
              </Popup>
              <Link to="/thankyou">
                <input
                  type="submit"
                  value="SELECT"
                  onClick={this.handleChange}
                />
              </Link>
            </div>
          )
        }))}
      </div>
      );
    }
  }
  
  export default VotingCard;
