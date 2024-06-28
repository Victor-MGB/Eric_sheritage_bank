import React from "react";
import family from "../pages/pageImages/family.jpeg"
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import 'animate.css/animate.min.css';
import fam from "../pages/pageImages/fam.jpeg"
import { FaUserTie, FaChartLine, FaMoneyBillWave, FaRegHandPaper, FaBell, FaTasks } from 'react-icons/fa';
import coin from "../pages/pageImages/coin.jpeg";
import small from "../pages/pageImages/small.jpg";
import Footer from "../components/Footer";

const Investement: React.FC=()=>{
    return(
        <>
        <Header/>
        <section className="bg-white py-12 px-4">
      <div className="container mx-auto mt-[4rem] flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <img src={family} alt="Family" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-semibold mb-4">Protect Your Investments</h1>
          <p className="text-lg mb-6">
            Providing quality financial advice to you and your own Central National Bank has been offering Trust Services since 1965 and we continue to be one of the most successful investment and wealth management establishments in the area. Our team of financial professionals is here to help you reach whatever your financial goals may be.
          </p>
          <Link to="/sign-up" className="inline-block bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            Open Account
          </Link>
        </div>
      </div>
    </section>

     <section className="bg-white py-12 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center animate__animated animate__fadeIn">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">How have we managed to stick around for so long?</h2>
          <p className="text-lg mb-6">
            We understand that successfully managing your assets is about more than selling product. We offer comprehensive wealth management that is customized to meet your unique financial and estate planning goals. We understand that in today's fast paced world "saving for your future" is more complicated than ever. Whether your focus is retirement planning, accumulating wealth or sheltering your estate you can depend on the Trust Officers at Central National Bank to work with you step by step to reach your goals.
          </p>
        </div>

        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <img src={fam} alt="Family" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </section>

    <section className="bg-gray-100 py-12 px-4 font-sans">
      <div className="container mx-auto animate__animated animate__fadeIn">
        <h2 className="text-3xl font-semibold mb-8 text-center">Account Options</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-200 text-left text-lg font-semibold">Account Type</th>
                <th className="py-4 px-6 bg-gray-200 text-left text-lg font-semibold">Features</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6 text-lg font-medium">Guardian Account</td>
                <td className="py-4 px-6">
                  <ul className="space-y-2">
                    <li className="flex items-center"><FaUserTie className="mr-2 text-blue-500" /> Personal Trust Officer to keep your portfolio on track</li>
                    <li className="flex items-center"><FaChartLine className="mr-2 text-green-500" /> Asset management by a team of professionals</li>
                    <li className="flex items-center"><FaMoneyBillWave className="mr-2 text-yellow-500" /> Access to a wide range of investment options</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 text-lg font-medium">Horizon Account</td>
                <td className="py-4 px-6">
                  <ul className="space-y-2">
                    <li className="flex items-center"><FaTasks className="mr-2 text-purple-500" /> An uncomplicated approach to investing</li>
                    <li className="flex items-center"><FaUserTie className="mr-2 text-blue-500" /> Personal Trust Officer to keep your portfolio on track</li>
                    <li className="flex items-center"><FaRegHandPaper className="mr-2 text-red-500" /> Discretionary investment changes</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-lg font-medium">Liberty Account</td>
                <td className="py-4 px-6">
                  <ul className="space-y-2">
                    <li className="flex items-center"><FaRegHandPaper className="mr-2 text-red-500" /> An account for the “hands-on” investor</li>
                    <li className="flex items-center"><FaMoneyBillWave className="mr-2 text-yellow-500" /> Access to a wide range of investment options</li>
                    <li className="flex items-center"><FaBell className="mr-2 text-orange-500" /> Early notification of portfolio activity</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

     <section className="bg-gray-100 py-12 px-4 font-sans">
      <div className="container mx-auto animate__animated animate__fadeIn">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img src={coin} alt="Coin" className="w-64 h-auto animate__animated animate__zoomIn" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl text-red-600 font-semibold mb-4">Secure Your Future</h2>
            <p className="text-lg mb-6">
              Manage your finances with confidence and ease using our state-of-the-art banking platform. Whether you’re saving for a goal or tracking your investments, we provide the tools you need to stay on top of your financial game.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <img src={small} alt="Small Icon" className="w-32 h-auto animate__animated animate__fadeInUp" />
        </div>
      </div>
    </section>

    <Footer/>
        </>
    )
}
export default Investement;