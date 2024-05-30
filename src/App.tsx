import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Services from "./components/Service";
import Investments from "./components/Section2";
import TravelInfoComponent from "./components/ExchangeIntro";
import Security from "./components/Security";
import Footer from "./components/Footer";
import About from "./components/About";
import INDEX from "./components/INDEX";
import ContactCenter from "./components/Contact";
import CurrencyRates from "./components/CurrencyRate";
import CurrencyConverter from "./components/CurrencyConverter";
import SavingComponent, { QRComponent } from "./components/Savings";
import FAQ from "./components/Faq";
import SupportButton from "./components/SupportButton";
import SignUpForm from "./components/Sign-up";
import LoginForm from "./components/Sign-In";
import CardContainer from "./components/DashBoard/Card";
import Main from "./components/DashBoard/MainBar";
import Dashboard from "./components/DashBoard/Dashboard";

function App() {
	return (
		<div className='App'>
			<SupportButton />
			<Routes>
				<Route path='/' element={<INDEX />} />
				<Route path='/services' element={<Services />} />
				<Route path='/investments' element={<Investments />} />
				<Route path='/travel-info' element={<TravelInfoComponent />} />
				<Route path='/security' element={<Security />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<ContactCenter />} />
				<Route path='/rates' element={<CurrencyRates />} />
				<Route path='/converter' element={<CurrencyConverter />} />
				<Route path='/saving' element={<SavingComponent />} />
				<Route path='/saving-pot' element={<QRComponent />} />
				<Route path='/FAQs' element={<FAQ />} />
				<Route path='/sign-up' element={<SignUpForm />} />
				<Route path='/sign-in' element={<LoginForm />} />

				{/* dashboard */}
				<Route path='/dashboard' element={<Dashboard />}>
					<Route path='/dashboard/cards' element={<CardContainer />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
