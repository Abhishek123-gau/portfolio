import { Section } from '../common/Section';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/content';

export const Contact = () => {
    return (
        <Section id="contact">
            <div className="max-w-5xl mx-auto glass p-8 md:p-16 rounded-[40px] border border-white/10 relative overflow-hidden">
                {/* Background Accents */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-blue/10 rounded-full blur-[80px]"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-purple/10 rounded-full blur-[80px]"></div>

                <div className="grid md:grid-cols-2 gap-16 relative z-10">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's <span className="gradient-text">Connect</span></h2>
                        <p className="text-muted-foreground text-lg mb-12">
                            Have a research proposal, a project idea, or just want to say hi? I'm always open to discussing new opportunities in AI and tech.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="p-4 glass rounded-2xl text-accent-blue group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Email</p>
                                    <p className="text-lg font-medium">{personalInfo.contact.email}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="p-4 glass rounded-2xl text-accent-purple group-hover:scale-110 transition-transform">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Location</p>
                                    <p className="text-lg font-medium">India</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-12">
                            <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl hover:bg-white/10 hover:border-accent-blue/50 transition-all">
                                <Linkedin size={24} />
                            </a>
                            <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl hover:bg-white/10 hover:border-accent-blue/50 transition-all">
                                <Github size={24} />
                            </a>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/60 ml-1">Name</label>
                                <input type="text" className="w-full glass bg-white/5 border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-blue/50 transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/60 ml-1">Email</label>
                                <input type="email" className="w-full glass bg-white/5 border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-blue/50 transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/60 ml-1">Message</label>
                            <textarea rows={4} className="w-full glass bg-white/5 border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-blue/50 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button type="button" className="btn-primary w-full justify-center py-5 text-lg font-bold">
                            <Send size={20} /> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
};
