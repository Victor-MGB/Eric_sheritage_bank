import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const GiftCard: React.FC=()=>{
    return(
        <>
        <Header/>

        <section className="bg-white py-12 px-4">
      <div className="container mt-[4rem] mx-auto">
        {/* Visa Gift Card Information */}
        <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg">
            Central National Bank Visa Gift Cards are available at any Central National Bank location in any amount between $10-$1000 and can be used everywhere Visa debit cards are accepted.
            <br /><br />
            The Central National Bank Visa Gift Card cannot be reloaded with additional funds, nor can it be used at an ATM (Automated Teller Machine). Subject to applicable law, if there has been no activity on your card for 12 consecutive months, beginning the 13th month, a monthly inactivity fee of $4.95 will be assessed.
            <br /><br />
             National Association pursuant to a license from Visa USA Inc.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">How do I use my gift card?</h4>
                <p className="text-lg">
                  First, sign the signature panel and the back of the Card. We also suggest that you write down the gift card number and the customer service number from the back of the Card on a separate piece of paper in case the gift card is lost or stolen. You can then use your card everywhere Visa debit cards are accepted provided there are sufficient funds loaded on the Card to cover the full amount of your purchase. Present it to the clerk when making a purchase, and sign the form or receipt. If the merchant requests, instruct the merchant to select "Credit" on the terminal.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">When and where can I use my gift card?</h2>
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">How do I use my gift card?</h4>
                <p className="text-lg">
                  You can use your Visa gift card everywhere Visa debit cards are accepted within the United States and United State Territories. You can use your gift card right away, and we encourage you to use your gift card soon − since maintenance fees will apply after the first 6 months or as subject to applicable law.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">How do I use my gift card at a restaurant?</h2>
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-lg">
                  You may use your gift card at a restaurant the same as you do at any other merchant. However, it is common for service-oriented merchants to automatically factor in an additional 20% to cover any tip you may leave on the card. If your total bill, after adding in the additional 20%, exceeds the amount on the gift card, it will be declined. You should ensure that your gift card has an available balance that is 20% greater than your total bill. To avoid a decline of, or a hold on, your gift card, you can ask the merchant to authorize a specific dollar amount. We do not guarantee that the merchant will fulfill this request.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">How do I use my gift card at hotels and rental agencies?</h2>
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-lg">
                  Like restaurants, companies associated with travel services may automatically factor in an additional amount to cover incidental charges that you might incur. You should ensure that your gift card has an available balance that is greater than your total bill.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Can I use my gift card at gas stations?</h2>
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-lg">
                  When paying at the pump, simply insert your card and follow the instructions. If you are unable to complete the transaction at the pump, proceed inside and pay the attendant prior to pumping.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">If my card is lost or stolen, how do I report it?</h2>
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-lg">
                  Immediately report your card lost or stolen by texting <b className="text-red-600">centralcitybank0@gmail.com</b>. There will be a $8.00 fee to replace it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        <Footer/>
        </>
    )
}
export default GiftCard;