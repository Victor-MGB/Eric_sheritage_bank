import React from 'react';
import Work from "../pages/pageImages/Work.jpg"
import { Link } from "react-router-dom";
import Header from '../components/Header';
import iMyFone from "../pages/pageImages/iMyFone.jpg"
import { FaCreditCard } from "react-icons/fa";
import { RiLuggageDepositFill } from "react-icons/ri";
import { GiUnbalanced } from "react-icons/gi";
import { TbTransactionDollar } from "react-icons/tb";
import { GiBatMask } from "react-icons/gi";
import { TbFaceIdError } from "react-icons/tb";
import Anke from "../pages/pageImages/Anke.jpg"
import Footer from '../components/Footer';

const OnlineMobile: React.FC =()=>{
    return(
        <>

        <Header/>
        <section className="relative">
  <img src={Work} alt="_work" className="w-full h-[32rem]"/>

  <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-75 bg-gray-900">
    <div className="text-center text-white p-6">
      <h1 className="text-3xl sm:text-4xl text-white md:text-5xl font-bold mb-4">Online Mobile Technology</h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-6">Because life is too short to spend all of your time managing your money.</p>
      <Link to="/sign-up" className="bg-red-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded">Open Account</Link>
    </div>
  </div>
</section>

<section className="bg-gray-100 py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">SmartPhone App</h1>
        <p className="text-lg md:text-xl mb-6">Everything you expect from a branch, right in your pocket.</p>
        <img src={iMyFone} alt="_fone" className="w-2/3 mx-auto md:mx-0 md:w-full" />
      </div>

      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <span className="text-red-600 text-2xl"><FaCreditCard /></span>
          <p>Suspend Lost or Stolen Debit Cards</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-red-600 text-2xl"><RiLuggageDepositFill /></span>
          <p>Deposit Checks</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-red-600 text-2xl"><GiUnbalanced /></span>
          <p>Get Balances, Pay Bills & Make Funds Transfers</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-red-600 text-2xl"><TbTransactionDollar /></span>
          <p>Optional Transaction & Balance Text Message Alerts</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-red-600 text-2xl"><GiBatMask /></span>
          <p>Find ATMs or branches near you</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-red-600 text-2xl"><TbFaceIdError /></span>
          <p>Fast log in with FaceID and TouchID on compatible devices</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-gray-100 py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">
          <span className="text-red-600">ATMs</span> Made Smarter
        </h1>
        <p className="text-lg mb-6">With a network of over 70 ATMs and ITMs across the state, you can bank conveniently with extended hours of service.</p>
        <i className="text-red-600 font-semibold">ATM and ITM Locations</i>
      </div>

      <div>
        <img src={Anke} alt="_Anke" className="w-full h-auto rounded-lg shadow-lg mb-6 md:mb-0" />

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Interactive Teller Machine</h2>
          <p className="text-lg">Speak with our local Video Tellers for extra features and friendly service.</p>
          <p className="text-lg mt-4">An ITM has all the amenities of a Smart ATM with the option to request a video teller. Our tellers are located here in Kansas to offer the extra features, personal attention, and secure service you expect.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<Footer/>

        </>
    )
}
export default OnlineMobile