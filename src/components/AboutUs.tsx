
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Grid */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Chefs Cooking"
                                className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
                            />
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Premium Dish"
                                className="w-full h-64 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-50/50 rounded-full blur-3xl" />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h4 className="text-primary-600 font-semibold tracking-wider text-sm mb-2 uppercase">About Us</h4>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                                Fresh. Innovative. <span className="text-gold-600 italic">Personal.</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                We are one of the top-notch catering companies with a complete <span className="text-gray-900 font-semibold">state-of-the-art kitchen in Pune</span>.
                                Great taste is the name of the game and we're committed to stepping up to the plate.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Our goal is to provide delicious, natural options. That's why we prepare all of our meals with <span className="text-primary-600 font-medium">fresh, locally sourced ingredients</span>.
                                Whether it's a large corporate event or an intimate family gathering, we do it all!
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Pune Based Premium Catering",
                                    "State-of-the-art Hygienic Kitchen",
                                    "Fresh & Locally Sourced Ingredients",
                                    "Tailored Menu Programs"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="text-gold-500 shrink-0" size={20} />
                                        <span className="text-gray-800 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-10 px-8 py-3 bg-gray-900 text-white rounded-full font-medium shadow-lg hover:bg-gray-800 transition-colors"
                            >
                                Read Our Story
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
