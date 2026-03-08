import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../common/Section';
import { projects } from '../../data/content';
import { Github, ExternalLink, X, Plus } from 'lucide-react';

const ProjectCard = ({ project, onClick }: { project: any, onClick: () => void }) => {
    return (
        <motion.div
            layoutId={`card-${project.id}`}
            onClick={onClick}
            whileHover={{ y: -10 }}
            className="glass-card cursor-pointer group relative overflow-hidden h-full flex flex-col"
        >
            {project.image && (
                <div className="aspect-video w-full overflow-hidden mb-6 rounded-xl border border-white/5">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            )}
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-accent-blue/10 rounded-lg text-accent-blue">
                    <Plus size={20} />
                </div>
                <div className="flex gap-3">
                    <a href={project.github} onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-white transition-colors"><Github size={18} /></a>
                    <a href={project.demo} onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-white transition-colors"><ExternalLink size={18} /></a>
                </div>
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-accent-blue transition-colors">{project.title}</h3>
            <p className="text-muted-foreground text-sm flex-grow mb-6 line-clamp-2">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tech.slice(0, 3).map((t: string) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-accent-blue/70">
                        {t}
                    </span>
                ))}
                {project.tech.length > 3 && (
                    <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">+{project.tech.length - 3}</span>
                )}
            </div>
        </motion.div>
    );
};

const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-background/90 backdrop-blur-xl"
            onClick={onClose}
        >
            <motion.div
                layoutId={`card-${project.id}`}
                className="glass w-full max-w-5xl max-h-[90vh] rounded-[2rem] overflow-hidden relative flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 glass rounded-full hover:bg-white/10 transition-colors z-[110]"
                >
                    <X size={20} />
                </button>

                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-accent-blue/5 flex items-center justify-center">
                            <Plus size={48} className="text-accent-blue/20" />
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:hidden" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent hidden md:block" />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                    <div className="inline-block px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-bold mb-6">
                        Project Details
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">{project.title}</h2>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t: string) => (
                            <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-muted-foreground uppercase tracking-wider font-bold">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="space-y-8">
                        <section>
                            <h4 className="text-sm font-bold text-accent-blue uppercase tracking-widest mb-3">Overview</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                {project.details}
                            </p>
                        </section>

                        {project.features && (
                            <section>
                                <h4 className="text-sm font-bold text-accent-blue uppercase tracking-widest mb-3">Key Features</h4>
                                <ul className="grid grid-cols-1 gap-2">
                                    {project.features.map((f: string, i: number) => (
                                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                                            <span className="text-accent-blue font-bold">•</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {project.challenges && (
                            <section>
                                <h4 className="text-sm font-bold text-accent-blue uppercase tracking-widest mb-3">Technical Challenges</h4>
                                <p className="text-sm text-muted-foreground p-4 glass rounded-xl border border-white/5 italic">
                                    "{project.challenges}"
                                </p>
                            </section>
                        )}
                    </div>

                    <div className="flex gap-4 pt-8 mt-8 border-t border-white/10">
                        <a href={project.github} className="btn-primary flex-1 py-4 justify-center">
                            <Github size={18} /> Source Code
                        </a>
                        <a href={project.demo} className="btn-secondary flex-1 py-4 justify-center">
                            <ExternalLink size={18} /> Live Demo
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    return (
        <Section id="projects">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                    Featured <span className="gradient-text">Creations</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A selection of my most impactful work, ranging from deep learning systems to custom web frameworks.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </Section>
    );
};
