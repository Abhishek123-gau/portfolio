import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { experience, achievements } from '../../data/content';
import { Briefcase, Award, Star } from 'lucide-react';

export const Experience = () => {
    return (
        <Section id="experience" className="bg-white/[0.01]">
            <div className="grid lg:grid-cols-2 gap-20">
                {/* Experience Timeline */}
                <div>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue">
                            <Briefcase size={24} />
                        </div>
                        <h2 className="text-3xl font-display font-bold">Experience</h2>
                    </div>

                    <div className="space-y-12 relative before:absolute before:inset-y-0 before:left-8 before:w-px before:bg-white/10">
                        {experience.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative pl-20"
                            >
                                <div className="absolute left-6 top-0 w-4 h-4 rounded-full bg-accent-blue border-4 border-background z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                                <div className="glass-card">
                                    <span className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-2 block">{exp.period}</span>
                                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                    <h4 className="text-white/60 mb-4">{exp.company}</h4>
                                    <p className="text-muted-foreground mb-4 text-sm">{exp.description}</p>
                                    <ul className="space-y-2">
                                        {exp.points.map((point, j) => (
                                            <li key={j} className="text-xs text-muted-foreground flex items-center gap-2">
                                                <Star size={10} className="text-accent-blue" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 bg-accent-purple/10 rounded-xl text-accent-purple">
                            <Award size={24} />
                        </div>
                        <h2 className="text-3xl font-display font-bold">Achievements</h2>
                    </div>

                    <div className="grid gap-6">
                        {achievements.map((ach, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card group hover:border-accent-purple/30 transition-all"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-bold text-lg group-hover:text-accent-purple transition-colors">{ach.title}</h3>
                                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-accent-purple/10 text-accent-purple uppercase">{ach.level}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{ach.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};
