import React, { Component } from 'react';
import './voting.css';
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
			data: []
		}
	}

	componentDidMount() {
		this.setState({
			data: dummyData
		})
		// will set the state so that data comes from charity database
		// use dummy data for now just for peace of mind
	}

	render() {
		return (
			<div className="center">
				<h1>VOTE</h1>
				<h3>FOR THIS MONTHS CHARITY</h3>
				<VotingCard charity={this.state.data}/>
			</div>
		)
	}
}

export default Voting;