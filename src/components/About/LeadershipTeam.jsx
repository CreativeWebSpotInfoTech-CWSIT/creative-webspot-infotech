import { motion } from 'framer-motion';

// Inline SVGs — lucide-react does NOT export brand icons
const LinkedInIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const TwitterIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const team = [
    [
        {
            name: 'Founder 1',
            role: 'Co-Founder & Full Stack Developer',
            avatar: '👨‍💻',
            bio: 'Passionate about building modern web applications and scalable digital solutions. Focuses on frontend and backend development while delivering high-quality, user-friendly experiences.',
            linkedin: '#',
            twitter: '#',
        },
        {
            name: 'Founder 2',
            role: 'Co-Founder & Hardware Specialist',
            avatar: '🧑‍🔧',
            bio: 'Specializes in hardware solutions, networking, CCTV systems, and AI-powered technologies. Dedicated to creating innovative solutions that help businesses grow with confidence.',
            linkedin: '#',
            twitter: '#',
        },
        {
            name: 'Founder 3',
            role: 'Co-Founder & Creative Director',
            avatar: '🎨',
            bio: 'Leads creative design, photography, video production, and content strategy. Focused on crafting impactful digital experiences and building strong brand identities for clients.',
            linkedin: '#',
            twitter: '#',
        },
    ],
];

export default function LeadershipTeam() {
    return (
        <section className="py-20 bg-white dark:bg-secondary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
                        Meet the Founders
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        The visionaries behind Creative WebSpot
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center hover:shadow-lg transition-shadow"
                        >
                            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                                {member.avatar}
                            </div>

                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-primary font-semibold text-sm mb-4">
                                {member.role}
                            </p>

                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                                {member.bio}
                            </p>

                            <div className="flex justify-center gap-3">
                                <a
                                    href={member.linkedin}
                                    aria-label={`${member.name} LinkedIn`}
                                    className="p-2.5 bg-white dark:bg-secondary rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                                >
                                    <LinkedInIcon className="w-4 h-4" />
                                </a>
                                <a
                                    href={member.twitter}
                                    aria-label={`${member.name} Twitter`}
                                    className="p-2.5 bg-white dark:bg-secondary rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                                >
                                    <TwitterIcon className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl max-w-3xl mx-auto"
                >
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Behind every great product is a great team. Our{' '}
                        <span className="font-bold text-primary">5+ member team</span>{' '}
                        includes developers, designers, videographers, and AI specialists
                        — all united by a passion for excellence.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}