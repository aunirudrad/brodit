import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';

const ExploreCard = () => (
  <div className="mb-20 max-w-lg mx-auto bg-white shadow-lg p-10 text-center flex flex-col items-center justify-center">
    <div className="mx-auto w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center mb-6">
      <FaArrowRight className="text-indigo-600 w-6 h-6" />
    </div>
    <h4 className="text-xl font-semibold text-gray-800 mb-3">Explore More Services</h4>
    <p className="text-gray-500 text-sm mb-6">See our complete range of services and find the right solution for your business.</p>
    <Link to="/services" className="inline-flex items-center gap-2 border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-600 hover:text-white transition">
      View All
      <FaArrowRight />
    </Link>
  </div>
);

export default ExploreCard;
