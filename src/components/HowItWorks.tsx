
import { motion } from 'framer-motion';
import { MessageSquare, ClipboardList, Utensils, CalendarCheck, PartyPopper } from 'lucide-react';

const steps = [
    {
        icon: <MessageSquare size={28} />,
        title: "Consultation",
        description: "Get in touch with us to discuss your event details and requirements."
    },
    {
        icon: <ClipboardList size={28} />,
        title: "Menu Planning",
        description: "Work with our experts to curate a menu that matches your taste and budget."
    },
    {
        icon: <Utensils size={28} />,
        title: "Tasting Session",
        description: "Experience our culinary quality firsthand with a scheduled food tasting."
    },
    {
        icon: <CalendarCheck size={28} />,
        title: "Booking",
        description: "Finalize the details and lock the date for your special occasion."
    },
    {
        icon: <PartyPopper size={28} />,
        title: "The Big Day",
        description: "Relax and enjoy while we serve delicious food and create memories."
    }
];

const HowItWorks = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-semibold tracking-wider text-sm uppercase block mb-2">
                        Simple Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                        How It <span className="text-gold-600">Works</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                className="flex flex-col items-center text-center bg-white p-4"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary-50 border-2 border-primary-100 flex items-center justify-center text-primary-600 mb-6 shadow-sm relative group hover:bg-primary-600 hover:text-white transition-colors duration-300">
                                    {step.icon}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
