import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './pledge.css';

class Pledge extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	linkStyle = { textDecoration: 'none', color: '#234980', fontFamily: 'Open Sans',fontSize: '40pt', fontWeight: 700 }

	render() {
		return (
			<div className="pledgeContainer">
				<div className="card">
					<p>PLEDGE</p>
					<div className="pledgeBox">
						<div className="pledgeButton">
							<Link style = { this.linkStyle } to={{ pathname: '/newuser', state: { userPledge: 10 }}}>
								<span class="dollar">10</span>
							</Link>
						</div>
						<div className="pledgeButton">
							<Link style = { this.linkStyle } to={{ pathname: '/newuser', state: { userPledge: 25 }}}>
								<span class="dollar">25</span>
							</Link>
						</div>
						<div className="pledgeButton">
							<Link style = { this.linkStyle } to={{ pathname: '/newuser', state: { userPledge: 50 }}}>
								<span class="dollar">50</span>
							</Link>
						</div>
					</div>
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