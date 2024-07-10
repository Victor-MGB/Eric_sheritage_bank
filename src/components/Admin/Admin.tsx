import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./Main";

const Admin = () => {
      const [isOpen, setIsOpen] = React.useState(false);

      const opener = () => {
            setIsOpen(!isOpen);
      };
      return (
            <div className='flex h-screen '>
                  <Sidebar isOpen={isOpen} opener={opener} />
                  <div className='p-6 bg-gray-100'>
                        <MainContent opener={opener} />
                  </div>
            </div>
      );
};

export default Admin;
