import { useEffect, useState } from "react";
import Admin from "../Admin/Admin";


export const AdminAuthenticator = () => {
      const [token, setToken] = useState<string | null>(null);
      useEffect(() => {
            const Token = sessionStorage.getItem("AdminToken");
            setToken(Token);
      }, [] );
 
      if (token) {
            return <Admin />;
      }
      return <div className={`font-bold uppercase text-3xl animate-pulse text-red-500 text-center`}>not authenticated </div>;
};
