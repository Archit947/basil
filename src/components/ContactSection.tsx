
import { Phone, Mail, MapPin, Instagram, Facebook, Send } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact" className="bg-gray-900 text-white py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Contact Info */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl font-serif font-bold mb-6">Let's Create a <br /><span className="text-gold-500">Delicious Experience</span></h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-md">
                            Ready to plan your next event? Reach out to us for a custom quote and menu planning.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-lg text-gold-500">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold">Call Us</h4>
                                    <p className="text-gray-400">+91 98765 43210</p>
                                    <p className="text-gray-400">+91 98765 43211</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-lg text-gold-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold">Email Us</h4>
                                    <p className="text-gray-400">hello@bisil@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-lg text-gold-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold">Visit Us</h4>
                                    <p className="text-gray-400">Shop No. 4, Premium Plaza,<br />Baner Road, Pune, Maharashtra 411045</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-10">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-gray-900 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-gray-900 transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Send an Inquiry</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900" placeholder="+91 90000 00000" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
                                        <input type="date" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Guest Count</label>
                                        <input type="number" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900" placeholder="e.g. 500" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900" placeholder="Tell us about your event requirements..."></textarea>
                                </div>

                                <button type="submit" className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-black rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                                    Get Quantity Quote
                                    <Send size={20} />
                                </button>
                                <p className="text-xs text-gray-500 text-center mt-3">We typically reply within 2 hours.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
