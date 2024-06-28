// Greeting.tsx
import React,{ useState } from 'react';
import { FaPiggyBank } from "react-icons/fa";
import { FcCellPhone } from "react-icons/fc";
import { FaShopify } from "react-icons/fa";
import { MdPermIdentity } from "react-icons/md";
import { GoBroadcast } from "react-icons/go";
import { GiShoebillStork } from "react-icons/gi";
import { MdTravelExplore } from "react-icons/md";
import { GiLovers } from "react-icons/gi";
import { IoMdAdd } from "react-icons/io";
import { SiBazel } from "react-icons/si";
import Header from '../components/Header';
import Footer from '../components/Footer';


const PersonalChecking: React.FC = () => {

  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <>
    <Header/>
    <section className="bg-gray-100 mb-[2rem] py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Central Premium Checking</h2>
            <p className="text-gray-600">We reward you for relating with us</p>
          </div>
          <div className="text-gray-700">
            <p>Open Account for premium bonuses</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Central Value Checking</h2>
            <p className="text-gray-600">Benefit you will use</p>
          </div>
          <div className="text-gray-700">
            <p>Open Account to earn valuable benefits</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Central Basic Checking</h2>
            <p className="text-gray-600">Just the basics</p>
          </div>
          <div className="text-gray-700">
            <p>Open Basic Checking Account</p>
          </div>
        </div>
      </div>
    </section>


    <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="flex items-center mb-4 text-gray-700">
            <FaPiggyBank className="mr-2 text-green-500" /> Free online banking, mobile banking, bill pay, debit card & E-Statements
          </p>
          <p className="flex items-center mb-4 text-gray-700">
            <FaShopify className="mr-2 text-green-500" /> Shop local, save local with BaZing savings
          </p>
          <p className="flex items-center mb-4 text-gray-700">
            <FcCellPhone className="mr-2" /> Cell phone protection1,2
          </p>
          <p className="flex items-center mb-4 text-gray-700">
            <MdPermIdentity className="mr-2 text-blue-500" /> Identity theft protection1,2
          </p>
          <p className="flex items-center mb-4 text-gray-700">
            <GoBroadcast className="mr-2 text-red-500" /> Roadside assistance
          </p>
          <p className="text-gray-700">
            $7 Monthly Fee <br />
            <span className="text-sm text-gray-500">
              Monthly fee is waived if the account holder has deposits totaling more than $2,500.00 with us on the day the statement is produced.
            </span>
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="flex items-center mb-4 text-gray-700">
            <GiShoebillStork className="mr-2 text-orange-500" /> Free online banking, mobile banking, bill pay, debit card & E-Statements
          </p>
          <p className="flex items-center mb-4 text-gray-700">
            <MdTravelExplore className="mr-2 text-blue-500" /> $10,000 Travel accidental death coverage2
          </p>
          <p className="flex items-center mb-4 text-gray-700">
            <IoMdAdd className="mr-2 text-purple-500" /> One order of complimentary checks
          </p>
          <p className="flex items-center mb-4 text-gray-700">
            <GiLovers className="mr-2 text-pink-500" /> Pharmacy, vision and hearing savings
          </p>
          <p className="flex items-center mb-4 text-gray-700">
            <SiBazel className="mr-2 text-indigo-500" /> Limited access to BaZing savings
          </p>
          <p className="text-gray-700">
            $5.00 Monthly Fee <br />
            <span className="text-sm text-gray-500">
              Online Bill Pay monthly fee is waived.
            </span>
          </p>
        </div>
      </div>
    </section>

    <section className="p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto space-y-4 text-gray-800">
        <p className="text-sm">
          <span className="font-bold">1</span> Cell phone protection and personal identity protection are subject to additional terms and conditions.
        </p>
        <p className="text-sm">
          <span className="font-bold">2</span> Insurance products are: <span className="font-bold">NOT A DEPOSIT. NOT FDIC-INSURED. NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY. NOT GUARANTEED BY THE BANK.</span>
        </p>
        <p className="text-sm">
          Participating merchants on BaZing are not sponsors of the program, are subject to change without notice, may not be available in all regions and may choose to limit deals.
        </p>
        <p className="text-sm">
          All Checking accounts have a $30 minimum to open.
        </p>
      </div>
    </section>

    <section className="p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-6 text-gray-800">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Smartphone App Features</h1>
          <p className="text-base">
            Suspend & Unsuspend Lost or Stolen Debit Cards<br />
            Deposit Checks<br />
            Get Balances, Pay Bills & Make Funds Transfers<br />
            Optional Transaction & Balance Text Message Alerts<br />
            Find ATMs or branches near you<br />
            E-Statements<br />
            Fast log in with Apple TouchID on compatible Apple devices
          </p>
        </div>
        <div className="space-y-4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Why Use Our App?</h2>
          <ul className="list-disc list-inside text-base">
            <li>Convenience at your fingertips</li>
            <li>Secure and fast transactions</li>
            <li>Easy access to your account information</li>
            <li>Stay updated with real-time alerts</li>
            <li>Locate ATMs and branches easily</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Fraud Protection</h1>
      <div className="max-w-4xl mx-auto space-y-4 text-gray-800">
        <p>
          We keep you up-to-date with the newest fraud tactics used to steal your identity as well as instructions on how to avoid them.
          <br /><br />
          When potential fraud is detected, you will receive an automatic email notification, with the option to reply with “fraud” or “no fraud.”
          <br /><br />
          One minute after the email, you will receive a text alert, which also has the “fraud” or “no fraud” option.
          <br /><br />
          If there is no response received, you will then receive automatic phone calls to confirm or deny fraud. The call will also give the option of speaking to a fraud analyst.
          <br /><br />
          Remember—our messages will never ask for your PIN or account number.
          <br /><br />
          Visit our blog to see our recent fraud alerts.
        </p>
        {showMore && (
          <p className="mt-4 text-gray-700">
            Additional information on fraud protection measures, tips to secure your account, and more detailed guidance on how to identify suspicious activities can be found in our comprehensive guide available on our website.
          </p>
        )}
        <button
          onClick={handleToggle}
          className="px-4 py-2 mt-4 text-white bg-red-600 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>

    <Footer/>
    </>
  );
};

export default PersonalChecking;
