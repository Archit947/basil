
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2024 Bisil Catering. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-gold-500">Privacy Policy</a>
                        <a href="#" className="hover:text-gold-500">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
