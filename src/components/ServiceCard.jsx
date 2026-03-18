import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white shadow-lg p-18 text-center">
      <div className="mx-auto w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
        <img src={service.image} alt={service.title} className="w-10 h-10 object-cover" />
      </div>
      <h4 className="text-xl font-semibold text-gray-800 mb-8 h-10 ">{service.title}</h4>
      <p className="text-gray-500">{service.short_description}</p>
    </div>
  );
};

export default ServiceCard;
