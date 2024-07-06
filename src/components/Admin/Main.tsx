import React, { useEffect, useState } from "react";
import ViewUsers from "./Users";
import { useLocation, Outlet } from "react-router-dom";
import axios from "axios";
import { FaBars } from "react-icons/fa";

interface SentMail {
      Email: string;
      subject: string;
      message: string;
      time: string;
      date: string;
}

const MainContent: React.FC<{ opener: () => void }> = ({ opener }) => {
      const location = useLocation();
      const isOutletRoutes = ["/admin/users", "/admin/notify-user", "/admin/send-email"].includes(location.pathname);

      const { userCount, isLoading, error } = useFetchUsers();
      const [parsedData, setParsedData] = useState<SentMail[]>([]);

      useEffect(() => {
            const sentMails = localStorage.getItem("sentMails");
            const parsedData: SentMail[] = sentMails ? JSON.parse(sentMails) : [];
            setParsedData(parsedData);
      }, []);

      return (
            <>
                  <h1 className='md:text-2xl mb-[2rem] text-[15px] font-bold md:mb-6 flex items-center gap-3 '>
                        {" "}
                        <FaBars
                              onClick={() => opener()}
                              className={`md:hidden block  text-3xl mx-3 hover:text-gray-400 cursor-pointer`}
                        />{" "}
                        Welcome to the Admin Dashboard
                  </h1>
                  {isOutletRoutes ? (
                        <Outlet />
                  ) : (
                        <div className='flex-grow md:p-6 bg-gray-100 m-auto md:max-w-[100vw] '>
                              {/* active users and sent email */}
                              <div className='grid bg-white w-[100%] p-3 grid-cols-1 md:grid-cols-3 gap-6'>
                                    {/* active users */}
                                    <div className='bg-white shadow-md rounded p-6'>
                                          <h2 className='text-xl font-semibold mb-4 text-red-600'>Active Users</h2>
                                          <p>This section displays the number of active users.</p>
                                          {isLoading ? (
                                                <p>Loading...</p>
                                          ) : error ? (
                                                <p className='text-red-500'>{error}</p>
                                          ) : (
                                                <p>Total active users: {userCount}</p>
                                          )}
                                    </div>

                                    {/* emails sent */}
                                    <div className='bg-white shadow-md rounded p-6'>
                                          <h2 className='md:text-xl text-lg font-semibold mb-4 text-red-600'>
                                                Sent Emails
                                          </h2>
                                          <p>
                                                This section displays the emails and the number of emails sent to users.
                                                <p>Total mails sent: {parsedData.length}</p>
                                          </p>
                                          <div className='mt-4'>
                                                {parsedData.length > 0 ? (
                                                      <ul className={"flex flex-wrap"}>
                                                            {parsedData.map((mail, index) => (
                                                                  <li
                                                                        key={index}
                                                                        className='mb-2 p-2 border border-gray-200 rounded'
                                                                  >
                                                                        <p>
                                                                              <strong>Email:</strong> {mail.Email}
                                                                        </p>
                                                                        <p>
                                                                              <strong>Subject:</strong> {mail.subject}
                                                                        </p>
                                                                        <p>
                                                                              <strong>Message:</strong> {mail.message}
                                                                        </p>
                                                                        <p>
                                                                              <strong>Time:</strong> {mail.time}
                                                                        </p>
                                                                        <p>
                                                                              <strong>Date:</strong> {mail.date}
                                                                        </p>
                                                                  </li>
                                                            ))}
                                                      </ul>
                                                ) : (
                                                      <p>No emails sent.</p>
                                                )}
                                          </div>
                                    </div>
                              </div>

                              <div className='bg-white shadow-md rounded w-full md:p-6 mt-6 overflow-scroll overflo-x-hidden'>
                                    <h2 className='text-xl text-center md:text-left font-semibold mb-4 text-red-600'>
                                          All Users
                                    </h2>
                                    <ViewUsers />
                              </div>
                        </div>
                  )}
            </>
      );
};

export default MainContent;

const useFetchUsers = () => {
      const [userCount, setUserCount] = useState<number>(0);
      const [isLoading, setIsLoading] = useState<boolean>(false);
      const [error, setError] = useState<string | null>(null);

      useEffect(() => {
            const fetchUsers = async () => {
                  try {
                        setIsLoading(true);
                        setError(null);
                        const response = await axios.get("https://lee-man-online-banking.onrender.com/api/users");
                        setUserCount(response.data.users.length);
                  } catch (error) {
                        setError("An error occurred while fetching users. Please try again later.");
                  } finally {
                        setIsLoading(false);
                  }
            };

            fetchUsers();
      }, []);

      return { userCount, isLoading, error };
};
