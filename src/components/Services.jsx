import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from './ServiceCard';
import ExploreCard from './ExploreCard';
import SingleServiceCard from './SingleServiceCard';

const Services = ({ limit }) => {
  const data = useLoaderData();
  const services = (data && data.main_services) || [];
  const displayedServices = services.slice(0, limit); // ensure only 3 main services
  const [btnClick, setBtnClick] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const handleServiceClick = (serviceId) => {
    setSelectedServiceId(serviceId);
    setBtnClick(true);
  };

  const selectedService = services.find(s => s.id === selectedServiceId);

  return (
    <section className="py-20">
      <div className="max-w-[80%] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-cyan-500 uppercase tracking-widest text-sm mb-3">Our Services</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Stay Up, Stay Running,
            <br />
            Stay Protected
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {displayedServices.map((s) => (
            <ServiceCard key={s.id} service={s} onServiceClick={handleServiceClick} />
          ))}

        </div>
        <div>
          {btnClick && selectedService && (
            <SingleServiceCard service={selectedService} />
          )}
        </div>
        
      </div>
    </section>
  );
};

export default Services;