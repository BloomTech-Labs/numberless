import React, { Component } from 'react';
import './styles/pledge.css';

class Pledge extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		return (
			<div className="center">
				<div className="card">
					<p>PLEDGE</p>
					<input
						className="button"
						value="$10"
						type="submit"
						onClick={this.handleChange}
					/>
					<input
						className="button"
						value="$25"
						type="submit"
						onClick={this.handleChange}
					/>
					<input
						className="button"
						value="$50"
						type="submit"
						onClick={this.handleChange}
					/>
				</div>
			</div>
		)
	}

	handleChange(event) {
		// not sure what this function should do - I assume
		// this page/function should be integrated with stripe.
	}
}

export default Pledge;