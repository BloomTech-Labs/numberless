import React, { Component } from 'react';
import './styles/thankyou.css';
import { Link } from 'react-router-dom';
import Landing from './landing.js';

class ThankYou extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		return (
			<div className="thankyou">
				<img src={require('./static/thankyou.jpg')} height="150" width="150" placeholder="Thanks"/>
				<p className="title">Thank You!</p>
				<p>YOUR VOTE HAS BEEN CAST</p>
				<p>This months donation has been allocated to Operation Underground Railroad.</p>
				<Link to="/landing">
					<input 
						className="thankyou-button"
						value="RETURN HOME"
						type="submit"
					/>
				</Link>
				
			</div>
		)
	}

	handleChange(event) {
		// this button will need to link back to the landing page
	}
}

export default ThankYou;