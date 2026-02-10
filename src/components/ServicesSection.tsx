

import { motion } from 'framer-motion';
import { UtensilsCrossed, Briefcase, PartyPopper, Wine, ChefHat, CalendarHeart, Users } from 'lucide-react';
import StarBorder from './StarBorder';
import './StarBorder.css'; // Ensure CSS is loaded

const services = [
    {
        icon: <CalendarHeart size={32} />,
        title: "Wedding Catering",
        description: "Exquisite menus for your special day, ranging from traditional to contemporary cuisines.",
        image: "https://images.unsplash.com/photo-1519225447839-a400a5399949?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <Briefcase size={32} />,
        title: "Corporate Catering",
        description: "Professional catering for business lunches, conferences, and office parties.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <PartyPopper size={32} />,
        title: "Birthday & House Parties",
        description: "Make your private gatherings memorable with our delicious and hygienic food.",
        image: "https://images.unsplash.com/photo-1530103862676-de3c9da59af7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <Wine size={32} />,
        title: "Cocktail & Reception",
        description: "Elegant finger foods and live counters perfect for cocktail hours and receptions.",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16549766b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <ChefHat size={32} />,
        title: "Festive Catering",
        description: "Traditional authentic delicacies for all major festivals and celebrations.",
        image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <UtensilsCrossed size={32} />,
        title: "Custom Meal Plans",
        description: "Tailored monthly meal programs for individuals and corporate teams.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <Users size={32} />,
        title: "Bulk & Event Catering",
        description: "Scalable solutions for large gatherings without compromising on quality.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary-600 font-semibold tracking-wider text-sm uppercase block mb-2"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4"
                    >
                        Catering for Every <span className="text-gold-600">Occasion</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg"
                    >
                        From intimate gatherings to grand celebrations, we provide bespoke culinary experiences tailored to your needs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <StarBorder
                            as={motion.div}
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group h-[320px] flex flex-col justify-end p-0"
                            color="#EAB308" // Gold color
                            speed="4s"
                        >
                            {/* Background Image with Overlay */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:via-black/70 transition-colors duration-300" />

                            {/* Content */}
                            <div className="relative z-10 text-white p-8 h-full flex flex-col justify-end">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white mb-4 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 font-serif group-hover:text-gold-400 transition-colors">{service.title}</h3>
                                <p className="text-gray-200 text-sm leading-relaxed opacity-90 group-hover:opacity-100">
                                    {service.description}
                                </p>
                            </div>
                        </StarBorder>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
