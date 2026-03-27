import React from 'react';

const SingleServiceCard = ({ service }) => {
  const subServices = service.sub_services || [];

  return (
    <div className="mt-12 bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-lg">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">{service.title} - Sub Services</h3>
      
      {subServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subServices.map((sub, index) => (
            <div key={sub.id || index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{sub.title}</h4>
              {sub.description && (
                <p className="text-gray-600 text-sm">{sub.description}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No sub-services available for this service.</p>
      )}
    </div>
  );
};

export default SingleServiceCard;