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

const handleChange = (event) => {

	// the select button will increment the tally counter for the appropriate charity
	// the amount the tally counter will be incremented by depends on the user's subscription rate
	// for now, the select as winner page will just be a route to the thank you page
}


const VotingCard = (props) => {
	return (
		<div className="VotingCard">
			{props.charity.map((c => {
				return (
					<div className="VotingCard">
						<div className="VotingCard_image">
							<img src={c.img} width="400" height="100"/>
						</div>
						<div className="VotingCard_header">
							<p>{c.name}</p>
						</div>
						<Popup 
							trigger={<input className="voting-button" value="DETAILS" type="submit"/>} 
							position="right center">
								{close => (
									<div className="card">
										<p>{c.name}</p>
										<p>{c.info}</p>
										<input 
											className="voting-button" 
											type="submit"
											value="CLOSE"
											onClick={close}
										/>
										<div className="divider"></div>
										<Link to="/thankyou">
											<input 
												className="voting-button" 
												type="submit"
												value="SELECT AS WINNER"
												onClick={this.handleChange}
											/>
										</Link>
									</div>
								)}
								
						</Popup>
						<div className="divider"></div>
						<Link to="/thankyou">
							<input
								className="voting-button"
								type="submit"
								value="SELECT"
								onClick={this.handleChange}
							/>
						</Link>
					</div>
				)
			}))}
		</div>
	)
}

export default VotingCard;