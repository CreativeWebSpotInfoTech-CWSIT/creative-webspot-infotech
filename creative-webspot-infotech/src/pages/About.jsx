import SEO from '../components/SEO';
import AboutHero from '../components/About/AboutHero';
import OurStory from '../components/About/OurStory';
import MissionVision from '../components/About/MissionVision';
import WhyNow from '../components/About/WhyNow';
import CoreValues from '../components/About/CoreValues';
import LeadershipTeam from '../components/About/LeadershipTeam';
import CompanyTimeline from '../components/About/CompanyTimeline';
import WhyChooseUs from '../components/About/WhyChooseUs';
import AboutCTA from '../components/About/AboutCTA';

export default function About() {
    return (
        <>
            <SEO
                title="About Us"
                description="Learn about Creative WebSpot Info Tech - Our story, mission, vision, and why we're launching in 2026 to transform digital solutions."
                canonical="/about"
            />

            <AboutHero />
            <OurStory />
            <MissionVision />
            <WhyNow />
            <CoreValues />
            <LeadershipTeam />
            <CompanyTimeline />
            <WhyChooseUs />
            <AboutCTA />
        </>
    );
}