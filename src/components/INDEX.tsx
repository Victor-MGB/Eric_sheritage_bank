import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Service";
import TravelInfoComponent from "./ExchangeIntro";
import Security from "./Security";
import Investment from "./Section2";

const INDEX = () => {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<Investment />
			<TravelInfoComponent />
			<Security />
			<Services />
		</div>
	);
};

export default INDEX;
