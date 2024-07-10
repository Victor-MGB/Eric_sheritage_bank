import { useEffect, useState } from "react";
import Admin from "../Admin/Admin";
import { Link } from "react-router-dom";

export const AdminAuthenticator = () => {
      const [token, setToken] = useState<string | null>(null);
      useEffect(() => {
            const Token = sessionStorage.getItem("AdminToken");
            setToken(Token);
      }, []);

      if (token) {
            return <Admin />;
      }
      return (
            <div className={`font-bold uppercase text-3xl animate-pulse text-red-500 text-center`}>
                  not authenticated to view this page <br /> <br />
                  <span>
                        {" "}
                        <Link
                              className={`p-4 border capitalize w-fit shadow-md shadow-black text-black text-xl`}
                              to={"/sign-in"}
                        >
                              login as Admin
                        </Link>
                  </span>{" "}
            </div>
      );
};
