import SEO from '../components/SEO';
import ProjectsHero from '../components/Projects/ProjectsHero';
import FeaturedProjects from '../components/Projects/FeaturedProjects';
import ProjectFilter from '../components/Projects/ProjectFilter';
import CaseStudies from '../components/Projects/CaseStudies';
import SuccessMetrics from '../components/Projects/SuccessMetrics';
import ProjectsCTA from '../components/Projects/ProjectsCTA';

export default function Projects() {
    return (
        <>
            <SEO
                title="Projects"
                description="Explore our portfolio of 50+ successful software, hardware, photography, video, and content projects. Real results, real impact."
                canonical="/projects"
            />

            <ProjectsHero />
            <FeaturedProjects />
            <ProjectFilter />
            <CaseStudies />
            <SuccessMetrics />
            <ProjectsCTA />
        </>
    );
}