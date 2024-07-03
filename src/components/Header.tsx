import React, { useState, createContext, useContext } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import MobileSidebar from "./MobileSideBar";

type HeaderContextType = {
      handleOverAll: () => void;
      isOverAllActive: boolean;
      setIsOverAllActive: React.Dispatch<React.SetStateAction<boolean>>;
      activeTab: string;
      setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

export const HeaderContext = createContext<HeaderContextType>({
      handleOverAll: () => {},
      isOverAllActive: false,
      setIsOverAllActive: () => {},
      activeTab: "",
      setActiveTab: () => {},
});

const Header = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [isOverAllActive, setIsOverAllActive] = useState(false);
      const [activeTab, setActiveTab] = useState("");
      const navi = useNavigate();

      const toggleMobileMenu = () => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
      };

      //handler for overAll dropdown
      const handleOverAll = () => {
            setIsOverAllActive(true);
      };

      return (
            <HeaderContext.Provider
                  value={{
                        handleOverAll,
                        isOverAllActive,
                        setIsOverAllActive,
                        activeTab,
                        setActiveTab,
                  }}
            >
                  <header
                        className={`w-[100vw] h-[4rem] fixed z-30 bg-gray-50 flex items-center justify-between md:p-3 max-w-full`}
                  >
                        {/* Mobile Menu Icon */}
                        <div className='lg:hidden flex items-center'>
                              <button onClick={toggleMobileMenu} className='text-3xl text-red-600'>
                                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                              </button>
                        </div>

                        {/* Logo space */}
                        <h1
                              className={`lg:font-bold flex items-center justify-start text-3xl lg:text-5xl dancing-script drop-shadow-lg uppercase bg-red-600 p-1 w-[8rem] lg:w-[11rem]`}
                        >
                              CN{" "}
                              <span
                                    className={`text-white lg:ml-[-0.5rem] mr-[1rem] font-bold text-3xl lg:text-5xl dancing-script drop-shadow-lg uppercase`}
                              >
                                    B
                              </span>
                              <BsBank />
                              <div
                                    className={`bg-red-600 transform p-5 absolute w-[2%] h-[100%] top-0 left-[6.6rem] lg:left-[10rem]`}
                                    style={{ clipPath: "polygon(100% 0%, 0% 50%, 100% 100%, 0 100%, 0 50%, 0 0)" }}
                              ></div>
                        </h1>

                        {/* Navigation Links */}
                        <div
                              className={`lg:flex left-[0rem]  overflow-hidden w-0 bg-opacity-950 md:hidden flex-col lg:flex-row items-center justify-between lg:w-auto`}
                        >
                              <Link
                                    to={"/"}
                                    className={`text-lg orbitron text-red-600 hover:border border-black hover:p-2 transition-all duration-300 uppercase bold p-2 cursor-pointer m-1`}
                              >
                                    Home
                              </Link>
                              <Navlinks />
                        </div>

                        {/* Auth space */}
                        <div className='flex justify-between gap-3 h-auto items-center p-1 md:p-3 lg:w-fit '>
                              <button
                                    onClick={() => navi("/sign-in")}
                                    className={`md:p-2 text-nowrap p-1 text-sm rounded-none w-fit md:w-[7rem] bg-transparent border border-black text-red-600 hover:text-white hover:bg-red-600 uppercase cursor-pointer`}
                              >
                                    log-in
                              </button>
                              <button
                                    onClick={() => navi("/sign-up")}
                                    className={`md:p-2 p-1 text-nowrap rounded-none w-fit text-sm hover:bg-black text-white hover:text-white bg-red-600 uppercase cursor-pointer`}
                              >
                                    open account
                              </button>
                        </div>
                  </header>
                  <OverAllDropDown />
                  {isMobileMenuOpen && <MobileSidebar toggleMobile={toggleMobileMenu} />}
            </HeaderContext.Provider>
      );
};

export default Header;
//
//
//
//
//
//
//
//
//

const Navlinks = (prop: { handler?: (arg: boolean) => void; handler2?: (arg: boolean) => void }) => {
      const [isActive, setIsActive] = useState<boolean[]>([false, false, false, false, false, false]);

      const { handleOverAll, setActiveTab } = useContext(HeaderContext);

      const handleMouseEnter = (index: number) => {
            // Update isActive state based on index
            const newIsActive = isActive.map((item, i) => i === index);
            setIsActive(newIsActive);

            // Call handleOverAll from context
            handleOverAll();
      };

      const handleClick = (index: number, tab: string) => {
            setActiveTab(tab);
            handleOverAll();
      };

      return (
            <ul className='flex flex-col lg:flex-row items-center justify-between gap-4'>
                  {["personal", "business", "why central?"].map((eachLink, index) => (
                        <li
                              onMouseEnter={() => {
                                    handleMouseEnter(index);
                                    handleClick(index, eachLink);
                              }}
                              className={` text-sm orbitron text-red-600 hover:border text-wrap border-black hover:p-2 transition-all duration-300 uppercase bold p-2 cursor-pointer m-1 ${
                                    isActive[index]
                                          ? "border rounded-md transition-all shadow-md shadow-black text-primary"
                                          : ""
                              }`}
                              key={index}
                        >
                              {eachLink}
                        </li>
                  ))}
            </ul>
      );
};
//
//
//
//
//
//

