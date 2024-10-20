import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const SupportButton = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/+16893358988", "_blank");
  };

  return (
    <div className="fixed top-[65%] left-[60%] md:top-[53rem] rounded-full  md:left-[93rem] animate-bounce shadow-lg shadow-primary  z-50  flex flex-col space-y-2">
      <button
        onClick={openWhatsApp}
        className="p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 peer">
        <FaWhatsapp
          className={`animate-pulse duration-500`}
          size={24}
        />
      </button>
      <Title />
    </div>
  );
};

export default SupportButton;

const Title = () => {
  return (
    <div
      className={`w-[16rem] peer-hover:flex rounded-xl items-center justify-center gap-2 text-nowrap right-[2rem] absolute bg-black border-[2px] border-green-600 shadow-sm shadow-white h-fit text-[10px] text-Alltext  p-2 hidden`}>
      chat with Central Nation Bank assistant via whatsApp{" "}
      <FaWhatsapp className={`text-green-600 animate-pulse`} />
    </div>
  );
};
