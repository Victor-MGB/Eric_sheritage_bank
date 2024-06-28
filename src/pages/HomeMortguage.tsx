import React from "react"
import { FaBlenderPhone } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsPersonLinesFill } from "react-icons/bs";
import { GiLightningBranches } from "react-icons/gi";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeMortguage: React.FC =()=>{
    return(
        <>
        <Header/>

        <section className="bg-white py-12">
      <div className="container mx-auto  mt-[2rem] grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg">
          <FaBlenderPhone className="text-4xl text-red-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Lenders</h2>
          <p className="text-gray-600">We can lend in six states. Find a lender near you.</p>
        </div>

        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg">
          <GrResources className="text-4xl text-red-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Resources</h2>
          <p className="text-gray-600">Your lender will need documentation to get the process started.</p>
        </div>

        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg">
          <BsFillQuestionCircleFill className="text-4xl text-red-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Questions</h2>
          <p className="text-gray-600">We've rounded up everything you need to know.</p>
        </div>
      </div>
    </section>

    <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">

        <h1  className="text-3xl font-semibold text-center mb-8">Mortguage Products</h1>
        <hr className="border-t border-gray-300 mb-4"/>

        <div className="max-w-3xl mx-auto">
            <div className="mb-8">
        <p>A variety of loan terms to fit your budget</p>
      </div>
            <div className="mb-8">
        <hr className="border-t border-gray-300 mb-4" />
        <p>Conventional and FHA-insured loans with low down payment options</p>
      </div>

      <div className="mb-8">
        <hr className="border-t border-gray-300 mb-4" />
        <p>VA-guaranteed loans to eligible veterans with no down payments</p>
      </div>
        </div>
          </div>
    </section>

    <section className="bg-gray-100 py-12">
  <div className="container mx-auto px-4">
    <div>
      <h1 className="text-3xl font-semibold text-center mb-8">Get Pre-Qualified Today</h1>
      <hr className="border-t border-gray-300 mb-8" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex items-center justify-center flex-col">
        <BsPersonLinesFill className="text-5xl text-red-600 mb-4" />
        <h1 className="text-2xl font-semibold mb-2">Online</h1>
        <p className="text-lg text-center">We just need a little information. No shirt or shoes required.</p>
      </div>

      <div className="flex items-center justify-center flex-col">
        <GiLightningBranches className="text-5xl text-red-600 mb-4" />
        <h1 className="text-2xl font-semibold mb-2">At a Branch</h1>
        <p className="text-lg text-center">Seek out a lender in the area near you.</p>
      </div>
    </div>
  </div>
</section>

<section className="bg-gray-100 py-12">
  <div className="container mx-auto px-4">
    <h1 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h1>

    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">How long does it take to get pre-qualified?</h2>
        <p>Pre-qualification can be a very quick process. It can take as little as five minutes and Central National Bank has three options for you to get pre-qualified now.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">I've never purchased a home before, how does the process work?</h2>
        <p>First, pre-qualify for a mortgage with Central National Bank. Next, go house-hunting and find your dream home. After you have a fully-executed purchase contract, contact your Lender and complete the loan application process. Your loan will then be fully processed and underwritten and the home will be appraised. When underwriting is complete, you will receive a loan commitment from Central National Bank and you're almost done! Schedule your closing, sign your documents and live happily ever after!</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">What is the difference between pre-qualification and commitment?</h2>
        <p>A pre-qualification is given upfront, usually when you are in the beginning stages of house hunting. With just a few questions and a quick credit review, your Lender can give you an estimate of how much home you can afford and issue a pre-qualification letter that you can provide to your realtor. A commitment will come from our in-house underwriting team after they have reviewed all application documentation, including appraisal and title search.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">How do I know how much house I can afford?</h2>
        <p>Generally speaking, you can purchase a home with a value of two or three times your annual household income. We will also take into account your employment history, credit history, current savings and debts, and the amount of down payment you are planning to make. You may also be able to take advantage of special loan programs for first time buyers to purchase a home with a higher value. Give us a call and we can help you determine exactly how much you can afford.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">What is the difference between a fixed-rate loan and an adjustable-rate loan?</h2>
        <p>With a fixed-rate mortgage, the interest rate stays the same during the life of the loan. With an adjustable-rate mortgage (ARM), the interest rate changes periodically, typically in relation to an index. While the monthly payments that you make with a fixed-rate mortgage are relatively stable, payments on an ARM loan will likely change. There are advantages and disadvantages to each type of mortgage, and the best way to select a loan product is by talking to us.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">How do I know which type of mortgage is best for me?</h2>
        <p>There is no simple formula to determine the type of mortgage that is best for you. This choice depends on a number of factors, including your current financial picture and how long you intend to keep your house. Central National Bank can help you evaluate your choices and help you make the most appropriate decision.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">What is mortgage insurance?</h2>
        <p>When you make a down payment of less than 20 percent of the purchase price on a conventional loan, many Lenders will require mortgage insurance. This helps lower the risk of the Lender and enables you to put a smaller down payment on your loan. Mortgage insurance is paid monthly, one-time at closing, or can be worked into your interest rate.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">What does my mortgage payment include?</h2>
        <p>For most homeowners, the monthly mortgage payments include three separate parts:</p>
        <ul className="list-disc pl-8">
          <li>Principal: Repayment on the amount borrowed</li>
          <li>Interest: Payment to the lender for the amount borrowed</li>
          <li>Taxes and Insurance: Monthly payments are normally made into a special escrow account for items like hazard insurance and property taxes. This feature is sometimes optional, in which case the fees will be paid by you directly to the County Tax Assessor and property insurance company</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">How much cash will I need to purchase a home?</h2>
        <p>The amount of cash that is necessary depends on a number of items. Generally speaking though, you will need to supply:</p>
        <ul className="list-disc pl-8">
          <li>Earnest Money: The deposit that is supplied when you make an offer on the house</li>
          <li>Down Payment: A percentage of the cost of the home that is due at settlement</li>
          <li>Closing Costs: Costs associated with the processing and finalizing of a loan request to purchase or refinance a house</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="bg-gray-100 py-12">
  <div className="container mx-auto px-4">
    <h1 className="text-3xl font-semibold text-center mb-8">Money for Life, Mortgage Fee Guarantee Disclosure</h1>
    
    <div className="max-w-3xl mx-auto">
      <p className="mb-4">The Money for Life, Mortgage Fee Guarantee ("Guarantee") applies to future refinances of the same property by the same borrower, subject to the conditions and requirements outlined below. A mortgage relationship with Central National Bank must be maintained on the subject property to redeem Guarantee. The Money for Life, Mortgage Fee Guarantee is non-transferable. It can only be applied to mortgage loans made within the mortgage origination division of Central National Bank. The Guarantee may not be combined with other discounts or promotions. The Money for Life, Mortgage Fee Guarantee excludes down payment assistance programs, bond loan programs, assumptions, home equity lines of credit, and any loans received by Central National Bank from a third party loan originator (e.g., wholesale or brokered transactions). Future refinancing is conditional on whether the program type or applicable state/federal laws contain "seasoning" restrictions that prohibit refinancing during a specific period. For future refinances of the same property with Central National Bank, this Guarantee may not be redeemed within 180 days of the date issued. Your loan approval for any future loan is not guaranteed. The appraised value of your home for the future loan is not guaranteed. You will have to qualify for the loan requested and will be quoted the interest rates in effect at the time of your next loan. "Lender fees" are defined as, and include only, the Central National Bank underwriting fee, processing fee, and any closing fee payable to Central National Bank. For loans meeting the above requirements and which are successfully closed, the lender fees listed above will be waived at the closing of the loan transaction. To redeem the Money for Life, Mortgagee Fee Guarantee, the certificate MUST be presented to the Central National Bank loan originator at the time of application for the new refinance loan. This program is subject to change or cancellation without notice.</p>
      
      <p className="mb-4">Future applicants must contact Central National Bank directly via  telephone <span className="text-blue-500">+12074021612</span> to qualify for the Guarantee. Applying for a Central National Bank loan indirectly through a third party (e.g., Correspondent Bank) makes the borrower ineligible for this Guarantee.</p>
    </div>
  </div>
</section>

<Footer/>
        </>
    )
}
export default HomeMortguage;

