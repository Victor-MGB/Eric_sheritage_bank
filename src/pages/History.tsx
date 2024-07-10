import React from "react";
import dc1 from "../pages/pageImages/dc (1).jpeg"
import dc2 from "../pages/pageImages/dc (2).jpeg"
import Header from "../components/Header";
import Footer from "../components/Footer";
const History:React.FC=()=>{
    return(
        <>
        <Header/>
       <section className="relative bg-white h-screen flex items-center justify-center">
      <img src={dc1} alt="Our History" className="absolute inset-0 w-full h-full object-cover animate__animated animate__zoomIn" />
      <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-2xl mx-auto animate__animated animate__fadeIn">
        <h1 className="text-5xl font-bold text-white mb-4">Our History</h1>
        <p className="text-lg text-white">
          Central National Bank has locations in 22 Kansas and Nebraska communities.
        </p>
      </div>
    </section>

    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 animate__animated animate__fadeIn">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 animate__animated animate__zoomIn">
            <img src={dc2} alt="_dc2" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed">
              From 1998 to the present, the industry has seen great technological advancement. We saw Online Banking make its debut in 1998, followed by the introduction to Bill Pay in 2002. From there, advancements have ranged from Smart ATMs in 2008, to Mobile Banking apps in 2010. Central saw the opportunity to roll out Mobile Deposit in 2013, followed by the free financial management tool within online banking, called MoneyCentral, in 2016. Our most recent advancement is the beginning of a wave of installations of Interactive Teller Machines, or ITMs, in 2017.
              <br /><br />
              Today, Central provides 70+ ATMs across Kansas for customer convenience, and continues to provide the best in banking technology for customers.
            </p>
          </div>
        </div>
      </div>
    </section>

   <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 animate__animated animate__fadeIn">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-red-600 mb-4">A Family Tradition</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              When Edward W. Rolfs came to the Central National Bank in 1915, he began an association with the bank that continues today for the Rolfs family. E.W. Rolfs served as bank president from July 15, 1959 until January of 1967 when his son, E.J. Rolfs, took over as president. E.C. Rolfs, son of E.J., assumed the responsibility of President and CEO in 1993 until 2016 when niece Sara Girard accepted the role of President. Girard makes the fourth generation of the Rolfs family to work and provide leadership for the bank's day-to-day operations.
              <br /><br />
              Central National Bank has grown from having one location in Junction National, Kansas, to become one of the states' strongest banks, with branches in 22 communities. This growth in size has allowed Central National Bank to provide a wide array of valuable products and services that are delivered with leading technology, such as online banking, convenient mobile apps and the introduction of Interactive Teller Machines in 2017. Best of all, these convenient channels are combined with personal, local solutions from community-minded bankers for those times when you need expert advice.

            </p>
          </div>
          <div className="w-full md:w-1/2 animate__animated animate__zoomIn">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/ruwW3hfyku8?rel=0&amp;&amp;showinfo=0&amp;cc_load_policy=1&amp;cc_lang_pref=en"
                title="A Family Tradition"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[39rem] rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
        </>
    )
}
export default History;

