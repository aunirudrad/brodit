import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { IoGlobeOutline } from 'react-icons/io5';

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        fetch('/TeamInfo.json')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to load team info');
                return res.json();
            })
            .then((data) => {
                if (!mounted) return;
                setTeamMembers(data.team || []);
            })
            .catch((err) => {
                console.error(err);
                setTeamMembers([]);
            })
            .finally(() => mounted && setLoading(false));

        return () => (mounted = false);
    }, []);

    const socialIcons = {
        facebook: FaFacebook,
        x: FaTwitter,
        linkedin: FaLinkedin,
        instagram: FaInstagram,
        portfolio: IoGlobeOutline,
    };

    if (loading) return <div className="py-20 text-center">Loading team information...</div>;
    if (teamMembers.length === 0) return null;

    return (
        <section className="py-20 md:py-32 bg-linear-to-br from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <div className="text-cyan-500 uppercase tracking-widest text-xl mb-4">
                        OUR TEAM
                    </div>
                    <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900 mb-2">
                        We Are Energetic <br /> Experts
                    </h2>
                    
                </div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Member Image Container */}
                            <div className="h-80 flex items-center justify-center overflow-hidden">
                                <div className='m-18'>
                                    <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full rounded-full object-cover"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/300x400?text=' + member.name.charAt(0);
                                    }}
                                />
                                </div>
                            </div>

                            {/* Member Info */}
                            <div className="p-6 text-center">
                                {/* Name */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {member.name}
                                </h3>

                                {/* Designation */}
                                <p className="text-gray-500 text-sm mb-6 font-medium">
                                    {member.designation}
                                </p>

                                {/* Social Media Links */}
                                <div className="flex justify-center gap-4">
                                    {member.social_media_links &&
                                        Object.entries(member.social_media_links).map(([key, url]) => {
                                            const IconComponent = socialIcons[key];
                                            if (!IconComponent) return null;
                                            return (
                                                <a
                                                    key={key}
                                                    href={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-cyan-100 text-cyan-600 hover:text-cyan-700 transition-all duration-300"
                                                    title={key.charAt(0).toUpperCase() + key.slice(1)}
                                                >
                                                    <IconComponent className="w-5 h-5" />
                                                </a>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;