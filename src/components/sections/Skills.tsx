import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { skills } from '../../data/content';

const SkillCard = ({ skill, index }: { skill: any, index: number }) => {
    const Icon = skill.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card group"
        >
            <div className="mb-6 flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-accent-blue/10 group-hover:text-accent-blue transition-colors">
                    <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
                {skill.items.map((item: string) => (
                    <span
                        key={item}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/5 group-hover:border-accent-blue/20 transition-colors"
                    >
                        {item}
                    </span>
                ))}
            </div>

            {/* Hover Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-blue to-accent-purple rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
        </motion.div>
    );
};

export const Skills = () => {
    return (
        <Section id="skills" className="bg-white/[0.01]">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                    The <span className="gradient-text">Arsenal</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A comprehensive collection of tools and technologies I use to build state-of-the-art AI solutions.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, i) => (
                    <SkillCard key={skill.category} skill={skill} index={i} />
                ))}
            </div>
        </Section>
    );
};
