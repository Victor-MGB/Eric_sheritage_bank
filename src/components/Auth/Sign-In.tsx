import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { userDetailsType } from "../../App.js";

interface LoginFormInputs {
  accountNumber: string;
  password: string;
}

interface LoginFormErrors {
  accountNumber?: string;
  password?: string;
}

const LoginForm: React.FC<{
  extractUserDetails: (userDetails: userDetailsType, token: string) => void;
}> = ({ extractUserDetails }) => {
  const [formData, setFormData] = useState<LoginFormInputs>({
    accountNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [ErrorMSG, setErrorMSG] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors: LoginFormErrors = {};

    // Validate required fields
    if (!formData.accountNumber) {
      newErrors.accountNumber = "This field is required";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "This field is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 charact9018875523ers";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  const navigate = useNavigate();

  //Admin or user login manager

  const URLmanager = () => {
    if (
      formData &&
      formData.accountNumber === "2683002668" &&
      formData.password === "12345678"
    ) {
      return "https://lee-man-online-banking.onrender.com/api/admin/login";
    } else {
      return "https://lee-man-online-banking.onrender.com/api/login";
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      const data = formData;
      axios
        .post(URLmanager(), data, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          if (
            res.status === 200 &&
            res.data.user.accountType !== "Admin" &&
            res.data.user.accountNumber !== "2683002668"
          ) {
            setIsSuccess(true);
            const userData = {
              firstName: res.data.user.firstName,
              middleName: res.data.user.middleName,
              lastName: res.data.user.lastName,
              email: res.data.user.email,
              phoneNumber: res.data.user.phoneNumber,
              gender: res.data.user.gender,
              dateOfBirth: res.data.dateOfBirth,
              accountType: res.data.user.accountType,
              address: res.data.user.address,
              postalCode: res.data.user.postalCode,
              state: res.data.user.state,
              country: res.data.user.country,
              currency: res.data.user.currency,
              password: res.data.user.password,
              accountPin: res.data.user.accountPin,
              agree: res.data.user.agree,
              kycStatus: res.data.user.kycStatus,
              dateOfAccountCreation: res.data.userdateOfAccountCreation,
              accounts: res.data.user.accounts.map((account: any) => ({
                accountId: account.accountId,
                accountNumber: account.accountNumber,
                type: account.type,
                balance: account.balance,
                currency: account.currency,
                transactions: account.transactions,
              })),
            };
            extractUserDetails(userData, res.data.token);
            sessionStorage.setItem("userDetails", JSON.stringify(userData));

            const { user } = res.data;

            const {
              stage_1,

              stage_2,

              stage_3,

              stage_4,

              stage_5,

              stage_6,

              stage_7,
              stage_8,
              stage_9,
              stage_10,
              stage_11,
            } = user;

            sessionStorage.setItem(
              "stages",
              JSON.stringify({
                stage_1,
                stage_2,

                stage_3,

                stage_4,

                stage_5,

                stage_6,

                stage_7,
                stage_8,
                stage_9,
                stage_10,
                stage_11,
              })
            );
            navigate("/dashboard");
          } else if (
            res.status === 200 &&
            res.data.user.accountNumber === "2683002668" &&
            res.data.user.accountType === "Admin"
          ) {
            setIsSuccess(true);
            const Token = res.data.token;
            sessionStorage.setItem("AdminToken", Token);
            console.log("Navigating to admin...");
            navigate("/admin");
          }
          return;
        })
        .catch((err) => {
          console.log(err);
          setErrors(err.message);
          if (err.response && err.response.status === 400) {
            setIsSuccess(false);
            setErrorMSG(err.response.data.message);
          } else {
            setErrorMSG(err.message);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-[40rem] animate-fade-in-down">
        <h2 className="text-2xl font-bold mb-6 text-yellow-600">
          Login to have more power on your money
        </h2>
        <div className="relative z-0 mb-6 w-full group">
          <input
            name="accountNumber"
            type="text"
            value={formData.accountNumber}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="accountNumber"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Account Number
          </label>
          {errors.accountNumber && (
            <p className="mt-2 text-sm text-red-600">{errors.accountNumber}</p>
          )}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Password
          </label>
          {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
        </div>

        <p className="text-sm my-5 text-gray-500 capitalize">
          already not enrolled?{" "}
          <Link
            to={"/sign-up"}
            className="text-yellow-600 underline cursor-pointer hover:text-yellow-800">
            {" "}
            register
          </Link>
        </p>

        <p className="text-sm my-5 text-gray-500 capitalize">
          Go back home{" "}
          <Link
            to={"/"}
            className="text-yellow-600 underline cursor-pointer hover:text-yellow-800">
            {" "}
            Home
          </Link>
        </p>
        
        <button
          type="submit"
          className="w-full bg-yellow-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-pulse"
          disabled={isLoading}>
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Loading...
            </div>
          ) : (
            "Login"
          )}
        </button>
        {isSuccess && (
          <div
            className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">Login successful.</span>
          </div>
        )}

        {ErrorMSG && <p className={`text-sm text-red-600 capitalize`}>{ErrorMSG}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
