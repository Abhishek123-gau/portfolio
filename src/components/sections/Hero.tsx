import { motion } from 'framer-motion';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { personalInfo } from '../../data/content';
import { FileText, Projector } from 'lucide-react';
import profileImg from '../../assets/profile2.png';

export const Hero = () => {
    const typedText = useTypingEffect(["AI Engineer – Autonomous Agent Systems", "Computer Vision Engineer", "LLM Research & Engineering", "Python Backend Developer",]);

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-[128px] animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-[128px] animate-pulse-slow"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-accent-blue/20 bg-accent-blue/5 text-accent-blue text-sm font-medium mb-6"
                    >
                        Available for Research Opportunities
                    </motion.span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                        Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-display font-medium text-white/80 mb-8 min-h-[40px]">
                        {typedText}<span className="animate-pulse text-accent-blue">|</span>
                    </h2>
                    <div className="space-y-4 mb-10">
                        {personalInfo.intro.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                                {paragraph.split(/(\*\*.*?\*\*)/g).map((part, i) =>
                                    part.startsWith('**') && part.endsWith('**') ? (
                                        <span key={i} className="text-white font-semibold">
                                            {part.slice(2, -2)}
                                        </span>
                                    ) : (
                                        part
                                    )
                                )}
                            </p>
                        ))}


                    </div>

                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="btn-primary">
                            <Projector size={18} /> View Projects
                        </a>
                        <a
                            href={personalInfo.contact.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                        >
                            <FileText size={18} /> Download Resume
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-72 h-96 md:w-80 md:h-[480px]">
                        {/* Image Frame */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-accent-blue/30 to-accent-purple/30 rounded-3xl blur-2xl opacity-50 animate-pulse-slow"></div>
                        <div className="relative h-full w-full glass rounded-3xl overflow-hidden grayscale-[50%] hover:grayscale-0 transition-all duration-700">
                            <img
                                src={profileImg}
                                alt={personalInfo.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background via-background/40 to-transparent">
                                <div className="text-sm font-medium text-white/60">Currently based in India</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
