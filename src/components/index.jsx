import React, { Component } from 'react';
import Header from './Header';
import HomeTools from './HomeTools';
import TixCarousel from './TixCarousel';

class Home extends Component {
	render() {
		return (
			<>
				<Header />
				<TixCarousel />
				<HomeTools />
			</>
		);
	}
}

export default Home;