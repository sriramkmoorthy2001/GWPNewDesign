import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

// Public asset paths
const darkImg = "/gwp-b.webp";
const lightImg = "/gwp-w.webp";

const Footer = ({ isDark }) => {
  return (
    <footer
      className={`relative pt-0 pb-10 px-8 md:px-16 ${
        isDark ? "bg-[#050510] text-gray-400" : "bg-gray-100 text-gray-600"
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 pt-16 mb-16">
          <div className={`flex justify-start w-24 h-20 md:w-36 md:h-28 lg:mx-8`}>
            <img
              src={isDark ? darkImg : lightImg}
              alt="GWP Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Links Grid */}
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 text-sm">
            {/* Column 1: Company */}
            <div className="space-y-4">
              <h3
                className={`font-bold text-lg mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-400 block transition-colors">
                    Contact us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Enterprise Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Small to Medium Business
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Services 1 */}
            <div className="space-y-4">
              <h3
                className={`font-bold text-lg mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Application Support Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Enterprise Platform Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    CRM Implementation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Software Product Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Quality Engineering & Assurance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Engineering Research & Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Technology Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Services 2 */}
            <div className="space-y-4">
              <div className="hidden md:block md:h-11"></div>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Business Process Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Data & AI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Agentic AI Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Intelligent Business Automations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    GWP Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Experimentation & Optimization
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Services 3 */}
            <div className="space-y-4">
              <div className="hidden md:block md:h-11"></div>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Digital Strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Sustainability & Resilience
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Experience Studio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Content Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Branding
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Games Production & Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: Partners */}
            <div className="space-y-4">
              <h3
                className={`font-bold text-lg mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Partners
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Artech
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 block transition-colors">
                    Ladder7
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Social + Copyright + Locations */}
        <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-end gap-8">
          {/* Left: Social & Copyright */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Visit us on LinkedIn"
                className={`p-3 md:p-2 rounded bg-white text-blue-900 hover:scale-110 transition-transform shadow-md`}
              >
                <Linkedin
                  size={24}
                  fill="currentColor"
                  className="stroke-none"
                />
              </a>
              <a
                href="#"
                aria-label="Send us an email"
                className={`p-3 md:p-2 rounded bg-white text-blue-900 hover:scale-110 transition-transform shadow-md`}
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-sm">
              © Copyright 2025 | Global Web Production LLC | All Rights Reserved
            </p>
          </div>

          {/* Right: Locations */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm">
            {/* India */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {/* India Flag SVG */}
                <svg
                  className="w-8 h-6 rounded shadow-sm overflow-hidden"
                  viewBox="0 0 30 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="30" height="20" fill="#FFFFFF" />
                  <rect width="30" height="6.6" fill="#FF9933" />
                  <rect y="13.3" width="30" height="6.7" fill="#138808" />
                  <circle cx="15" cy="10" r="2.5" fill="#000080" />
                </svg>
                <span
                  className={`font-bold text-lg ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  INDIA
                </span>
              </div>
              <p
                className={`leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Trivandrum,
                <br />
                kerala
              </p>
            </div>

            {/* USA */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {/* USA Flag SVG */}
                <svg
                  className="w-8 h-6 rounded shadow-sm overflow-hidden"
                  viewBox="0 0 30 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="30" height="20" fill="#B22234" />
                  <path
                    d="M0,2.2 H30 M0,6.6 H30 M0,11 H30 M0,15.4 H30"
                    stroke="#FFFFFF"
                    strokeWidth="2.2"
                  />
                  <rect width="12" height="11" fill="#3C3B6E" />
                  <path
                    d="M2,2 h8 M2,5 h8 M2,8 h8"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    strokeDasharray="1,2"
                  />
                </svg>
                <span
                  className={`font-bold text-lg ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  USA
                </span>
              </div>
              <p
                className={`leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Hourglass ST,
                <br />
                Temecula, CA
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
