import React, { Component } from 'react';
import './thankyou.css';

class ThankYou extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		return (
			<div className="center">
				<img className="ThankYou" src="" placeholder="Thanks"/>
				<h1>Thank You!</h1>
				<h3>YOUR VOTE HAS BEEN CAST</h3>
				<p>This months donation has been allocated to <p>[ insert name of selected charity here. ]</p></p>
				<input 
					className="button"
					value="RETURN HOME"
					type="submit"
					onClick={this.handleChange}
				/>
			</div>
		)
	}

	handleChange(event) {
		// this button will need to link back to the landing page
	}
}

export default ThankYou;