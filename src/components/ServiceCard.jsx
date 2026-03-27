import React from 'react';
import { Link } from 'react-router';

const ServiceCard = ({ service, onServiceClick }) => {
  const title = service.title || '';
  const description = service.short_description || '';
  const img = service.image || '';
  const subServices = service.sub_services || [];
  const cta = service.cta_link || `/services/${service.slug || service.id}`;

  return (
    <div className="bg-white shadow-lg py-16 px-8 text-left flex flex-col h-full">
      <div className="mb-4">
        <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
          {img ? <img src={img} alt={title} className="w-[60%] object-cover" /> : <div className="w-10 h-10 bg-gray-200 rounded-full" />}
        </div>
        <div className='text-center h-30 my-4'>
          <h4 className="text-xl mb-2 font-semibold text-gray-800 h-15">{title}</h4>
          <p className="text-sm text-gray-500 h-10">{description}</p>
        </div>
      </div>

      {subServices.length > 0 && (
        <ul className=" mb-6 list-disc list-inside text-gray-600 space-y-2 flex-1">
          {subServices.map((sub) => (
            <li key={sub.id || sub.title} className="text-sm">{sub.title}</li>
          ))}
        </ul>
      )}

      <div className="text-center mt-auto">
        <button onClick={() => onServiceClick(service.id)} className="inline-block text-sm text-cyan-600 border border-cyan-600 px-4 py-2 rounded hover:bg-cyan-600 hover:text-white transition">
          {service.cta_text || 'Learn More'}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;