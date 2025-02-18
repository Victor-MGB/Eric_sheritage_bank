import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  // FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaCheckCircle,
} from "react-icons/fa";

const ContactCenter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorFormMsG, setErrorFormMsG] = useState({
    emailError: "",
    nameError: "",
    messageError: "",
  });

  const [errorBooleans, setErrorBooleans] = useState({
    emailBOL: false,
    nameBOL: false,
    messageBOL: false,
  });

  const [showNotification, setShowNotification] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorBooleans({
      ...errorBooleans,
      [`${e.target.name}BOL`]: false,
    });
    setErrorFormMsG({
      ...errorFormMsG,
      [`${e.target.name}Error`]: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, name, message } = formData;

    let isValid = true;

    if (!email) {
      setErrorFormMsG((prev) => ({ ...prev, emailError: "Email is required" }));
      setErrorBooleans((prev) => ({ ...prev, emailBOL: true }));
      isValid = false;
    }

    if (!name) {
      setErrorFormMsG((prev) => ({ ...prev, nameError: "Name is required" }));
      setErrorBooleans((prev) => ({ ...prev, nameBOL: true }));
      isValid = false;
    }

    if (!message) {
      setErrorFormMsG((prev) => ({ ...prev, messageError: "Message is required" }));
      setErrorBooleans((prev) => ({ ...prev, messageBOL: true }));
      isValid = false;
    }

    if (!isValid) return;

    // Post the form data
    try {
      const response = await axios.post("yghgj", JSON.stringify(formData), {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        setShowNotification(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div
      className=" flex flex-col pb-[2rem] mb-[2rem] items-center justify-between h-screen mx-auto p-2 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/assets/images/contactService.jpg)" }}>
      {showNotification && <Notification />}
      <h2 className="text-3xl font-bold my-[3rem] text-center">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  w-full ">
        {/* Contact Details */}
        <div className="bg-black p-6 rounded-lg shadow-md bg-opacity-35 w-[40rem]">
          <h3 className="text-xl font-bold mb-4 flex flex-col">Get in Touch</h3>
          <p className="flex items-center text-gray-700 mb-2">
            {/* <FaPhone className="mr-2 text-blue-500" /> +16623605122 */}
          </p>
          <p className="flex items-center text-gray-700 mb-2">
            <FaEnvelope className="mr-2 text-blue-500" />
            Sheritage144@gmail.com
          </p>
          <p className="flex items-center text-gray-700 mb-2">
            <FaClock className="mr-2 text-blue-500" /> Mon - Fri: 9:00 AM - 6:00 PM
          </p>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://facebook.com"
              className="text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-500">
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-blue-500">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="  bg-black p-6 rounded-lg shadow-md bg-opacity-35">
          <h3 className="text-xl font-bold mb-4 flex">Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-lg"
                type="text"
                id="name"
                name="name"
                onChange={handleFormChange}
                value={formData.name}
              />
              {errorBooleans.nameBOL && <p className="text-red-800">{errorFormMsG.nameError}</p>}
            </div>
            <div className="mb-4 flex flex-col">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-lg"
                type="email"
                id="email"
                name="email"
                onChange={handleFormChange}
                value={formData.email}
              />
              {errorBooleans.emailBOL && <p className="text-red-800">{errorFormMsG.emailError}</p>}
            </div>
            <div className="mb-4 flex flex-col">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-lg"
                id="message"
                name="message"
                rows={4}
                onChange={handleFormChange}
                value={formData.message}
                placeholder="Type your message here..."></textarea>
              {errorBooleans.messageBOL && (
                <p className="text-red-800">{errorFormMsG.messageError}</p>
              )}
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCenter;

const Notification = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // Show the notification for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 transition-transform duration-500 ease-in-out ${show ? "translate-y-0" : "-translate-y-full"
        }`}
      role="alert">
      <div className="flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
        <FaCheckCircle className="text-green-500 text-xl mr-2" />
        <span className="font-semibold">Submitted Successfully</span>
      </div>
    </div>
  );
};
