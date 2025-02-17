import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Services from "./components/Service";
import Investments from "./components/Section2";
import TravelInfoComponent from "./components/ExchangeIntro";
import Security from "./components/Security";
import About from "./components/About";
import INDEX from "./components/INDEX";
import ContactCenter from "./components/Contact";
import CurrencyRates from "./components/CurrencyRate";
import CurrencyConverter from "./components/CurrencyConverter";
import SavingComponent, { QRComponent } from "./components/Savings";
import FAQ from "./components/Faq";
import SupportButton from "./components/SupportButton";
import SignUpForm from "./components/Auth/Sign-up";
import LoginForm from "./components/Auth/Sign-In";
import CardContainer from "./components/DashBoard/Card";
import Dashboard from "./components/DashBoard/Dashboard";
import OTPPage from "./components/OTP";
import { InternationalTransfer, TransferToMyAccounts, TransferToOtherBanks } from "./components/DashBoard/Transfer";
import Profile from "./components/DashBoard/Profile";
import UserSecurity from "./components/DashBoard/Security";
import ResetPasswordForm from "./components/DashBoard/Reset";
import Support from "./components/DashBoard/Support";
import NotifyUser from "./components/Admin/NotifyUser";
import SendEmail from "./components/Admin/SendEmail";
import CardManager from "./components/DashBoard/ManageCards";
import UserList from "./components/Admin/MangeUser";
import Payroll from "./pages/Payroll";
import Investement from "./pages/Investement";
import Central from "./pages/Central";
import OnlineMobile from "./pages/OnlineMobile";
import History from "./pages/History";
import Heloc from "./pages/Heloc";
import PersonalChecking from "./pages/PersonalChecking";
import GiftCard from "./pages/GiftCard";
import HomeMortguage from "./pages/HomeMortguage";
import { AdminAuthenticator } from "./components/Auth/AdminAuthenticator";
export const UserDataCOntext = React.createContext<userDetailsType | null>( null );

export type userDetailsType = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  accountType: string;
  address: string;
  postalCode: string;
  state: string;
  password: string;
  accountPin: string;
  agree: boolean;
  kycStatus: string;
  country: string;
  currency: string;
  accounts: {
    accountId: string;
    accountNumber: number;
    type: string;
    balance: number;
    currency: string;
    transactions: any[];
  }[];
  dateOfAccountCreation: string;
};

function App () {
  const [USER, setUSER] = useState<userDetailsType | null>( null );
  const [isAuthenticated, setisAuthenticated] = useState( false );

  useEffect( () => {
    const storedUserDetails = sessionStorage.getItem( "userDetails" );
    if ( storedUserDetails ) {
      setUSER( JSON.parse( storedUserDetails ) );
    }
  }, [] );

  function extractUserDetails ( userDetails: userDetailsType, token: string ) {
    if ( userDetails ) {
      setUSER( userDetails );
    }
    if ( token !== "" ) setisAuthenticated( true );
  }

  return (
    <div className='App'>
      <SupportButton />
      <UserDataCOntext.Provider value={ USER }>
        <Routes>
          <Route path='/' element={ < INDEX /> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/investments' element={ <Investments /> } />
          <Route path='/travel-info' element={ <TravelInfoComponent /> } />
          <Route path='/security' element={ <Security /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <ContactCenter /> } />
          <Route path='/rates' element={ <CurrencyRates /> } />
          <Route path='/converter' element={ <CurrencyConverter /> } />
          <Route path='/saving' element={ <SavingComponent /> } />
          <Route path='/saving-pot' element={ <QRComponent /> } />
          <Route path='/FAQs' element={ <FAQ /> } />
          <Route path='/sign-up' element={ <SignUpForm /> } />
          <Route path='/sign-in' element={ <LoginForm extractUserDetails={ extractUserDetails } /> } />
          <Route path='/otp' element={ <OTPPage /> } />
          <Route path='/payroll' element={ <Payroll /> } />
          <Route path='/investment' element={ <Investement /> } />
          <Route path='/central' element={ <Central /> } />
          <Route path='/onlinemobile' element={ <OnlineMobile /> } />
          <Route path='/history' element={ <History /> } />
          <Route path='/heloc' element={ <Heloc /> } />
          <Route path='/personal-checking' element={ <PersonalChecking /> } />
          <Route path='/gift-card' element={ <GiftCard /> } />
          <Route path='/Home-mor' element={ <HomeMortguage /> } />

          {/* user dashboard */ }
          <Route
            path='/dashboard'
            element={
              isAuthenticated ? (
                <Dashboard />
              ) : (
                <LoginForm extractUserDetails={ extractUserDetails } />
              )
            }
          >
            <Route path='/dashboard/add-newCard' element={ <CardContainer /> } />
            <Route path='/dashboard/manage-cards' element={ <CardManager /> } />

            {/* transfer routes */ }
            <Route path='my-accounts' element={ <TransferToMyAccounts /> } />
            <Route path='other-banks' element={ <TransferToOtherBanks /> } />
            <Route path='international' element={ <InternationalTransfer /> } />

            {/* account routes */ }
            <Route path='/dashboard/profile' element={ <Profile /> } />
            <Route path='/dashboard/security' element={ <UserSecurity /> }>
              <Route
                path='/dashboard/security/reset-password'
                element={ <ResetPasswordForm /> }
              />
            </Route>

            {/* exchange routes */ }
            <Route path='/dashboard/rates' element={ <CurrencyRates /> } />
            <Route path='/dashboard/currencyExchange' element={ <CurrencyConverter /> } />

            {/* support route */ }
            <Route path='/dashboard/support' element={ <Support /> } />
          </Route>

          {/* admin */ }
          <Route path='/admin' element={ <AdminAuthenticator /> }>
            <Route path='/admin/notify-user' element={ <NotifyUser /> } />
            <Route path='/admin/users' element={ <UserList /> } />
            <Route path='/admin/send-email' element={ <SendEmail /> } />
          </Route>
        </Routes>
      </UserDataCOntext.Provider>
    </div>
  );
}

export default App;
