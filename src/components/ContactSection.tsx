
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, message: '' });

        if (!form.current) return;


        const SERVICE_ID = 'service_uwpt9nv';
        const TEMPLATE_ID = 'template_vmaanuz';
        const PUBLIC_KEY = 'gaENH_tf5JaMXddEW';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
                form.current?.reset();
            }, (error) => {
                console.log(error.text);
                setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
            })
            .finally(() => {
                setLoading(false);
            });
    };

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
                                    <a href="mailto:info@basilhospitality.com" className="text-gray-400 hover:text-gold-500 transition-colors">info@basilhospitality.com</a>
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
                            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                        <input type="text" name="user_name" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input type="tel" name="user_phone" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900" placeholder="+91 90000 00000" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
                                        <input type="date" name="event_date" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Guest Count</label>
                                        <input type="number" name="guest_count" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900" placeholder="e.g. 500" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900" placeholder="Tell us about your event requirements..."></textarea>
                                </div>

                                {status.message && (
                                    <div className={`p-3 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {status.message}
                                    </div>
                                )}

                                <button type="submit" disabled={loading} className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-black rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                                    {loading ? 'Sending...' : 'Get Quantity Quote'}
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
