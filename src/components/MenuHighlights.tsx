
import { motion } from 'framer-motion';

const menuCategories = [
    {
        title: 'Starters',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        items: ['Paneer Tikka', 'Chicken Reshmi Kebab', 'Corn Cheese Balls', 'Fish Amritsari']
    },
    {
        title: 'Main Course',
        image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        items: ['Butter Chicken', 'Dal Makhani', 'Mutton Rogan Josh', 'Veg Kolhapuri']
    },
    {
        title: 'Desserts',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        items: ['Gulab Jamun', 'Rasmalai', 'Chocolate Brownie', 'Moong Dal Halwa']
    },
    {
        title: 'Beverages',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        items: ['Fresh Moleto', 'Mango Lassi', 'Masala Chai', 'Premium Coffee']
    }
];



const MenuHighlights = () => {
    return (
        <section id="menu" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-semibold tracking-wider text-sm uppercase block mb-2">
                        Taste the Magic
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                        Menu <span className="text-gold-600">Highlights</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Explore our diverse culinary offerings prepared with love and mastery.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {menuCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold font-serif text-gray-900 mb-3">{category.title}</h3>
                                <ul className="text-gray-600 space-y-1">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="text-sm">• {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default MenuHighlights;
