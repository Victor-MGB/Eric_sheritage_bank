import React from "react";
import brenda2 from "../pages/pageImages/brenda (2).jpeg" 
import brenda3 from "../pages/pageImages/brenda (3).jpeg" 
import brenda4 from "../pages/pageImages/brenda (4).jpeg" 
import brenda5 from "../pages/pageImages/brenda (5).jpeg" 
import press3 from "../pages/pageImages/press3.jpeg" 
import brenda1 from "../pages/pageImages/brenda (1).jpeg"
import { MdOutlineSettingsInputComposite } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaServicestack } from "react-icons/fa6";
import 'animate.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
const Heloc:React.FC=()=>{
    return(
        <>
        <Header/>
        <section className="bg-white py-12 animate__animated animate__fadeIn">
      <div className="container mx-auto px-4 mt-[4rem] md:mt-[4rem] md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={brenda2}
              alt="Home Equity Line of Credit"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h6 className="text-xl font-semibold text-red-600 mb-2">Home Equity Line of Credit</h6>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Put the equity in your home to work</h2>
            <p className="text-lg text-gray-700">
              A HELOC could be your solution to paying a  big expense. Learn more to see if it’s right for you.
            </p>
          </div>
        </div>
      </div>
    </section>

   <section className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 animate__animated animate__fadeIn">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Use the Equity in Your Home to Your Advantage</h1>
            <p className="text-lg text-gray-700 mb-6">
              Our HELOC can make paying for your home improvement project, consolidating debts, or paying that large,
              unexpected medical bill a lot easier.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
              <li>Low rates</li>
              <li>Convenient terms</li>
              <li>Low closing costs</li>
            </ul>
            <p className="text-lg text-gray-700">
              A home equity line of credit is a form of revolving credit that uses the equity in one’s home as collateral. Because
              a home is often a person’s most valuable asset, many homeowners use home equity lines for major expenses, such as
              home improvements, medical expenses, and education.
            </p>
          </div>
          <div className="w-full md:w-1/2 animate__animated animate__zoomIn">
            <img src={press3} alt="Home Equity Line of Credit" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 animate__animated animate__fadeIn">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-600">What Do Our Expert Lenders Say?</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp">
            <img src={brenda1} alt="Adam Litzinger" className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700 mb-4">
              A Home Equity Line of Credit is a line of credit that is attached to the equity in your home. It can be used for many purposes and has flexible 
              payment options and terms to fit everyone’s budget. Since we will place a mortgage on your home, 
              it is possible for you to deduct the amount of interest you pay, however, I would contact your tax consultant to verify.
            </p>
            <i className="text-red-400">Adam Litzinger</i>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp">
            <img src={brenda3} alt="Brenda Elsasser" className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700 mb-4">
              What do I spend it on? The HELOC is a line of credit on your home that you can draw from; pay it off and draw from again. 
              You can spend this cash on whatever you want. i.e. credit card debt, remodeling, room addition, vacations, investments, and purchasing another home.
            </p>
            <i className="text-red-400">Brenda Elsasser</i>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp">
            <img src={brenda4} alt="Brenda Klubek" className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700 mb-4">
              Having a Home Equity Line of Credit gives you access to funds if an unexpected expense arises.
            </p>
            <i className="text-red-400">Brenda Klubek</i>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp">
            <img src={brenda5} alt="Brenda Klubek" className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700 mb-4">
              A home equity line of credit is a very convenient and cost effective way to come up with funds to make purchases or cover unexpected expenses. 
              Once the credit line is in place, it can be used more than one time when the need arises.
            </p>
            <i className="text-red-400">Dave Johnson</i>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 animate__animated animate__fadeIn">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-red-600 mb-8">
          Expect more than a great rate from your HELOC.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            <MdOutlineSettingsInputComposite className="text-4xl text-red-600 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Convenience
              </h3>
              <p className="text-gray-700">
                It's just easier when you can do all of your financial business
                in one place.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            <BsFillPersonLinesFill className="text-4xl text-red-600 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Online Banking
              </h3>
              <p className="text-gray-700">
                Know what's going on with your money. 24/7/365.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            <FaServicestack className="text-4xl text-red-600 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Service</h3>
              <p className="text-gray-700">
                We live and work in the same communities that you do. That means
                we care when you come in with questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer/>

        </>
    )
}
export default Heloc;