import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { Microscope, BrainCircuit, MicroscopeIcon, Bot } from 'lucide-react';

const researchInterests = [
    {
        title: "DropBlock for 3D CNN",
        description: "Investigated the efficiency of block regularization techniques in multidimensional convolutional neural networks for improved feature extraction.",
        icon: Microscope
    },
    {
        title: "Ongoing: Mind replication AI System",
        description: "Working with professor to research on Spike Neural Networks to increase the efficiency and reduce the energy consumption of AI systems.",
        icon: BrainCircuit
    },
    {
        title: "Automatic Fuel Filling System",
        description: "Contributed to a Computer vision project where we replicated the Human Hand with the a robotic hand to automatically fill fuel.",
        icon: Bot
    }
];

export const Research = () => {
    return (
        <Section id="research">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-12 justify-center">
                    <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue text-glow">
                        <MicroscopeIcon size={32} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-center">Research <span className="gradient-text">Mindset</span></h2>
                </div>

                <div className="grid gap-8">
                    {researchInterests.map((interest, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-accent-blue/30 transition-all flex flex-col md:flex-row gap-8 items-start"
                        >
                            <div className="p-4 bg-white/5 rounded-2xl text-accent-blue shrink-0">
                                <interest.icon size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">{interest.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {interest.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