const OverAllDropDown: React.FC = () => {
      const { isOverAllActive, activeTab, setIsOverAllActive } = useContext(HeaderContext);

      const renderContent = () => {
            if (activeTab === "personal") {
                  return (
                        <div className={`flex gap-4 p-2`}>
                              {/* banking */}
                              <div className='flex flex-col p-2'>
                                    <h3 className={`font-bold`}>Banking</h3>
                                    <ul>
                                          <li>
                                                <a href='/personal/checking.asp'>Personal Checking</a>
                                          </li>
                                          <li>
                                                <a href='/personal/newopportunity.asp'>New Opportunity Checking</a>
                                          </li>
                                          <li>
                                                <a href='/personal/savings.asp'>Savings &amp; Money Market</a>
                                          </li>
                                          <li>
                                                <a href='/personal/itmakescents.asp'>It Makes ¢ents!</a>
                                          </li>
                                          <li>
                                                <a href='/personal/certificates-deposit-cds.asp'>
                                                      Certificates of Deposit (CDs)
                                                </a>
                                          </li>
                                    </ul>
                              </div>

                              {/* lending */}
                              <div className='flex flex-col p-2'>
                                    <h3 className={`font-bold`}>Lending</h3>
                                    <ul>
                                          <li>
                                                <a href='/mortgages/'>Home Mortgages</a>
                                          </li>
                                          <li>
                                                <a href='/personal/autolending.asp'>Auto Loans</a>
                                          </li>
                                          <li>
                                                <a href='/personal/lending.asp'>Personal Loans</a>
                                          </li>
                                          <li>
                                                <a href='/personal/lending.asp'>Credit Cards</a>
                                          </li>
                                          <li>
                                                <a href='/personal/lending.asp#creditlines'>Credit Lines</a>
                                          </li>
                                          <li>
                                                <a href='/mortgages/heloc.asp'>Home Equity Line of Credit</a>
                                          </li>
                                    </ul>
                              </div>

                              {/* investment */}
                              <div className='flex flex-col p-2'>
                                    <h3 className={`font-bold`}>Investments</h3>
                                    <ul>
                                          <li>
                                                <a href='/whycentral/meetus.asp#trustofficers'>Our Officers</a>
                                          </li>
                                          <li>
                                                <a href='/personal/investments.asp'>Investment Options</a>
                                          </li>
                                          <li>
                                                <a href='/personal/raymondjames.asp'>
                                                      Raymond James Financial Services
                                                </a>
                                          </li>
                                    </ul>
                              </div>

                              {/* services */}
                              <div className='flex flex-col p-2'>
                                    <h3 className={`font-bold`}>Services</h3>
                                    <ul>
                                          <li>
                                                <a href='/whycentral/onlinemobile.asp'>Online and Mobile Technology</a>
                                          </li>
                                          <li>
                                                <a href='/whycentral/moneycentral.asp'>MoneyCentral</a>
                                          </li>
                                          <li>
                                                <a href='/personal/giftcards.asp'>Gift Cards</a>
                                          </li>
                                          <li>
                                                <a href='/personal/safedepositboxes.asp'>Safe Deposit Box</a>
                                          </li>
                                          <li>
                                                <a href='/help/fraud-protection.asp'>Fraud Protection</a>
                                          </li>
                                          <li>
                                                <a href='http://blog.centralnational.com/'>CNB Connect Blog</a>
                                          </li>
                                          <li>
                                                <a href='/whycentral/lifenowrewards.asp'>Rewards</a>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  );
            } else if (activeTab === "business") {
                  return (
                        <div className='flex justify-between'>
                              {/* banking */}
                              <div className='flex flex-col p-2'>
                                    <h3 className={`font-bold`}>Banking</h3>
                                    <ul>
                                          <li>
                                                <a href='/business/checking.asp'>Business Checking</a>
                                          </li>
                                          <li>
                                                <a href='/business/lending.asp'>Commercial Lending</a>
                                          </li>
                                          <li>
                                                <a href='/whycentral/meetus.asp#businesslenders'>Our Lenders</a>
                                          </li>
                                    </ul>
                              </div>

                              {/* service solution */}
                              <div className='flex flex-col p-2'>
                                    <h3>
                                          <a href='/business/services.asp'>Service Solutions</a>
                                    </h3>
                                    <ul>
                                          <li>
                                                <a href='/business/services.asp#achservices'>ACH Services</a>
                                          </li>
                                          <li>
                                                <a href='/business/services.asp#centralbusinessbanking'>
                                                      Central Business Banking
                                                </a>
                                          </li>
                                          <li>
                                                <a href='/business/services.asp#creditcardprocessing'>
                                                      Credit Card Processing
                                                </a>
                                          </li>
                                          <li>
                                                <a href='/business/services.asp#remotedepositcapture'>
                                                      Remote Deposit Capture
                                                </a>
                                          </li>
                                          <li>
                                                <a href='/payroll'>Payroll Cards</a>
                                          </li>

                                          <li>
                                                <a href='/business/services.asp#lockbox'>Lockbox Services</a>
                                          </li>
                                    </ul>
                              </div>

                              {/* investment */}
                              <div className='flex flex-col p-2'>
                                    <h3>Investments</h3>
                                    <ul>
                                          <li>
                                                <a href='/central'>Our Officers</a>
                                          </li>
                                          <li>
                                                <a href='/investment'>Investment Options</a>
                                          </li>
                                          <li>
                                                <a href='/personal/raymondjames.asp'>
                                                      Raymond James Financial Services
                                                </a>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  );
            } else if (activeTab === "why central?") {
                  return (
                        <div className='flex gap-5 p-2 justify-between'>
                              {/* location */}
                              <div className='flex flex-col p-2'>
                                    <h3 className={`fontbold`}>Locations</h3>
                                    <p>Where can we help you?</p>
                                    <ul>
                                          <li>
                                                <a href='/locations.asp'>
                                                      <span className='fa fa-map-marker' aria-hidden='true'></span>
                                                      Locations
                                                </a>
                                          </li>
                                          <li>
                                                <span className='fa fa-phone' aria-hidden='true'></span>888.262.5456
                                          </li>
                                    </ul>
                              </div>

                              {/* technology */}
                              <div className='flex flex-col p-2'>
                                    <h3 className={`fontbold`}>Technology</h3>
                                    <p>Old bank, new tech.</p>
                                    <ul>
                                          <li>
                                                <a href='/onlinemobile'>Online and Mobile Technology</a>
                                          </li>
                                          <li>
                                                <a href='/onlinemobile'>Smartphone App</a>
                                          </li>
                                          <li>
                                                <a href='/home-mor'>Interactive Teller Machines</a>
                                          </li>
                                          <li>
                                                <a href='/whycentral/moneycentral.asp'>MoneyCentral</a>
                                          </li>
                                          <li>
                                                <a href='/whycentral/onlinemobile.asp#billpay'>Bill Pay</a>
                                          </li>
                                          <li>
                                                <a href='/whycentral/onlinemobile.asp#estatements'>E-Statements</a>
                                          </li>
                                          <li>
                                                <a href='/whycentral/onlinemobile.asp#mobiledeposit'>Mobile Deposit</a>
                                          </li>
                                    </ul>
                              </div>
                              {/* history */}
                              <div className='flex flex-col p-2'>
                                    <a href='/history'>
                                          <h3>History</h3>
                                          <p>Dedicated to you since 1884.</p>
                                          <img
                                                src='https://centralnational.com/images/MM_HistoryPicture.jpg'
                                                alt='History of Central National Bank'
                                                width='260'
                                                height='260'
                                          />
                                    </a>
                              </div>

                              {/* rewards */}
                              <div className='flex flex-col p-2'>
                                    <a href='/heloc'>
                                          <h3>Rewards</h3>
                                          <p>Benefits you'll use.</p>
                                          <img
                                                src='https://centralnational.com/images/MM_lifenowlogo.png'
                                                alt='Life Now Rewards'
                                                width='190'
                                                height='190'
                                          />
                                    </a>
                              </div>

                              {/* service */}
                              <div className='flex flex-col p-2'>
                                    <h3 className={`fontbold`}>Services</h3>
                                    <p>What else can we do for you?</p>
                                    <ul>
                                          <li>
                                                <a href='/giftcard'>Gift Cards</a>
                                          </li>
                                          <li>
                                                <a href='/security'>Fraud Protection</a>
                                          </li>
                                          <li>
                                                <a href='http://blog.centralnational.com/'>CNB Connect Blog</a>
                                          </li>
                                          <li>
                                                <a href='http://myfinancialwingman.com'>My Financial Wingman Blog</a>
                                          </li>
                                          <li>
                                                <a href='http://csas.centralnational.com'>
                                                      Central Secret Agent Savers
                                                </a>
                                          </li>
                                          <li>
                                                <a href='/personal-checking'>Careers</a>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  );
            }
      };

      return (
            <div
                  onMouseLeave={() => setIsOverAllActive(false)}
                  className={`w-[64rem] absolute m-auto left-[12rem] overflow-hidden rounded-md   ${
                        isOverAllActive
                              ? "h-[20rem]  p-3 transition-all duration-500 top-[4rem] "
                              : "h-0 duration-700 transition-all"
                  } bg-gray-50 text-neutral-600 border-gray-950 shadow-lg shadow-black overflow-hidden`}
                  style={{ zIndex: 20 }}
            >
                  {renderContent()}
            </div>
      );
};
