
import { motion } from 'framer-motion';
import { Leaf, Award, Clock, Star, ShieldCheck, ChefHat } from 'lucide-react';

const features = [
    {
        icon: <Leaf className="text-green-500" size={32} />,
        title: "Fresh Ingredients",
        description: "We source farm-fresh, locally grown produce to ensure the highest quality and taste."
    },
    {
        icon: <ChefHat className="text-primary-500" size={32} />,
        title: "Professional Chefs",
        description: "Our culinary experts bring years of experience and passion to every dish they create."
    },
    {
        icon: <ShieldCheck className="text-blue-500" size={32} />,
        title: "Hygienic Kitchen",
        description: "State-of-the-art facilities compliant with strict hygiene and safety standards."
    },
    {
        icon: <Clock className="text-orange-500" size={32} />,
        title: "On-Time Service",
        description: "Punctuality is our promise. We ensure your food is ready and served exactly when needed."
    },
    {
        icon: <Star className="text-gold-500" size={32} />,
        title: "Premium Presentation",
        description: "We believe we eat with our eyes first. Our plating and setup are designed to impress."
    },
    {
        icon: <Award className="text-purple-500" size={32} />,
        title: "Customized Menus",
        description: "Tailored food options to match your specific taste, dietary requirements, and budget."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="w-full lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-primary-600 font-semibold tracking-wider text-sm uppercase block mb-2"
                        >
                            Why Choose Bisil
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
                        >
                            Excellence in Every <br /><span className="text-gold-600">Features</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 text-lg mb-8"
                        >
                            We take pride in our commitment to quality. From the source of our ingredients to the final presentation on your plate, every detail is meticulously curated.
                        </motion.p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="shrink-0 p-3 bg-gray-50 rounded-xl">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-1">{feature.title}</h4>
                                        <p className="text-gray-500 text-sm">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative bg-gray-900 rounded-3xl overflow-hidden min-h-[500px] shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Chef Plating"
                            className="absolute inset-0 w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                        <div className="absolute bottom-10 left-10 right-10">
                            <blockquote className="text-white font-serif text-2xl italic mb-6">
                                "Food is vital in our culture, not just for sustenance but for bringing people together."
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-primary-900 font-bold text-xl">
                                    B
                                </div>
                                <div>
                                    <p className="text-white font-bold">Bisil Catering</p>
                                    <p className="text-gold-400 text-sm">Pune's Finest</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
