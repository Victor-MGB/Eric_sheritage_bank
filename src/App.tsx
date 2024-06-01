import React, { useState } from "react";
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
import SignUpForm from "./components/Sign-up";
import LoginForm from "./components/Sign-In";
import CardContainer from "./components/DashBoard/Card";
import Dashboard from "./components/DashBoard/Dashboard";
import OTPPage from "./components/OTP";
import { InternationalTransfer, TransferToMyAccounts, TransferToOtherBanks } from "./components/DashBoard/Transfer";
import Profile from "./components/DashBoard/Profile";
import UserSecurity from "./components/DashBoard/Security";
import ResetPasswordForm from "./components/DashBoard/Reset";
import Support from "./components/DashBoard/Support";
import Admin from "./components/Admin/Admin";
import NotifyUser from "./components/Admin/NotifyUser";
import SendEmail from "./components/Admin/SendEmail";
import ManageUsers from "./components/Admin/MangeUser";
export const UserDataCOntext = React.createContext<userDetailsType | null>(null);

type userDetailsType = {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	password: string;
};
function App() {
	const [USER, setUSER] = useState<userDetailsType | null>(null);

	// This function extracts user details from an login components with properties for firstName, lastName, email, phoneNumber, and password.
	// It checks if the userDetails object is truthy (i.e., not null or undefined), and if so, it sets the USER state with the provided userDetails object.
	function extractUserDetails(userDetails: userDetailsType) {
		if (userDetails) {
			setUSER(userDetails);
		}
	}

	return (
		<div className='App'>
			<SupportButton />
			<UserDataCOntext.Provider value={USER && USER}>
				<Routes>
					<Route path='/' element={<INDEX />} />
					<Route path='/services' element={<Services />} />
					<Route path='/investments' element={<Investments />} />
					<Route path='/travel-info' element={<TravelInfoComponent />} />
					<Route path='/security' element={<Security />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<ContactCenter />} />
					<Route path='/rates' element={<CurrencyRates />} />
					<Route path='/converter' element={<CurrencyConverter />} />
					<Route path='/saving' element={<SavingComponent />} />
					<Route path='/saving-pot' element={<QRComponent />} />
					<Route path='/FAQs' element={<FAQ />} />
					<Route path='/sign-up' element={<SignUpForm />} />
					<Route path='/sign-in' element={<LoginForm extractUserDetails={extractUserDetails} />} />
					<Route path='/otp' element={<OTPPage />} />

					{/* user dashboard */}
					<Route path='/dashboard' element={<Dashboard />}>
						<Route path='/dashboard/cards' element={<CardContainer />} />
						<Route path='/dashboard/add-newCard' element={<CardContainer />} />
						<Route path='/dashboard/manage-cards' element={<CardContainer />} />

						{/* transfer routes */}
						<Route path='my-accounts' element={<TransferToMyAccounts />} />
						<Route path='other-banks' element={<TransferToOtherBanks />} />
						<Route path='international' element={<InternationalTransfer />} />

						{/* account routes */}
						<Route path='/dashboard/profile' element={<Profile />} />
						<Route path='/dashboard/security' element={<UserSecurity />}>
							<Route
								path='/dashboard/security/reset-password'
								element={<ResetPasswordForm />}
							/>
						</Route>

						{/* exchange routes */}
						<Route path='/dashboard/rates' element={<CurrencyRates />} />
						<Route path='/dashboard/currencyExchange' element={<CurrencyConverter />} />

						{/* support route */}
						<Route path='/dashboard/support' element={<Support />} />
					</Route>

					{/* admin */}
					<Route path='/admin' element={<Admin />}>
						<Route path='/admin/notify-user' element={<NotifyUser />} />
						<Route path='/admin/users' element={<ManageUsers />} />
						<Route path='/admin/send-email' element={<SendEmail />} />
					</Route>
				</Routes>
			</UserDataCOntext.Provider>
		</div>
	);
}

export default App;
