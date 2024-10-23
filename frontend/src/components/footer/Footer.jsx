import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-slate-300 via-purple-300 to-blue-200 mt-10">
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div className="container mx-auto">
          {/* Quick Links and Customer Support - 4 columns on large screens, 2 columns on small screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Quick Links */}
            <div className="px-4">
              <h4 className="text-3xl font-semibold text-blueGray-700">
                Quick Links
              </h4>
              <div className="mt-6 lg:mb-0 mb-6">
                <ul className="list-unstyled">
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    Home
                  </li>
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    About Us
                  </li>
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    How It Works
                  </li>
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    Contact Us
                  </li>
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    FAQs
                  </li>
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    Blog/News
                  </li>
                </ul>
              </div>
            </div>

            {/* Customer Support */}
            <div className="px-4">
              <h4 className="text-3xl font-semibold text-blueGray-700">
                Customer Support
              </h4>
              <div className="mt-6 lg:mb-0 mb-6">
                <ul className="list-unstyled">
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    Help Center
                  </li>
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    Return & Refund Policy
                  </li>
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    Quality Check Process
                  </li>
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    Buyer Protection
                  </li>
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    Seller Guidelines
                  </li>
                </ul>
              </div>
            </div>

            {/* Legal */}
            <div className="px-4">
              <h4 className="text-3xl font-semibold text-blueGray-700">
                Legal
              </h4>
              <ul className="list-unstyled">
                <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                  Terms & Conditions
                </li>
                <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                  Privacy Policy
                </li>
                <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                  Cookie Policy
                </li>
                <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                  Disclaimer
                </li>
                <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                  Security
                </li>
              </ul>
            </div>

            {/* Connect with Us */}
            <div className="px-4">
              <h4 className="text-3xl font-semibold text-blueGray-700">
                Connect with Us
              </h4>
              <ul className="list-unstyled">
                <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                  Facebook
                </li>
                <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                  Instagram
                </li>
                <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                  Twitter
                </li>
                <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                  LinkedIn
                </li>
                <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                  YouTube
                </li>
              </ul>
            </div>
          </div>

          {/* Trust Badges and Payment Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mt-10">
            {/* Trust Badges */}
            <div className="px-4">
              <h4 className="text-3xl font-semibold text-blueGray-700">
                Trust Badges & Certifications
              </h4>
              {/* Add trust badges and certification icons here */}
            </div>

            {/* Payment Methods */}
            <div className="px-4">
              <h4 className="text-3xl font-semibold text-blueGray-700">
                Payment Methods
              </h4>
              <ul className="list-unstyled">
                <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                  Visa
                </li>
                <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                  Master Card
                </li>
                <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                  UPI
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              LOGO
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
