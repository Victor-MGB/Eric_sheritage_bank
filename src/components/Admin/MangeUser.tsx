import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../hooks/UseSpinner";
import type { User } from "./Users.js";

const UserList: React.FC = () => {
      const [users, setUsers] = useState<User[]>([]);
      const [editBalance, setEditBalance] = useState<{ [key: string]: number }>({});
      const [loading, setLoading] = useState<boolean>(false);
      const [message, setMessage] = useState<string | null>(null);
      const [stageMessages, setStageMessages] = useState<{ [key: string]: string }>({});

      useEffect(() => {
            const fetchUsers = async () => {
                  try {
                        setLoading(true);
                        const response = await axios.get("https://lee-man-online-banking.onrender.com/api/users");
                        setUsers(response.data.users);
                        console.log(response.data);
                        setLoading(false);
                  } catch (error) {
                        console.error("Error fetching users:", error);
                        setLoading(false);
                  }
            };

            fetchUsers();
      }, []);

      const handleEditBalanceChange = (accountNumber: string, balance: number) => {
            setEditBalance((prev) => ({ ...prev, [accountNumber]: balance }));
      };

      const handleSubmitBalance = async (accountNumber: string) => {
            try {
                  setLoading(true);
                  const newBalance = editBalance[accountNumber];

                  if (newBalance !== undefined) {
                        await axios.post(
                              "https://lee-man-online-banking.onrender.com/api/update-balance",
                              JSON.stringify({
                                    accountNumber,
                                    amountToAdd: newBalance,
                              }),
                              {
                                    headers: {
                                          "Content-Type": "application/json",
                                          "Access-Control-Allow-Origin": "*",
                                          "Access-Control-Allow-Methods": "POST",
                                    },
                              }
                        );

                        // Update the user's balance in the state
                        setUsers((prevUsers) =>
                              prevUsers.map((user) => ({
                                    ...user,
                                    accounts: user.accounts.map((account) =>
                                          account.accountNumber === accountNumber
                                                ? { ...account, balance: newBalance }
                                                : account
                                    ),
                              }))
                        );

                        setLoading(false);
                        setMessage("Balance updated successfully.");
                        setTimeout(() => setMessage(null), 3000);
                  }
            } catch (error) {
                  console.error("Error updating balance:", error);
                  setLoading(false);
                  setMessage("Error updating balance.");
                  setTimeout(() => setMessage(null), 3000);
            }
      };

      const handleStageToggle = async (userId: string, stage: string, value: boolean) => {
      try {
            setLoading(true);

            // Optimistically update the user state
            setUsers((prevUsers) =>
                  prevUsers.map((user) => {
                        if (user._id === userId) {
                              return {
                                    ...user,
                                    [stage]: value, // Update the specific stage
                              };
                        }
                        return user;
                  })
            );

            const response = await axios.post(
                  `https://lee-man-online-banking.onrender.com/api/update-${stage}`,
                  {
                        userId,
                  }
            );

            if (response.status === 200 && response.data.user) {
                  const updatedUser = response.data.user;

                  // Update the state again with the server's response (if needed)
                  setUsers((prevUsers) =>
                        prevUsers.map((user) => (user._id === userId ? updatedUser : user))
                  );

                  setStageMessages((prev) => ({
                        ...prev,
                        [`${userId}-${stage}`]: "Updated successfully.",
                  }));
            }
      } catch (error: any) {
            console.error("Error updating stage:", error);

            setStageMessages((prev) => ({
                  ...prev,
                  [`${userId}-${stage}`]: "Error updating stage.",
            }));
      } finally {
            setLoading(false);
      }
};


      return (
            <div className='container mx-auto p-4 overflow-scroll overflow-x-hidden h-[100%]'>
                  <h2 className='text-2xl font-bold mb-4'>User List</h2>
                  {loading && <Spinner />}
                  {message && (
                        <div
                              className={`p-2 mb-4 ${
                                    message.includes("Error") ? "bg-red-500" : "bg-green-500"
                              } text-white`}
                        >
                              {message}
                        </div>
                  )}
                  <ul className='space-y-4 flex flex-wrap gap-4 p-2'>
                        {users
                              ? users.map((User, index) => (
                                      <li key={index} className='p-4 bg-white shadow rounded-lg'>
                                            <div className='mb-2'>
                                                  <strong>Name:</strong> {User.firstName} {User.lastName}
                                            </div>
                                            <div className='mb-2'>
                                                  <strong>Email:</strong> {User.email}
                                            </div>
                                            <ul className='space-y-2'>
                                                  {User.accounts.map((account, index) => (
                                                        <li key={index} className='text-sm text-gray-700'>
                                                              <p>Account Number: {account.accountNumber}</p>
                                                              <p>Type: {account.type}</p>
                                                              <p>Balance: {account.balance}</p>
                                                              <p>Currency: {account.currency}</p>
                                                        </li>
                                                  ))}
                                            </ul>

                                            <div className='flex items-center mb-2'>
                                                  <input
                                                        type='number'
                                                        placeholder='Enter new balance'
                                                        value={
                                                              editBalance[
                                                                    User.accounts
                                                                          .map((account) => account.balance)
                                                                          .toString()
                                                              ]
                                                        }
                                                        onChange={(e) =>
                                                              handleEditBalanceChange(
                                                                    User.accounts[0].accountNumber,
                                                                    parseFloat(e.target.value)
                                                              )
                                                        }
                                                        className='mr-2 p-2 border rounded'
                                                  />
                                                  <button
                                                        onClick={() =>
                                                              handleSubmitBalance(User.accounts[0].accountNumber)
                                                        }
                                                        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
                                                  >
                                                        Update Balance
                                                  </button>
                                            </div>

                                            <div className='flex flex-col'>
                                                  {Array.from({ length: 7 }, (_, i) => `stage_${i + 1}`).map(
                                                        (stage) => (
                                                              <div className={`flex gap-2`}>
                                                                    <label
                                                                          key={stage}
                                                                          className='flex items-center space-x-2'
                                                                    >
                                                                          <input
                                                                                type='checkbox'
                                                                                checked={User[stage]}
                                                                                onChange={(e) => {
                                                                                      handleStageToggle(
                                                                                            User._id,
                                                                                            stage,
                                                                                            e.target.checked
                                                                                      );
                                                                                      console.log("user stage", stage);
                                                                                }}
                                                                          />
                                                                          <span>
                                                                                {stage.replace("-", " ").toUpperCase()}
                                                                          </span>
                                                                    </label>
                                                                    {stageMessages[`${User._id}-${stage}`] && (
                                                                          <p
                                                                                className={`text-sm ${
                                                                                      stageMessages[
                                                                                            `${User._id}-${stage}`
                                                                                      ].includes("Error")
                                                                                            ? "text-red-600"
                                                                                            : "text-green-500"
                                                                                }`}
                                                                          >
                                                                                {stageMessages[`${User._id}-${stage}`]}
                                                                          </p>
                                                                    )}
                                                              </div>
                                                        )
                                                  )}
                                            </div>
                                      </li>
                                ))
                              : "No user at the moment"}
                  </ul>
            </div>
      );
};

export default UserList;
