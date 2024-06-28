import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from "react-router-dom"
import { MdEarbuds } from "react-icons/md";
import { GiStairsGoal } from "react-icons/gi";
import { IoMdPlanet } from "react-icons/io";
import { MdTaxiAlert } from "react-icons/md";

const MoneyCentral:React.FC = () =>{
    return(
        <>
        <Header/>

<section className="bg-gray-100 py-12">
      <div className="container mx-auto mt-[4rem] px-4">
        <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
          <iframe
            title="MoneyCentral Overview of Features"
            src="https://www.youtube.com/embed/PZMHMHI9hFs?rel=0&amp;&amp;showinfo=0&amp;cc_load_policy=1&amp;cc_lang_pref=en"
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>

    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-8">Why Use MoneyCentral?</h1>
        <p className="text-lg mb-6 text-center">
          You'll save time and money and gain control of your accounts. You can watch where every penny goes, whether you're saving enough money for retirement, and you can set goals and track your progress.
        </p>
        <p className="text-lg mb-6 text-center">
          Plus, you can sync your MoneyCentral to accounts at nearly 14,000 financial institutions, so you can keep track of everything in one place.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Additional Features:</h2>
          <ul className="space-y-4">
            <li className="bg-red-600 text-white p-4 rounded-lg shadow">
              <strong>Dashboard:</strong> Add accounts, credit cards, investments, and loans from over 14,000 institutions
            </li>
            <li className="bg-red-600 text-white p-4 rounded-lg shadow">
              <strong>Budget:</strong> Set up and monitor your spending targets
            </li>
            <li className="bg-red-600 text-white p-4 rounded-lg shadow">
              <strong>Cashflow:</strong> Track income and upcoming bills
            </li>
            <li className="bg-red-600 text-white p-4 rounded-lg shadow">
              <strong>Goals:</strong> Set savings goals and let MoneyCentral be your moral support
            </li>
            <li className="bg-red-600 text-white p-4 rounded-lg shadow">
              <strong>Net Worth:</strong> Manage assets and debts and see your net worth at a glance
            </li>
            <li className="bg-red-600 text-white p-4 rounded-lg shadow">
              <strong>Alerts:</strong> Set a budget and stick to it with email alerts
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">
            How do I get MoneyCentral?
            <br />
            If you're a Central National Bank account holder all you have to do is log in to your online banking and click on the MoneyCentral tab. It's totally free.
            <br />
            <br />
            Not a customer yet? Let's get you signed up.
          </p>
          <Link to="/sign-up" className="bg-red-600 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded">
            Open Account
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <p className="text-lg mb-4">
            Add an Account
            <br />
            Sync your accounts at other financial institutions so you can get a complete financial picture. Once everything is added, all you have to do is track your spending and set up budgets and goals. Once that's complete, calculating your net worth is a breeze!
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>Navigate to Accounts and click the plus sign to "Add Linked Account".</li>
            <li>Find and select your financial institution using the search feature.</li>
            <li>Enter your login credentials and select "Connect".</li>
          </ol>
          <p className="text-lg">
            Once the process is complete, you'll get a notification on the MoneyCentral dashboard letting you know the account has synced successfully.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start bg-blue-100 p-4 rounded-lg shadow-md">
            <span className="text-3xl text-red-600 mr-4">
              <MdEarbuds />
            </span>
            <div>
              <h3 className="text-xl font-semibold mb-2">Budget</h3>
              <p>View your monthly budget at a glance.</p>
            </div>
          </div>

          <div className="flex items-start bg-blue-100 p-4 rounded-lg shadow-md">
            <span className="text-3xl text-red-600 mr-4">
              <GiStairsGoal />
            </span>
            <div>
              <h3 className="text-xl font-semibold mb-2">Goals</h3>
              <p>Save for a major life event, pay off a loan, or save for your first house!</p>
            </div>
          </div>

          <div className="flex items-start bg-blue-100 p-4 rounded-lg shadow-md">
            <span className="text-3xl text-red-600 mr-4">
              <IoMdPlanet />
            </span>
            <div>
              <h3 className="text-xl font-semibold mb-2">Net Worth</h3>
              <p>Never wonder about your finances again.</p>
            </div>
          </div>

          <div className="flex items-start bg-blue-100 p-4 rounded-lg shadow-md">
            <span className="text-3xl text-red-600 mr-4">
              <MdTaxiAlert />
            </span>
            <div>
              <h3 className="text-xl font-semibold mb-2">Alert</h3>
              <p>Set up email notifications to help you stay on budget.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
                    <Footer/>

        </>
    )
}
export default MoneyCentral;