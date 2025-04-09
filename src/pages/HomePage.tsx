import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24"> {/* Added spacing between sections */}
      {/* Hero Section - Refined Layout */}
      <section className="relative bg-gradient-to-br from-pink-50 to-white py-20 rounded-md overflow-hidden"> {/* Increased padding, softer gradient, rounded corners */}
        {/* Increased horizontal padding (px-12 md:px-20 lg:px-24) to push content towards center */}
        <div className="container mx-auto px-12 md:px-20 lg:px-24 grid md:grid-cols-5 gap-12 items-center"> {/* Adjusted grid, increased gap */}
          {/* Text Content - Takes more space */}
          <div className="md:col-span-3 text-center md:text-left"> {/* Centered text on mobile */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight"> {/* Larger heading, adjusted margin */}
              Sarah Liu
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0"> {/* Increased text size, adjusted margin, max-width */}
              Connecting Kiwi Brands with China's Digital Market
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"> {/* Stack buttons vertically on small screens */}
              <Link
                to="/contact"
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center" // Increased padding, added shadow
              >
                Contact Me
              </Link>
              <Link
                to="/about"
                className="bg-white hover:bg-gray-100 text-gray-700 font-medium py-3 px-8 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 text-center" // Increased padding, added shadow
              >
                Learn More
              </Link>
            </div>
          </div>
          {/* Image - Takes less space, adjusted styling */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <img
						  src="/images/sarahliu1.png"
						  alt="Sarah Liu"
						  className="rounded-2xl w-80 h-auto object-cover border-4 border-white shadow-md"
						/>
          </div>
        </div>
      </section>

      {/* Digital Marketing Expert Section - Minor adjustments */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"> {/* Adjusted margin */}
          Digital Marketing Expert
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-12 text-lg"> {/* Ensured leading-relaxed */}
          With over 15 years of experience, Sarah Liu specializes in helping New Zealand businesses effectively reach and engage the Chinese market through comprehensive digital marketing strategies. Whether your business aims to export to China or import products for the local New Zealand market, Sarah delivers tailored digital solutions that drive results in e-commerce, retail, travel, and education sectors.
        </p>

        {/* Service Cards - Added hover effect */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-400">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Production</h3> {/* Adjusted margin */}
            <p className="text-gray-600 text-sm leading-relaxed"> {/* Ensured leading-relaxed */}
              Expert in creating engaging digital media including videos and landing pages that drive conversions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-400">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Advertising Strategy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Planning and managing targeted advertising campaigns across multiple platforms.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-400">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Sales Localization</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Adapting your sales approach and content to effectively resonate with local audiences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-400">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Proficient in AI Tools</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Leveraging a range of AI-powered tools to streamline workflows, enhance content quality, and improve overall marketing efficiency.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
