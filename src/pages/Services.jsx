import SEO from '../components/SEO';
import ServicesHero from '../components/Services/ServicesHero';
import InteractiveSelector from '../components/Services/InteractiveSelector';
import ServiceCards from '../components/Services/ServiceCards';
import TechStack from '../components/Services/TechStack';
import ComparisonTable from '../components/Services/ComparisonTable';
import ProcessSection from '../components/Services/ProcessSection';
import FAQ from '../components/Services/FAQ';
import ServicesCTA from '../components/Services/ServicesCTA';

export default function Services() {
    return (
        <>
            <SEO
                title="Services"
                description="Premium software development, hardware solutions, photography, video production, and content writing services. One team. One vision. Zero compromises."
                canonical="/services"
            />

            <ServicesHero />
            <InteractiveSelector />
            <ServiceCards />
            <TechStack />
            <ComparisonTable />
            <ProcessSection />
            <FAQ />
            <ServicesCTA />
        </>
    );
}