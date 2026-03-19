import React from 'react';
import hero from '../assets/side_img01.jpg';
import play from '../assets/icon-play.png';
import signature from '../assets/signature.png';

const Company = () => {
  return (
    <section className="bg-white py-40">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 items-center">

          {/* Left - Image with overlay and play button */}
          <div className="relative w-full overflow-hidden">
            <img src={hero} alt="Team working" className="w-full object-cover" />

            {/* subtle teal overlay */}
            <div className="absolute inset-0 bg-teal-900/40 mix-blend-multiply"></div>

            {/* Play button */}
            <button aria-label="Play video" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full border border-white/30 backdrop-blur-sm transition">
              <img src={play} alt="play" className="w-10 h-10" />
            </button>
          </div>

          {/* Right - Content */}
          <div className="py-6 w-[70%]">
            <div className="text-cyan-600 text-2xl tracking-widest uppercase mb-4">Our Company</div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
              We’ve been thriving
              <br />
              in 38 years
            </h3>

            <p className="italic font-semibold text-gray-700 mb-6">We have been providing internet and telecom services for more than 30 years!</p>

            <p className="text-gray-500 mb-6 max-w-2xl">
              Having been in business for so many years, we are one of the most experienced internet service providers around. Indeed, SkyMax was one of the first providers of business broadband in the country.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 inline-block" />Award winning services</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 inline-block" />End-to-end solutions</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 inline-block" />Dedicated management</li>
              </ul>

              <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 inline-block" />Full project management</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 inline-block" />Industry leading SLAs</li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 inline-block" />Complete option range</li>
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <button className="border border-cyan-600 text-cyan-600 px-6 py-3 text-sm font-medium hover:bg-cyan-600 hover:text-white transition">Read More</button>

              <div className="hidden md:block">
                <img src={signature} alt="signature" className="w-36 opacity-90" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Company;