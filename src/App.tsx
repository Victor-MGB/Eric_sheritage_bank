import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Service";
import Investments from "./components/Investment";
import TravelInfoComponent from "./components/ExchangeIntro";
import Security from "./components/Security";
import Footer from "./components/Footer";

function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<Services />
			<Investments />
			<TravelInfoComponent />
			<Security />
			<Footer />
		</div>
	);
}

export default App;
