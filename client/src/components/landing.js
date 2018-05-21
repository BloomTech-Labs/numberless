import React, { Component } from 'react';
import './landing.css';

class Landing extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}
	render() {
		// above all of this, there will be a navbar. reference the instagram post container and overall
		// app structure to figure out how to attach the navbar to this component
		// worse comes to worse i'll just hard code the navbar in here.
		// not best practice but i can refactor later
		return (
			<div className="center">
				<div className="Header">
					<img className="Logo_imageUrl" src="" placeholder="Logo Image"/>
					<input 
						className="button"
						value="LOG IN"
						type="submit"
						onClick={this.handleChange}
					/>
				</div>
				<h1>Take the Pledge</h1>
				<p>
					Giving monthly to a pool that will stand ready to proactively give 
					targeted donations in-time and in-full. No waiting.
				</p>
				<input 
					className="button"
					value="DONATE"
					type="submit"
					onClick={this.handleChange}
				/>
				<input 
					className="button"
					value="LEARN MORE"
					type="submit"
					onClick={this.handleChange}
				/>
				<div className="LandingImage">
					<img className="Landing_imageUrl" src="" placeholder="Landing Image"/>
				</div>
			</div>
		)
	}

	handleChange(event) {
		// for now these buttons should just navigate to the first info page and the 
	}
}

export default Landing;