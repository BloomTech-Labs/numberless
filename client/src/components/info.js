import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/info.css';

class Info extends Component {
	render() {
		return(
			<Carousel>
				<div className="blue">
					<img src={require('./static/artboard1.jpg')}/>
				</div>
				<div className="blue">
					<img src={require('./static/artboard2.jpg')}/>
				</div>
				<div>
					<img src={require('./static/artboard3.jpg')}/>
				</div>
				<div>
					<img src={require('./static/artboard4.jpg')}/>
				</div>
				<div>
					<img src={require('./static/artboard5.jpg')}/>
				</div>
			</Carousel>
		)
	}
}

export default Info;

