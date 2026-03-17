import React from 'react';
import img1 from '../assets/img10.jpg';
import img2 from '../assets/img11.jpg';
import img3 from '../assets/img12.jpg';

const Card = ({ image, label, title }) => (
    <div className="relative w-full hover:transform hover:-translate-y-1/8 hover:animate-pulse">
        <img src={image} alt={title} className="w-full h-56 md:h-64 lg:h-48 object-cover shadow-lg" />

        <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 bg-white px-6 py-4 shadow-md text-center w-64">
            <div className="text-xs text-cyan-600 uppercase tracking-widest mb-2">{label}</div>
            <div className="text-lg font-semibold text-gray-800">{title}</div>
        </div>
    </div>
);

const DiscoverSection = () => {
    return (
        <section className=" text-white">
            <div className="relative bg-[#14181A] w-full mx-auto min-h-48 px-6 pt-14 pb-42">
                {/* Intro */}
                <div className='max-w-6xl mx-auto'>

                    <div className=" flex justify-between gap-12">
                        <div>
                            <div className="text-cyan-400 text-xl tracking-widest uppercase mb-3">Discover our company</div>
                            <h2 className="text-2xl md:text-3xl lg:text-3xl font-extrabold leading-tight">
                                Increase organic website traffic
                                <br />
                                and enhance web presence.
                            </h2>
                        </div>

                        <div className="text-gray-300 text-xl md:pl-8">
                            <p className="max-w-md">
                                Brobit is a privately owned IT Support and IT Services business formed in 2008. Today we're proud to boast a
                                strong team of IT engineers who thrive on rolling up their sleeves and solving your IT problems and meeting
                                your business needs.
                            </p>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="absolute top-44 max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
                        <div className="flex justify-center md:justify-start">
                            <Card image={img1} label="Our Services" title="How We Can Help" />
                        </div>

                        <div className="flex justify-center">
                            <Card image={img2} label="Our Expertise" title="Why Choose Us" />
                        </div>

                        <div className="flex justify-center md:justify-end">
                            <Card image={img3} label="Our Customers" title="Client Testimonials" />
                        </div>
                    </div>
                </div>

                {/* Footer small link */}
                
            </div>
            <div className="mt-28 min-h-48 flex justify-center items-center text-center text-gray-400">
                    <p>
                        Stop wasting time and money on technology. <a href="#" className="text-cyan-400 underline">Explore our company</a>
                    </p>
                </div>
        </section>
    );
};

export default DiscoverSection;