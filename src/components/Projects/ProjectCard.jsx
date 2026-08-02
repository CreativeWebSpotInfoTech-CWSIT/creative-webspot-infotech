import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-glass cursor-pointer bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">{project.category}</span>
        <h3 className="text-white text-xl font-bold">{project.title}</h3>
        <p className="text-gray-300 text-sm mt-2 line-clamp-2">{project.desc}</p>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t, i) => (
            <span key={i} className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-md">
              {t}
            </span>
          ))}
        </div>

        <button className="mt-4 flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
          View Details <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}