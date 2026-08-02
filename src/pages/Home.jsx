import SEO from '../components/SEO';
import Hero from '../components/Home/Hero';
import ClientMarquee from '../components/Home/ClientMarquee';
import TrustBadges from '../components/Home/TrustBadges';
import BentoServices from '../components/Home/BentoServices';
import AnimatedStats from '../components/Home/AnimatedStats';
import ProcessTimeline from '../components/Home/ProcessTimeline';
import Testimonials from '../components/Home/Testimonials';

export default function Home() {
    return (
        <>
            <SEO
                title="Home"
                description="Creative WebSpot Info Tech - Premium software, hardware, AI, and media solutions for modern businesses."
                canonical="/"
            />

            <Hero />
            <ClientMarquee />
            <TrustBadges />
            <BentoServices />
            <AnimatedStats />
            <ProcessTimeline />
            <Testimonials />
        </>
    );
}