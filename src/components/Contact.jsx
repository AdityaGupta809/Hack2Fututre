import React from 'react'

const Contact = () => {
    const socialLinks = [
        { name: 'Instagram', icon: '📸', link: '#', color: 'hover:border-pink-400 hover:text-pink-400' },
        { name: 'Twitter', icon: '🐦', link: '#', color: 'hover:border-blue-400 hover:text-blue-400' },
        { name: 'Discord', icon: '💬', link: '#', color: 'hover:border-indigo-400 hover:text-indigo-400' },
        { name: 'LinkedIn', icon: '💼', link: '#', color: 'hover:border-blue-500 hover:text-blue-500' }
    ]

    const contactInfo = [
        { label: 'Email', value: 'hack2future@example.com', icon: '📧' },
        { label: 'Phone', value: '+91 98765 43210', icon: '📱' },
        { label: 'Location', value: 'Tech Campus, Bangalore', icon: '📍' }
    ]

    const teamMembers = [
        { name: 'John Doe', role: 'Lead Organizer', icon: '👨‍💼' },
        { name: 'Jane Smith', role: 'Technical Head', icon: '👩‍💻' },
        { name: 'Alex Johnson', role: 'Outreach Lead', icon: '🤝' }
    ]

    return (
        <section id="contact" className="relative z-30 py-16 md:py-32 px-4 sm:px-6 md:px-16 lg:px-32">
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] bg-[#2563EB]/10 blur-[150px] md:blur-[200px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight section-heading">
                        CONTACT US
                    </h2>
                    <p className="text-white/60 mt-3 md:mt-4 max-w-xl mx-auto text-sm sm:text-base px-4">
                        Have questions? Reach out to us through any of the channels below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {/* Contact Info Card */}
                    <div className="p-5 md:p-8 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl backdrop-blur-sm">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                            <span>📞</span> Quick Contact
                        </h3>
                        <div className="space-y-3 md:space-y-4">
                            {contactInfo.map((info) => (
                                <div key={info.label} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl hover:bg-white/10 transition-all duration-300">
                                    <span className="text-xl md:text-2xl">{info.icon}</span>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-white/50 text-xs md:text-sm">{info.label}</p>
                                        <p className="text-white font-medium text-sm md:text-base truncate">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Team Card */}
                    <div className="p-5 md:p-8 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl backdrop-blur-sm">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                            <span>👥</span> Organizing Team
                        </h3>
                        <div className="space-y-3 md:space-y-4">
                            {teamMembers.map((member) => (
                                <div key={member.name} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl hover:bg-white/10 transition-all duration-300">
                                    <span className="text-xl md:text-2xl">{member.icon}</span>
                                    <div>
                                        <p className="text-white font-medium text-sm md:text-base">{member.name}</p>
                                        <p className="text-white/50 text-xs md:text-sm">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social Links Card */}
                    <div className="p-5 md:p-8 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl backdrop-blur-sm md:col-span-2 lg:col-span-1">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                            <span>🌐</span> Follow Us
                        </h3>
                        <p className="text-white/60 mb-4 md:mb-6 text-sm md:text-base">
                            Stay updated with the latest news
                        </p>
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    className={`flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white/5 border border-white/10 rounded-lg md:rounded-xl text-white hover:bg-white/10 transition-all duration-300 ${social.color}`}
                                    title={social.name}
                                >
                                    <span className="text-xl md:text-2xl">{social.icon}</span>
                                    <span className="font-medium text-sm md:text-base">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
