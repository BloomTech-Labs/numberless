import React, { Component } from 'react';
import './styles/voting.css';
import VotingCard from './votingcard.js'
import { dummyData } from '../dummydata.js';
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

class Voting extends Component {
	constructor() {
		super();
		this.state = {
      data: [],
      pledge: 15
		}
	}

	componentDidMount() {
    this.setState({
      // use axios to set the data.
      // will pledge and user be passed by prompt
			data: dummyData
		})
		// will set the state so that data comes from charity database
		// use dummy data for now just for peace of mind
	}

	render() {
		return (
<<<<<<< HEAD
			<div className="voting">
				<p className="title">VOTE <br></br><a className="subtitle">FOR THIS MONTHS CHARITY</a></p>
				<VotingCard charity={this.state.data}/>
=======
      <div className="voting">
      <header >  
				<h1 className="votingHeading">VOTE</h1>
        <h3 className="votingHeading">FOR THIS MONTHS CHARITY</h3>
        </header>  
        <div>
          <VotingCard charity={this.state.data} />
        </div>  
>>>>>>> 0b61ff71c9b961c05b24ebd8aaca59b4a38cf735
			</div>
		)
	}
}

export default Voting;
