import React from "react";
import tea1 from "../pages/pageImages/tea (1).jpeg"
import tea2 from "../pages/pageImages/tea (2).jpeg"
import tea3 from "../pages/pageImages/tea (3).jpeg"
import Header from "../components/Header";
import Footer from "../components/Footer";
const Central:React.FC=()=>{
    return(
        <>
        <Header/>
        <section className="relative bg-gray-800  h-screen flex items-center justify-center text-white">
      <img 
        src={tea1} 
        alt="MoneyCentral" 
        className="absolute inset-0 w-full h-[40.5rem] mt-[4rem] object-cover animate__animated animate__fadeIn"
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold mb-4 text-red-600 animate__animated animate__fadeInDown">MoneyCentral</h1>
        <p className="text-3xl animate__animated animate__fadeIn animate__delay-1s">Because life is too short to spend all of your time managing your money.</p>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>

    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-600 animate__animated animate__fadeIn">Why use MoneyCentral?</h1>
          <p className="text-lg text-gray-600 mt-4 animate__animated animate__fadeIn">
            You'll save time and money and gain control of your accounts. You can watch where every penny goes, whether you're saving enough money for retirement, and you can set goals and track your progress. Plus, you useCallback(
              () => {
                first
              },
              [second],
            )
             sync your MoneyCentral to accounts at nearly 14,000 financial institutions, so you can keep track  of everything in one place.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:pr-8 animate__animated animate__fadeInLeft">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">Additional Features:</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li><span className="font-bold">Dashboard:</span> Add accounts, credit cards, investments, and loans from over 14,000 institutions</li>
              <li><span className="font-bold">Budget:</span> Set up and monitor your spending targets</li>
              <li><span className="font-bold">Cashflow:</span> Track income and upcoming bills</li>
              <li><span className="font-bold">Goals:</span> Set savings goals and let MoneyCentral be your moral support</li>
              <li><span className="font-bold">Net Worth:</span> Manage assets and debts and see your net worth at glan888ce</li>
              <li><span className="font-bold">Alerts:</span> Set a budget and stick to it with email alerts</li>
            </ul>
          </div>
          <div className="flex justify-center animate__animated animate__fadeInRight">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PZMHMHI9hFs?rel=0&showinfo=0&cc_load_policy=1&cc_lang_pref=en"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full max-w-md md:max-w-full h-64 md:h-80 lg:h-96"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

     <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 animate__animated animate__fadeIn">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:pr-8">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Add an Account</h1>
            <p className="text-lg text-gray-700 mb-6">
              Sync your accounts at other financial institutions so you can get a complete financial picture. Once everything is added, all you have to do is track your spending and set up budgets and goals. Once that's complete, calculating your net worth is a breeze!
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Step 1:</strong> Navigate to Accounts and click the plus sign to "Add Linked Account".
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Step 2:</strong> Find and select your financial institution using the search feature.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Step 3:</strong> Enter your login credentials and select "Connect". Once the process is complete, you'll get a notification on the MoneyCentral dashboard letting you know the account has synced successfully.
            </p>
          </div>
          <div className="flex justify-center animate__animated animate__zoomIn">
            <img src={tea2} alt="_tea" className="w-full max-w-sm md:max-w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 animate__animated animate__fadeIn">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:pr-8">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Goals</h1>
            <p className="text-lg text-gray-700 mb-6">
              Goals are hard to attain if you haven't set them, and once you do they're easy to reach with MoneyCentral's Goal tracking. Create large and small goals, like saving for a house or saving for next year's vacation.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Step 1:</strong> Navigate to Goals and select "Add Goal".
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Step 2:</strong> Select whether you intend to pay off a loan or save toward a goal.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Step 3:</strong> Fill in the information pertaining to your goal.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Step 4:</strong> Click "Save" to add the goal to your account.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Your goal summary will update the completion date and the amount needed per month according to what you select in the form. The summary will give you a quick idea of whether or not you're on track for the month and will reflect your day-to-day balances.
            </p>
          </div>
          <div className="flex justify-center animate__animated animate__zoomIn">
            <img src={tea3} alt="_tea" className="w-full max-w-sm md:max-w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>

    <Footer/>

        </>
    )
}
export default Central
