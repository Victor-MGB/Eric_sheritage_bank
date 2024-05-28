import React from "react";
import Header from "./Header";
import Hero from "./Hero";
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
		</div>
	);
};

export default INDEX;
