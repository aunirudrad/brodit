import React from 'react';

const SingleServiceCard = ({ service }) => {
  const subServices = service.sub_services || [];

  return (
    <div className="mt-12">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">{service.title} - Sub Services</h3>
      
      {subServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subServices.map((sub, index) => (
            <div key={sub.id || index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
              {/* Service Image */}
              {sub.image && (
                <div className="h-40 bg-gray-200 overflow-hidden flex items-center justify-center">
                  <img src={sub.image} alt={sub.title} className="w-full h-full object-cover" />
                </div>
              )}
              
              {/* Service Content */}
              <div className="p-6">
                {/* Title */}
                <h4 className="text-lg font-bold text-gray-800 mb-2">{sub.title}</h4>
                
                {/* Short Description */}
                {sub.short_description && (
                  <p className="text-sm text-gray-600 mb-3">{sub.short_description}</p>
                )}
                
                {/* Details */}
                {sub.details && (
                  <p className="text-xs text-gray-500 h-10 mb-4 line-clamp-2">{sub.details}</p>
                )}
                
                {/* Tags */}
                {sub.tags && sub.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {sub.tags.map((tag, idx) => (
                      <span key={idx} className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Technologies */}
                {sub.technologies && sub.technologies.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {sub.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Pricing & Timeline */}
                <div className="flex justify-between items-center mb-4 pt-4 border-t border-gray-200">
                  {sub.starting_price && (
                    <div>
                      <p className="text-xs text-gray-600">Starting at</p>
                      <p className="text-lg font-bold text-cyan-600">{sub.starting_price}</p>
                    </div>
                  )}
                  {sub.delivery_time && (
                    <div className="text-right">
                      <p className="text-xs text-gray-600">Delivery</p>
                      <p className="text-sm font-semibold text-gray-800">{sub.delivery_time}</p>
                    </div>
                  )}
                </div>
                
                {/* Learn More Button */}
                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center py-8">No sub-services available for this service.</p>
      )}
    </div>
  );
};

export default SingleServiceCard;