import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Service";
import TravelInfoComponent from "./ExchangeIntro";
import Security from "./Security";
import Investment from "./Investment";
import SupportButton from "./SupportButton";

const INDEX = () => {
	return (
		<div className='App'>
			<SupportButton />
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
