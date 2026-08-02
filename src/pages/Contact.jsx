import SEO from '../components/SEO';
import ContactHero from '../components/Contact/ContactHero';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import MapSection from '../components/Contact/MapSection';
import SupportFAQ from '../components/Contact/SupportFAQ';

export default function Contact() {
    return (
        <>
            <SEO
                title="Contact Us"
                description="Get in touch with Creative WebSpot Info Tech. Send us a message, call us, or visit our office. We respond within 24 hours."
                canonical="/contact"
            />

            <ContactHero />

            {/* Main Contact Grid */}
            <section className="py-20 bg-white dark:bg-secondary">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                        {/* Left: Info */}
                        <div className="lg:col-span-2">
                            <ContactInfo />
                        </div>

                        {/* Right: Form */}
                        <div className="lg:col-span-3">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <MapSection />
            <SupportFAQ />
        </>
    );
}