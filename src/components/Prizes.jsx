import React from 'react'

const Prizes = () => {
    const mainPrizes = [
        {
            position: '2nd',
            amount: '₹25,000',
            icon: '🥈',
            color: 'from-gray-300/20 to-gray-400/20',
            borderColor: 'border-gray-400/30',
            order: 'order-2 md:order-1'
        },
        {
            position: '1st',
            amount: '₹50,000',
            icon: '🏆',
            color: 'from-yellow-400/20 to-amber-500/20',
            borderColor: 'border-yellow-400/50',
            order: 'order-1 md:order-2',
            highlight: true
        },
        {
            position: '3rd',
            amount: '₹15,000',
            icon: '🥉',
            color: 'from-amber-600/20 to-orange-600/20',
            borderColor: 'border-amber-600/30',
            order: 'order-3 md:order-3'
        }
    ]

    const specialPrizes = [
        { title: 'Best UI/UX', amount: '₹5,000', icon: '🎨' },
        { title: 'Best Innovation', amount: '₹5,000', icon: '💡' },
        { title: 'Best Freshers Team', amount: '₹5,000', icon: '🌟' },
        { title: 'Crowd Favorite', amount: '₹5,000', icon: '👏' }
    ]

    return (
        <section id="prizes" className="relative z-30 py-16 md:py-32 px-4 sm:px-6 md:px-16 lg:px-32">
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-yellow-500/5 blur-[150px] md:blur-[200px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-white/5 border border-white/10 rounded-full text-[#2DD4BF] text-xs sm:text-sm font-medium tracking-wider mb-4">
                        REWARDS
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-space tracking-tight">
                        Win <span className="text-[#2563EB]">Amazing</span> Prizes
                    </h2>
                    <p className="text-white/60 mt-3 md:mt-4 max-w-xl mx-auto text-sm sm:text-base px-4">
                        Compete for prizes worth over ₹1,00,000 along with exclusive goodies and more!
                    </p>
                </div>

                {/* Main Prizes */}
                <div className="flex flex-col md:flex-row justify-center items-stretch md:items-end gap-4 md:gap-6 mb-12 md:mb-16">
                    {mainPrizes.map((prize) => (
                        <div
                            key={prize.position}
                            className={`${prize.order} w-full md:w-56 lg:w-64 ${prize.highlight ? 'md:-mt-8' : ''}`}
                        >
                            <div className={`relative p-6 md:p-8 bg-gradient-to-b ${prize.color} border ${prize.borderColor} rounded-2xl md:rounded-3xl backdrop-blur-sm text-center group hover:scale-[1.02] md:hover:scale-105 transition-all duration-500`}>
                                {/* Trophy Icon */}
                                <div className="text-4xl md:text-6xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {prize.icon}
                                </div>

                                {/* Position */}
                                <div className={`text-xs md:text-sm font-medium ${prize.highlight ? 'text-yellow-400' : 'text-white/60'} mb-1 md:mb-2`}>
                                    {prize.position} Place
                                </div>

                                {/* Amount */}
                                <div className={`text-2xl md:text-4xl font-bold ${prize.highlight ? 'text-yellow-400' : 'text-white'}`}>
                                    {prize.amount}
                                </div>

                                {/* Decorative Elements */}
                                {prize.highlight && (
                                    <>
                                        <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 md:px-4 md:py-1 bg-yellow-400/20 border border-yellow-400/50 rounded-full text-yellow-400 text-[10px] md:text-xs font-bold whitespace-nowrap">
                                            GRAND PRIZE
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 to-transparent rounded-2xl md:rounded-3xl pointer-events-none" />
                                    </>
                                )}

                                {/* Sparkles */}
                                <div className="absolute top-3 md:top-4 right-3 md:right-4 w-1.5 md:w-2 h-1.5 md:h-2 bg-white rounded-full animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Special Prizes */}
                <div className="relative">
                    <div className="text-center mb-6 md:mb-8">
                        <h3 className="text-xl md:text-2xl font-bold text-white">Special Categories</h3>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                        {specialPrizes.map((prize) => (
                            <div
                                key={prize.title}
                                className="p-4 md:p-6 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl backdrop-blur-sm text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                            >
                                <span className="text-2xl md:text-4xl mb-2 md:mb-3 block group-hover:scale-110 transition-transform duration-300">{prize.icon}</span>
                                <h4 className="text-white font-medium text-xs md:text-sm mb-0.5 md:mb-1">{prize.title}</h4>
                                <p className="text-[#2DD4BF] font-bold text-sm md:text-base">{prize.amount}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prizes
