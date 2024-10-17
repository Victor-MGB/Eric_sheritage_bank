import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const menuItems = [
      {
            title: "Banking",
            children: [
                  { name: "Personal Checking", link: "/personal/checking.asp" },
                  { name: "New Opportunity Checking", link: "/personal/newopportunity.asp" },
                  { name: "Savings & Money Market", link: "/personal/savings.asp" },
                  { name: "It Makes ¢ents!", link: "/personal/itmakescents.asp" },
                  { name: "Certificates of Deposit (CDs)", link: "/personal/certificates-deposit-cds.asp" },
            ],
      },
      {
            title: "Lending",
            children: [
                  { name: "Home Mortgages", link: "/mortgages/" },
                  { name: "Auto Loans", link: "/personal/autolending.asp" },
                  { name: "Personal Loans", link: "/personal/lending.asp" },
                  { name: "Credit Cards", link: "/personal/lending.asp" },
                  { name: "Credit Lines", link: "/personal/lending.asp#creditlines" },
                  { name: "Home Equity Line of Credit", link: "/mortgages/heloc.asp" },
            ],
      },
      {
            title: "Investments",
            children: [
                  { name: "Our Officers", link: "/whycentral/meetus.asp#trustofficers" },
                  { name: "Investment Options", link: "/personal/investments.asp" },
                  { name: "Raymond James Financial Services", link: "/personal/raymondjames.asp" },
            ],
      },
      {
            title: "Services",
            children: [
                  { name: "Online and Mobile Technology", link: "/whycentral/onlinemobile.asp" },
                  { name: "MoneyCentral", link: "/whycentral/moneycentral.asp" },
                  { name: "Gift Cards", link: "/personal/giftcards.asp" },
                  { name: "Safe Deposit Box", link: "/personal/safedepositboxes.asp" },
                  { name: "Fraud Protection", link: "/help/fraud-protection.asp" },
                  { name: "CNB Connect Blog", link: "http://blog.centralnational.com/" },
                  { name: "Rewards", link: "/whycentral/lifenowrewards.asp" },
            ],
      },
];

const MobileSidebar: React.FC<{toggleMobile:()=>void}> = ({toggleMobile}) => {
      const [openIndices, setOpenIndices] = useState<number[]>([]);

      const toggleMenu = (index: number) => {
            if (openIndices.includes(index)) {
                  setOpenIndices(openIndices.filter((i) => i !== index));
            } else {
                  setOpenIndices([...openIndices, index]);
            }
      };

      return (
        <div className="w-[15rem]  top-[63px] fixed z-50 bottom-[-5rem] md:hidden block bg-black bg-opacity-90 text-slate-100 p-4">
          {menuItems.map((menu, index) => (
            <div
              key={index}
              className="mb-6">
              <h3
                className="font-bold bg-red-300 justify-between rounded-md p-3 my-6 w-full mb-2 cursor-pointer flex items-center"
                onClick={() => toggleMenu(index)}>
                {menu.title}
                {openIndices.includes(index) ? (
                  <FaChevronDown className="ml-2" />
                ) : (
                  <FaChevronRight className="ml-2" />
                )}
              </h3>
              {openIndices.includes(index) && (
                <ul>
                  {menu.children.map((item, idx) => (
                    <li
                      key={idx}
                      className="mb-1 bg-slate-50 flex items-center">
                      <FaChevronRight className="mr-2" />
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      );
};

export default MobileSidebar;    
