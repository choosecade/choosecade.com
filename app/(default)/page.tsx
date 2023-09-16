export const metadata = {
    title: 'Home - Simple',
    description: 'Page description',
};

import Features from '@/components/features';
import Hero from '@/components/hero';
import Testimonials from '@/components/testimonials';

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            {/* <FeaturesBlocks /> */}
            <Testimonials />
            {/* <Newsletter /> */}
        </>
    );
}
