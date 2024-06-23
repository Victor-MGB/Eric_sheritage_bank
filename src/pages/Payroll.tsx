import React from "react";
import press1 from "../pages/pageImages/press1.jpeg"
import press2 from "../pages/pageImages/press2.jpeg"
import press3 from "../pages/pageImages/press3.jpeg"
import 'animate.css/animate.min.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
const Payroll:React.FC=()=>{
    return(
        <>
        <Header/>
        <section className="bg-white py-12 px-4 font-sans">
      <div className="container mx-auto animate__animated mt-[4rem] animate__fadeIn">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:pr-8">
            <h2 className="text-3xl font-semibold text-red-600 mb-4">ACH Services</h2>
            <p className="text-lg mb-6">
              Manage electronic payments efficiently with our comprehensive ACH services. With proper authorization from your customer or employee, you can create one-time or recurring EFT (electronic funds transfer) credit and debit transactions. This service also allows check payment acceptance by phone. Streamline your payment and payroll processes with NACHA compliant ACH files uploaded directly from your accounting software to our secure online platform for final submission and processing.
            </p>
            <h2 className="text-2xl font-semibold text-red-600 mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-lg mb-6">
              <li>Full-featured electronic payment processing dashboard</li>
              <li>Set up one-time or recurring ACH payments or debits</li>
              <li>Accept check payments over the telephone</li>
              <li>Find out about returned items quicker</li>
              <li>No need to purchase, install, or maintain software</li>
              <li>Improves efficiency and profitability</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img src={press1} alt="ACH Services" className="w-[64rem] h-auto animate__animated animate__zoomIn" />
          </div>
        </div>
      </div>
    </section>

<section className="bg-white py-16 px-4 font-sans">
      <div className="container mx-auto animate__animated animate__fadeIn">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text and Image Block */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-4 text-red-600 animate__animated animate__fadeInDown">Customer Payment Portal</h1>
            <h4 className="text-xl font-medium mb-6 animate__animated animate__fadeInDown animate__delay-1s">
              Accept online payments and donations on your website
            </h4>
            <img src={press2} alt="Customer Payment Portal" className="w-full max-w-md mx-auto lg:mx-0 animate__animated animate__zoomIn" />
          </div>

          {/* Features Block */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg animate__animated animate__fadeInRight">
            <h1 className="text-3xl text-red-600 font-semibold mb-6">Features</h1>
            <ul className="list-disc list-inside space-y-4 text-lg">
              <li>For businesses, non-profits, and other organizations</li>
              <li>One-time and recurring payment options</li>
              <li>ACH/check payment options</li>
              <li>Easy to use workflow for customers and donors</li>
              <li>Consistent information when applying customer payments</li>
              <li>Convenient method of scheduling and making payments</li>
              <li>Payment history reporting</li>
              <li>Reduction in administration expenses by automating payments</li>
              <li>Easily integrates into your existing website by simply adding a link</li>
              <li>Customize to your needs by adding your colors/logos and adding input fields specific to your organization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-16 px-4 font-sans">
      <div className="container mx-auto animate__animated animate__fadeIn">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Block */}
          <div className="lg:pr-12">
            <h1 className="text-4xl font-bold mb-4 animate__animated text-red-600 animate__fadeInDown">Central Business Banking</h1>
            <h3 className="text-2xl font-semibold mb-6 animate__animated animate__fadeInDown animate__delay-1s">
              Specialized online banking for businesses
            </h3>
            <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
              Central Business Banking is a package of services created for businesses to conveniently access their account information online, anytime.
              Capabilities range from viewing and saving transaction data to issuing bill payments, wire transfers, and more.
            </p>
            <h4 className="text-xl font-medium mb-4 animate__animated animate__fadeIn animate__delay-3s">Features</h4>
            <ul className="list-disc list-inside space-y-2 text-lg mb-6 animate__animated animate__fadeIn animate__delay-3s">
              <li>Pay bills electronically with Online Bill Pay</li>
              <li>Verify issued checks with Positive Pay to control check fraud</li>
              <li>Multi-User Capability helps delegate tasks and resist fraud by controlling employee access privileges</li>
              <li>Create and send Wire Transfers within the United States</li>
              <li>Stop payments on issued checks</li>
              <li>Transfer funds between your enrolled Central National Bank accounts</li>
              <li>View, print, and save bank statements from online with E-statements</li>
              <li>Set up Account Alerts</li>
              <li>Receive a reduced rate of $12 per domestic wire transfer; $12 per stop payment</li>
            </ul>
            <p className="text-lg animate__animated animate__fadeIn animate__delay-4s">
              Request more information to see how Central Business Banking can benefit your organization.
            </p>
          </div>

          {/* Image Block */}
          <div className="flex justify-center lg:justify-end animate__animated animate__zoomIn animate__delay-2s">
            <img src={press3} alt="Central Business Banking" className="w-[30rem] h-[45rem] max-w-md" />
          </div>
        </div>
      </div>
    </section>
    
     <section className="bg-gray-100 py-16 px-4 font-sans">
      <div className="container mx-auto animate__animated animate__fadeIn">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Block */}
          <div className="lg:pr-12">
            <h1 className="text-4xl font-bold text-red-600 mb-4 animate__animated animate__fadeInDown">Remote Deposit Capture</h1>
            <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">
              Scan and deposit checks without going to the branch.
              <br />
              Your business saves time by capturing checks or money orders with a secure, accountable check processing system.
            </p>
          </div>

          {/* Video Block */}
          <div className="flex justify-center lg:justify-end animate__animated animate__zoomIn animate__delay-2s">
            <iframe
              src="https://player.vimeo.com/video/136239423"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Remote Deposit Capture"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <Footer/>   
        </>
    )
}
export default Payroll