import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class Info extends Component {
	render() {
		return(
			<Carousel>
				<div>
					<img src="https://i.imgur.com/ABgJmyD.jpg"/>
				</div>
				<div>
					<img src="https://i.imgur.com/RAtF5DQ.jpg"/>
				</div>
				<div>
					<img src="https://i.imgur.com/bvqKN94.jpg"/>
				</div>
				<div>
					<img src="https://i.imgur.com/ssDFyg3.jpg"/>
				</div>
				<div>
					<img src="https://i.imgur.com/JZ14cuW.jpg"/>
				</div>
			</Carousel>
		)
	}
}

export default Info;

