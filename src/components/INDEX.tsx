import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Service";
import TravelInfoComponent from "./ExchangeIntro";
import Security from "./Security";
import Footer from "./Footer";
import Investment from "./Investment";

const INDEX = () => {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<Services />
			<Investment />
			<TravelInfoComponent />
			<Security />
		</div>
	);
};

export default INDEX;
