import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { personalInfo } from '../../data/content';
import { GraduationCap, Target, Lightbulb } from 'lucide-react';
import iitbImage from '../../assets/iitb.png';

export const About = () => {
    return (
        <Section id="about">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 italic">
                        Behind the <span className="gradient-text">Algorithms</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
                        {personalInfo.about.story.split(/(\*\*.*?\*\*)/g).map((part, i) =>
                            part.startsWith('**') && part.endsWith('**') ? (
                                <strong key={i} className="text-white font-semibold">
                                    {part.slice(2, -2)}
                                </strong>
                            ) : (
                                part
                            )
                        )}
                    </p>


                    <div className="space-y-6">
                        <div className="flex gap-4 p-4 glass rounded-2xl">
                            <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue h-fit">
                                <Target size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Current Focus</h4>
                                <ul className="text-sm text-muted-foreground list-disc list-inside">
                                    {personalInfo.about.currentWork.map((work, i) => (
                                        <li key={i}>{work}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-4 p-4 glass rounded-2xl">
                            <div className="p-3 bg-accent-purple/10 rounded-xl text-accent-purple h-fit">
                                <Lightbulb size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Career Goal</h4>
                                <p className="text-sm text-muted-foreground">
                                    {personalInfo.about.goal}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="aspect-square glass rounded-3xl flex items-center justify-center p-12 overflow-hidden border-2 border-dashed border-white/5">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
                        </div>
                        <div className="text-center z-10 w-full">
                            <div className="relative inline-block w-full aspect-video mb-6 rounded-2xl overflow-hidden border border-white/10 group">
                                <img
                                    src={iitbImage}
                                    alt="IIT Bombay Campus"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <div className="p-2 bg-accent-blue/20 backdrop-blur-md rounded-lg border border-white/10">
                                        <GraduationCap size={24} className="text-white" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-2">Academic Excellence</h3>
                            <p className="text-muted-foreground">Secured 98.53 percentile in JEE Advanced and 99.52 percentile in JEE Mains among 0.93M+ aspirants, earning admission to the prestigious IIT Bombay.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};
