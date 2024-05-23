import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className='bg-gray-800 z-10 text-gray-300 py-8'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col lg:flex-row justify-between'>
					{/* Links Section */}
					<div className='flex flex-col md:flex-row md:space-x-8'>
						<div className='mb-6 md:mb-0'>
							<h4 className='text-lg font-semibold mb-2'>Information</h4>
							<ul className='space-y-1'>
								<li>
									<a
										href='/privacy-cookies-security-legal'
										onMouseEnter={(e) => (e.currentTarget.style.color = "blue")}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = "inherit")
										}
									>
										Privacy, Cookies, Security & Legal
									</a>
								</li>
								<li>
									<a
										href='/notice-of-data-collection'
										onMouseEnter={(e) => (e.currentTarget.style.color = "blue")}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = "inherit")
										}
									>
										Notice of Data Collection
									</a>
								</li>
								<li>
									<a
										href='/general-terms-of-use'
										onMouseEnter={(e) => (e.currentTarget.style.color = "blue")}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = "inherit")
										}
									>
										General Terms of Use
									</a>
								</li>
								<li>
									<a
										href='/online-access-agreement'
										onMouseEnter={(e) => (e.currentTarget.style.color = "blue")}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = "inherit")
										}
									>
										Online Access Agreement
									</a>
								</li>
								<li>
									<a
										href='/ad-choices'
										onMouseEnter={(e) => (e.currentTarget.style.color = "blue")}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = "inherit")
										}
									>
										Ad Choices
									</a>
								</li>
								<li>
									<a
										href='/report-fraud'
										onMouseEnter={(e) => (e.currentTarget.style.color = "blue")}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = "inherit")
										}
									>
										Report Fraud
									</a>
								</li>
							</ul>
						</div>
						<div className='mb-6 md:mb-0'>
							<h4 className='text-lg font-semibold mb-2'>About</h4>
							<ul className='space-y-1'>
								<li>About</li>
								<li>Careers</li>
								<li>Diversity and Accessibility</li>
								<li>Sitemap</li>
							</ul>
						</div>
					</div>
					{/* Legal Notice Section */}
					<div className='lg:max-w-xl'>
						<h4 className='text-lg font-semibold mb-2'>Legal Information</h4>
						<p className='text-sm mb-4'>
							1. You must be the primary account holder of an eligible consumer account...
						</p>
						<p className='text-sm mb-4'>
							2. Enrollment with Zelle® through Online® or Business Online® is required...
						</p>
						<p className='text-sm'>
							Investment and Insurance Products are: Not Insured by the FDIC or Any Federal
							Government Agency...
						</p>
					</div>
				</div>
				{/* Disclaimer and Copyright */}
				<div className='mt-8 border-t border-gray-700 pt-4 text-xs text-gray-500'>
					<p>
						Android, Chrome, Google Pay, Google Pixel, Google Play, Wear OS by Google, and the
						Google Logo are trademarks of Google LLC...
					</p>
					<p>© 1999 - 2024. NMLSR ID 399801</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
