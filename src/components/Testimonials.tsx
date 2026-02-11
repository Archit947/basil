
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Aditi S.",
        role: "Wedding Client",
        text: "Bisil Catering made our wedding reception absolutely magical. The food was the talk of the night, and the service was impeccable. Highly recommended!",
        rating: 5
    },
    {
        name: "Rahul M.",
        role: "Corporate Manager",
        text: "We hired them for our annual corporate meet. Professionalism, punctuality, and taste - they scored 10/10 on every front. The customized menu was a hit.",
        rating: 5
    },
    {
        name: "Mrs. Deshpande",
        role: "House Party",
        text: "The best catering experience I've had in Pune. The freshness of the ingredients really stood out. They took care of everything.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-semibold tracking-wider text-sm uppercase block mb-2">
                        Client Love
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                        Words from our <span className="text-gold-600">Happy Clients</span>
                    </h2>
                </div>

                <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg relative w-[85vw] md:w-auto md:min-w-0 snap-center flex-shrink-0"
                        >
                            <Quote className="text-gold-200 absolute top-6 right-6" size={48} />
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="text-gold-500 fill-gold-500" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10 whitespace-pre-line">
                                "{t.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl">
                                    {t.name.charAt(0)}
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
