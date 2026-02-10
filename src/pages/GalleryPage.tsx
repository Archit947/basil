import { useState, useEffect } from 'react';
import Masonry from '../components/Masonry';
import Stack from '../components/Stack';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

import corporateImg from '../assets/occasions_corporate_1770629690979.png';
import partyImg from '../assets/occasions_party_1770629710756.png';

const GalleryPage = () => {
    const weddingImages = [
        {
            src: img1,
            alt: 'Elegant Wedding Reception'
        },
        {
            src: img2,
            alt: 'Wedding Couple'
        },
        {
            src: img3,
            alt: 'Wedding Decor'
        }
    ];

    const corporateImages = [
        {
            src: corporateImg,
            alt: 'Corporate Conference Lunch'
        }
    ];

    const socialImages = [
        {
            src: partyImg,
            alt: 'Birthday Party Celebration'
        }
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const renderSection = (title: string, images: { src: string; alt: string }[]) => {
        const masonryItems = images.map((img, index) => ({
            id: `${title}-${index}`,
            img: img.src,
            height: index % 2 === 0 ? 400 : 300, // Alternating heights for masonry effect
            url: "#"
        }));

        const stackItems = images.map((img, index) => ({
            id: `${title}-${index}`,
            content: (
                <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover rounded-2xl"
                />
            )
        }));

        return (
            <div key={title} className="mb-20 last:mb-0">
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8 pl-4 border-l-4 border-gold-500">
                    {title}
                </h3>
                <div className="w-full h-[80vh] relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
                    {isMobile ? (
                        <div className="w-full h-full p-8">
                            <Stack
                                randomRotation={true}
                                sensitivity={180}
                                sendToBackOnClick={false}
                                cards={stackItems}
                            />
                        </div>
                    ) : (
                        <Masonry
                            items={masonryItems}
                            ease="power3.out"
                            duration={0.6}
                            stagger={0.05}
                            animateFrom="bottom"
                            scaleOnHover
                            hoverScale={1.05}
                            blurToFocus
                            colorShiftOnHover={false}
                        />
                    )}
                </div>
            </div>
        );
    };

    return (
        <main className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-semibold tracking-wider text-sm uppercase block mb-2">
                        Our Portfolio
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                        Event <span className="text-gold-600">Gallery</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Explore our curated collection of memorable moments from weddings, corporate events, and social gatherings.
                    </p>
                </div>

                {renderSection('Weddings', weddingImages)}
                {renderSection('Corporate Events', corporateImages)}
                {renderSection('Social Parties', socialImages)}

            </div>
        </main>
    );
};

export default GalleryPage;
