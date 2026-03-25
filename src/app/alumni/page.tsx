'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, GraduationCap, Briefcase, Network, MessageSquare, Award, Presentation, Heart } from 'lucide-react';
import StickyAdmissionsBar from '@/components/StickyAdmissionsBar';

const AlumniPage = () => {
    const alumniData = [
        { name: 'Aditya Verma', role: 'Senior AI Engineer', company: 'Google', batch: 2021 },
        { name: 'Suhani Sharma', role: 'Robotics Researcher', company: 'NVIDIA', batch: 2020 },
        { name: 'Rohan Gupta', role: 'Founding Engineer', company: 'Shodh AI', batch: 2022 },
        { name: 'Ishita Kapoor', role: 'Machine Learning Lead', company: 'Microsoft', batch: 2019 },
        { name: 'Kabir Singh', role: 'Cloud Architect', company: 'Amazon', batch: 2021 },
        { name: 'Ananya Roy', role: 'Product Manager', company: 'Tesla', batch: 2020 },
        { name: 'Vikram Mehta', role: 'Cybersecurity Expert', company: 'CrowdStrike', batch: 2018 },
        { name: 'Prisha Das', role: 'Data Scientist', company: 'Apple', batch: 2022 },
        { name: 'Arjun Patel', role: 'AI Research Scientist', company: 'OpenAI', batch: 2021 },
        { name: 'Kavya Reddy', role: 'Software Engineer', company: 'Meta', batch: 2020 },
        { name: 'Rahul Kumar', role: 'DevOps Engineer', company: 'Netflix', batch: 2022 },
        { name: 'Priya Singh', role: 'Data Analyst', company: 'Spotify', batch: 2019 },
        { name: 'Amit Sharma', role: 'Backend Developer', company: 'Uber', batch: 2021 },
        { name: 'Neha Gupta', role: 'Frontend Developer', company: 'Airbnb', batch: 2020 },
        { name: 'Rohit Verma', role: 'Full Stack Developer', company: 'LinkedIn', batch: 2022 },
        { name: 'Sneha Patel', role: 'ML Engineer', company: 'Twitter', batch: 2021 },
        { name: 'Vikas Singh', role: 'Cloud Engineer', company: 'Adobe', batch: 2020 },
        { name: 'Anjali Kumar', role: 'Software Architect', company: 'Salesforce', batch: 2019 },
        { name: 'Karan Mehta', role: 'Tech Lead', company: 'Microsoft', batch: 2022 },
        { name: 'Divya Sharma', role: 'Senior Developer', company: 'Google', batch: 2021 },
        { name: 'Rajat Gupta', role: 'Product Designer', company: 'Apple', batch: 2020 }
    ];

    const engagementOpportunities = [
        {
            title: 'Mentorship Program:',
            icon: <Users className="w-8 h-8 text-accent" />,
            desc: 'Guide the next generation of engineers by sharing your industry experience and career insights.'
        },
        {
            title: 'Guest Lectures & Workshops',
            icon: <Presentation className="w-8 h-8 text-accent" />,
            desc: 'Host specialized sessions to help students bridge the gap between academia and professional life.'
        },
        {
            title: 'Placement Opportunities',
            icon: <Briefcase className="w-8 h-8 text-accent" />,
            desc: 'Support fellow Aesta-ians by providing referrals/internships within your organization.'
        },
        {
            title: 'Collaborate on Projects',
            icon: <Network className="w-8 h-8 text-accent" />,
            desc: 'Work together with current students and labs on cutting-edge research and product development.'
        },
    ];

    return (
        <main className="bg-background min-h-screen text-foreground font-orbitron overflow-x-hidden selection:bg-accent selection:text-black">
            <StickyAdmissionsBar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] lg:min-h-[702px] flex items-center justify-center overflow-hidden mt-16">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 w-full">
                    <Image
                        src="/Alumni/Alumni-hero.svg"
                        alt="Alumni Hero"
                        fill
                        className="object-cover w-full"
                        style={{
                            background: 'linear-gradient(270deg, rgba(10, 10, 10, 0.3) 0%, #000000 100%)',
                            backdropFilter: 'blur(0px)'
                        }}
                    />
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-2xl lg:max-w-3xl">
                        <h1 className="text-white font-orbitron font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap mb-6">
                            Our Alumni, Our Legacy
                        </h1>
                        <p className="text-body text-white/90 leading-relaxed text-sm sm:text-base lg:text-lg">
                            Welcome to the heart of AESTR’s enduring impact – Our Alumni Community.

                            This section features accomplished students from Suresh Gyan Vihar University (SGVU), particularly from GVSET, who have secured placements at reputed organizations. These individuals represent a strong academic foundation and industry readiness.

                            They are innovators, leaders, and problem-solvers who reflect the potential and excellence we aim to foster. Their journeys highlight real-world success and inspire the next generation of learners.
                        </p>
                    </div>
                </div>
            </section>

            {/* Alumni Spotlights Section */}
            <section className="relative bg-[#5B1DD6] py-12 sm:py-16 lg:py-20 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    {/* Section Headers */}
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-white font-orbitron font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 px-4">
                            <span className="block lg:inline">Alumni Spotlights:</span> <span className="block lg:inline">Where Innovation Takes Flight</span>
                        </h2>
                        <p className="text-body text-white/80 max-w-4xl mx-auto text-sm sm:text-base lg:text-lg px-4">
                            Meet some of our exceptional graduates who are making significant strides in diverse fields. Their journeys exemplify the practical knowledge, critical thinking, and innovative spirit fostered at AESTR.
                        </p>
                    </div>

                    {/* Alumni Cards Container - Responsive */}
                    <div className="relative overflow-hidden">
                        {/* Mobile: Static Grid */}
                        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 px-4">
                            {alumniData.slice(0, 6).map((alumni, i) => (
                                <div
                                    key={`mobile-${i}`}
                                    className="relative bg-black/80 border border-white/20 rounded-lg overflow-hidden aspect-[3.4/4]"
                                >
                                    <Image
                                        src={i < 8 ? `/Alumni/Alumni-${i + 1}.svg` : `/Alumni/Alumni-${i + 1}.jpg`}
                                        alt={alumni.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Desktop: Sliding Cards */}
                        <div className="hidden lg:block">
                            {/* Top Row - Moving Left */}
                            <div className="flex space-x-6 mb-8 animate-slide-left">
                                {alumniData.slice(0, 10).map((alumni, i) => (
                                    <div
                                        key={`top-${i}`}
                                        className="relative bg-black/80 border border-white/20 rounded-lg overflow-hidden flex-shrink-0 w-72 h-80 lg:w-80 lg:h-96"
                                    >
                                        <Image
                                            src={i < 8 ? `/Alumni/Alumni-${i + 1}.svg` : `/Alumni/Alumni-${i + 1}.jpg`}
                                            alt={alumni.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Row - Moving Right */}
                            <div className="flex space-x-6 animate-slide-right">
                                {alumniData.slice(11, 21).map((alumni, i) => (
                                    <div
                                        key={`bottom-${i}`}
                                        className="relative bg-black/80 border border-white/20 rounded-lg overflow-hidden flex-shrink-0 w-72 h-80 lg:w-80 lg:h-96"
                                    >
                                        <Image
                                            src={`/Alumni/Alumni-${i + 12}.jpg`}
                                            alt={alumni.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animation Styles */}
                <style jsx>{`
                    @keyframes slide-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes slide-right {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                    .animate-slide-left {
                        animation: slide-left 20s linear infinite;
                    }
                    .animate-slide-right {
                        animation: slide-right 20s linear infinite;
                    }
                `}</style>
            </section>

            {/* Alumni Engagement Section */}
            <section className="py-16 sm:py-20 lg:py-40 relative bg-[#D7F601] px-4 sm:px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.12)_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.2]" />
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col items-center mb-12 sm:mb-16 lg:mb-24 text-center space-y-4 sm:space-y-6 px-4">
                        <h2 className="text-black font-orbitron font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
                            <span className="block sm:inline">Alumni Engagement:</span> <span className="block sm:inline font-bold">Give Back & Grow</span>
                        </h2>
                        <p className="text-body text-black/80 max-w-4xl mx-auto text-sm sm:text-base lg:text-lg">
                            Your journey doesn't end at graduation; it's just the beginning of a lifelong connection with AESTR. We encourage our alumni to stay involved and contribute to the next generation of innovators.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
                        {[
                            { type: 'mentorship', title: 'Mentorship Program:', desc: 'Share your valuable experience by mentoring current AESTR students. Guide them through their academic and career paths.', image: '/Alumni/Mentorship.jpg' },
                            { type: 'lectures', title: 'Guest Lectures & Workshops:', desc: 'Return to campus (virtually or in person) to share your industry insights, conduct workshops, or speak about your career journey.', image: '/Alumni/guest.jpg' },
                            { type: 'placement', title: 'Internship & Placement Opportunities:', desc: 'Help open doors for current AESTR students by offering internships or full-time positions at your organization.', image: '/Alumni/internship.jpg' },
                            { type: 'projects', title: 'Collaborate on Projects:', desc: 'Explore opportunities to collaborate with AESTR\'s innovation labs or research initiatives.', image: '/Alumni/project-collabration.jpg' }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="relative bg-black/90 border border-black/30 rounded-xl overflow-hidden hover:border-accent/60 transition-all duration-300 group w-full max-w-sm mx-auto sm:max-w-none"
                            >
                                <div className="w-full h-40 sm:h-48 relative">
                                    <Image
                                        src={item.image}
                                        alt={`${item.type} engagement`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-3 sm:p-4 text-left bg-black/90 flex-1 flex flex-col justify-start">
                                    <h3 className="text-white font-orbitron font-bold text-xs sm:text-sm mb-2 group-hover:text-accent transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/80 text-xs leading-relaxed mb-0 overflow-hidden font-sans">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ready to Take the Next Step Section */}
            <section className="relative bg-[#5B1DD6] py-16 sm:py-20 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h2 className="text-white font-orbitron font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
                                Ready to Take the Next Step?
                            </h2>
                            <p className="text-body text-white/80 max-w-2xl lg:max-w-none mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg mb-6 whitespace-nowrap">
                                Want to learn more about eligibility, how to apply, scholarships, or what your career could look like?
                            </p>

                            {/* Small Section with Button */}
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                                <p className="text-body text-white/90 text-sm sm:text-base text-center lg:text-left">
                                    Reach out to our International Collaboration Desk today.
                                </p>
                                <button
                                    className="bg-[#D7F601] text-black px-6 py-3 rounded-lg border border-[#D7F601] hover:bg-transparent hover:text-[#D7F601] transition-all duration-300 text-sm sm:text-base font-medium"
                                    onClick={() => {
                                        // Navigate to home page and scroll to registration form
                                        window.location.href = '/#registration-form';
                                    }}
                                >
                                    Apply Now
                                </button>
                            </div>
                        </div>

                        {/* Right Robot Image */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[600px] xl:h-[550px]">
                                <Image
                                    src="/Other/Robo.webp"
                                    alt="Robot"
                                    fill
                                    className="object-contain scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default AlumniPage;
