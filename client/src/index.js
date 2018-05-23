import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pledge from './components/pledge';
import Landing from './components/landing';
import ThankYou from './components/thankyou';
import Voting from './components/voting';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/pledge" component={Pledge}/>
			<Route exact path="/landing" component={Landing}/>
			<Route exact path="/thankyou" component={ThankYou}/>
			<Route exact path="/voting" component={Voting}/>
		</div>
	</Router>
	, 
	document.getElementById('root'));
registerServiceWorker();
