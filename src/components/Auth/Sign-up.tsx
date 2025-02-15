import axios from "axios";
import React, { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../hooks/UseSpinner";

interface FormInputs {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  accountType: string;
  address: string;
  postalCode: string;
  state: string;
  country: string;
  currency: string;
  password: string;
  confirmPassword: string;
  accountPin: string;
  termsAgreement: boolean;
}

interface FormErrors {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  gender?: string;
  dateOfBirth?: string;
  accountType?: string;
  address?: string;
  postalCode?: string;
  state?: string;
  country?: string;
  currency?: string;
  password?: string;
  confirmPassword?: string;
  accountPin?: string;
  termsAgreement?: string;
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormInputs>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    accountType: "",
    address: "",
    postalCode: "",
    state: "",
    country: "",
    currency: "",
    password: "",
    confirmPassword: "",
    accountPin: "",
    termsAgreement: false,
  });
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCurrencySelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        currency: e.target.value,
      };
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors: FormErrors = {};

    // Validate required fields
    for (const [key, value] of Object.entries(formData)) {
      if (!value && key !== "middleName") {
        newErrors[key as keyof FormErrors] = "This field is required";
        valid = false;
      }
    }

    // Additional validation rules
    if (formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const navigateToOTP = useNavigate();
  //submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      // console.log(JSON.stringify(formData));
      axios
        .post(
          "https://lee-man-online-banking.onrender.com/api/register",
          JSON.stringify(formData),
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((response) => {
          setLoading(false);
          console.log(response);
          if (response.status === 201) {
            navigateToOTP("/OTP");
          }
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false);
        });
    }
  };

  const isFormEmpty = Object.values(formData).every((value) => value === "" || value === false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-7">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-4xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-yellow-600">Enroll for a new account now</h2>
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: "First Name", name: "firstName", type: "text" },
            { label: "Middle Name", name: "middleName", type: "text" },
            { label: "Last Name", name: "lastName", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone Number", name: "phoneNumber", type: "text" },
            { label: "Gender", name: "gender", type: "text" },
            { label: "Date of Birth", name: "dateOfBirth", type: "date" },
            { label: "Account Type", name: "accountType", type: "text" },
            { label: "Address", name: "address", type: "text" },
            { label: "Postal Code", name: "postalCode", type: "text" },
            { label: "State", name: "state", type: "text" },
            { label: "Country", name: "country", type: "text" },
            {
              label: "Currency",
              name: "currency",
              type: "text",
              //currency array
              value: [
                "USD",
                "EUR",
                "GBP",
                "JPY",
                "AUD",
                "CAD",
                "CHF",
                "CNY",
                "SEK",
                "NZD",
                "MXN",
                "SGD",
                "HKD",
                "NOK",
                "KRW",
                "TRY",
                "RUB",
                "INR",
                "BRL",
                "ZAR",
              ],
            },
            { label: "Password", name: "password", type: "password" },
            {
              label: "Confirm Password",
              name: "confirmPassword",
              type: "password",
            },
            { label: "Account PIN", name: "accountPin", type: "password" },
          ].map((input) => {
            if (input.name === "currency" && input.label === "Currency") {
              return (
                <div
                  key={input.name}
                  className="relative z-0 mb-6 w-full group"
                >
                  <select
                    name={input.name}
                    value={formData[input.name as keyof FormInputs] as string}
                    onChange={handleCurrencySelect}
                    className="block py-2.5 px-0 w-[10rem] h-[3rem] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
                  >
                    <option
                      value=""
                      disabled
                    >
                      Select Currency
                    </option>
                    {input.value &&
                      input.value.map((currency) => (
                        <option
                          className="text-red-600 h-[3rem] p-2 uppercase font-bold mx-3"
                          key={currency}
                          value={currency}
                        >
                          {currency}
                        </option>
                      ))}
                  </select>
                  <label
                    htmlFor={input.name}
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    {input.label}
                  </label>
                  {errors[input.name as keyof FormErrors] && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors[input.name as keyof FormErrors]}
                    </p>
                  )}
                </div>
              );
            }
            return (
              <div
                key={input.name}
                className="relative z-0 mb-6 w-full group"
              >
                <input
                  name={input.name}
                  type={input.type}
                  value={formData[input.name as keyof FormInputs] as string}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor={input.name}
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {input.label}
                </label>
                {errors[input.name as keyof FormErrors] && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors[input.name as keyof FormErrors]}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center mb-6">
          <input
            name="termsAgreement"
            type="checkbox"
            checked={formData.termsAgreement}
            onChange={handleChange}
            className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500"
          />
          <label
            htmlFor="termsAgreement"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            I termsAgreement to the terms and conditions
          </label>
          {errors.termsAgreement && (
            <p className="mt-2 text-sm text-yellow-600">{errors.termsAgreement}</p>
          )}
        </div>
        <p className="text-sm my-5 text-gray-600">
          Already enrolled?{" "}
          <Link
            to={"/sign-in"}
            className="text-yellow-500 underline cursor-pointer"
          >
            Sign in
          </Link>
        </p>

        <p className="text-sm my-5 text-gray-600">
          Go back home?{" "}
          <Link
            to={"/"}
            className="text-yellow-500 underline cursor-pointer"
          >
            Home
          </Link>
        </p>
        <button
          type="submit"
          className="w-full bg-yellow-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={isFormEmpty || loading}
        >
          Sign Up
        </button>
        {loading && !errors.email && !errors.password && !errors.confirmPassword && <Spinner />}
      </form>
    </div>
  );
};

export default SignUpForm;
