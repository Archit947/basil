import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const occasions = [
    {
        id: 'weddings',
        label: 'Weddings',
        title: 'Fairytale Weddings',
        description: 'Create unforgettable memories with our bespoke wedding catering. From the Sangeet to the Reception, we handle every culinary detail with elegance.',
        image: '/src/assets/occasions_wedding_1770629668029.png',
        features: ['Customized Bride & Groom Menu', 'Live Counters', 'Premium Buffet Setup']
    },
    {
        id: 'corporate',
        label: 'Corporate',
        title: 'Professional Corporate Events',
        description: 'Impress clients and boost team morale with our top-tier corporate catering services. Perfect for meetings, conferences, and annual parties.',
        image: '/src/assets/occasions_corporate_1770629690979.png',
        features: ['Boxed Lunches', 'Executive High Tea', 'Gala Dinner Buffets']
    },
    {
        id: 'parties',
        label: 'Social Parties',
        title: 'House & Social Parties',
        description: 'Host the perfect gathering without the stress of cooking. Our house party catering brings the restaurant experience to your living room.',
        image: '/src/assets/occasions_party_1770629710756.png',
        features: ['Interactive Food Stations', 'Cocktail Snacks', 'Dessert Tables']
    }
];

const Occasions = () => {
    const [activeTab, setActiveTab] = useState(occasions[0].id);

    return (
        <section className="py-20 bg-[#480211] text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Occasions We Celebrate</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">We bring the perfect flavor to every moment of your life.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {occasions.map((occasion) => (
                        <button
                            key={occasion.id}
                            onClick={() => setActiveTab(occasion.id)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === occasion.id
                                ? 'bg-gold-500 text-primary-950'
                                : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                        >
                            {occasion.label}
                        </button>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode='wait'>
                        {occasions.map((occasion) => (
                            activeTab === occasion.id && (
                                <motion.div
                                    key={occasion.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10"
                                >
                                    <div className="flex flex-col lg:flex-row">
                                        <div className="w-full lg:w-1/2 h-80 lg:h-auto">
                                            <img
                                                src={occasion.image}
                                                alt={occasion.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                            <h3 className="text-3xl font-serif font-bold mb-4 text-gold-400">{occasion.title}</h3>
                                            <p className="text-gray-300 leading-relaxed mb-8">{occasion.description}</p>

                                            <ul className="space-y-3 mb-8">
                                                {occasion.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-200">
                                                        <span className="w-2 h-2 rounded-full bg-gold-500" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <a href="#contact" className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium group transition-colors">
                                                Plan this Event
                                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Occasions;
