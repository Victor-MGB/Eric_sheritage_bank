import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import TravelInfoComponent from "./ExchangeIntro";
import Security from "./Security";
import Investment from "./Section2";
import Footer from "./Footer";

const INDEX = () => {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<Investment />
			<TravelInfoComponent />
			<Security />
			<Footer />
		</div>
	);
};

export default INDEX;
