import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Slider from 'react-slick';

const ClientMessage = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        let mounted = true;
        fetch('/ClientFeedBack.json')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to load feedbacks');
                return res.json();
            })
            .then((data) => {
                if (!mounted) return;
                const list = data.feedbacks || [];
                // Get top 3 featured feedbacks or top 3 overall
                const featured = list.filter(fb => fb.is_featured === true);
                const topThree = (featured.length >= 3 ? featured : list).slice(0, 3);
                setFeedbacks(topThree);
            })
            .catch((err) => {
                console.error(err);
                setFeedbacks([]);
            })
            .finally(() => mounted && setLoading(false));

        return () => (mounted = false);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        beforeChange: (_, next) => setCurrentSlide(next)
    };

    if (loading) return <div className="py-20 text-center">Loading testimonials...</div>;
    if (feedbacks.length === 0) return null;

    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <div className="text-cyan-500 uppercase tracking-widest text-xl mb-3">
                        What Client Says
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                        Customer Feedback
                    </h2>
                </div>

                {/* Testimonials Slider */}
                <Slider {...settings}>
                    {feedbacks.map((feedback) => (
                        <div key={feedback.id} className="px-4">
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                {/* Client Image */}
                                <div className="relative shrink-0">
                                    <div className="w-88 h-88 rounded-full overflow-hidden bg-gray-300">
                                        <img
                                            src={feedback.image}
                                            alt={feedback.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/192?text=' + feedback.name.charAt(0);
                                            }}
                                        />
                                    </div>
                                    <div className='absolute top-1/6 left-7/8'>
                                        <FaQuoteLeft size={50} />
                                    </div>
                                </div>

                                {/* Feedback Content */}
                                <div className="flex-1">
                                    {/* Testimonial Text with Quote */}
                                    <div className="mb-6">
                                        <p className="text-gray-600 text-base md:text-lg italic mb-4 leading-relaxed">
                                            {feedback.review}
                                        </p>
                                    </div>

                                    {/* Client Info */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                                            {feedback.name}
                                        </h3>
                                        <p className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">
                                            {feedback.designation}, {feedback.company}
                                        </p>
                                    </div>
                                </div>

                                {/* Slide Number Badge */}
                                <div className="hidden lg:flex flex-col items-center gap-4 ml-8">
                                    <div className="text-5xl font-bold text-gray-200">
                                        {String(currentSlide + 1).padStart(2, '0')}
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        {feedbacks.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`w-1.5 h-4 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide
                                                        ? 'bg-cyan-500 h-6'
                                                        : 'bg-gray-300'
                                                    }`}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ClientMessage;