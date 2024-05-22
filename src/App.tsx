import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Service";
import Investments from "./components/Investment";

function App() {
      return (
		<div className='App bg-primary'>
			<Header />
                  <Hero />
                  <Services />
                  <Investments/>
		</div>
	);
}

export default App;
