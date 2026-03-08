import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../../data/content';

export const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/10 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-display font-bold gradient-text mb-2">Abhishek Kushwah</h3>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            AI/ML Engineer dedicated to building intelligent systems for a better future.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:border-accent-blue/50 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:border-accent-blue/50 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href={`mailto:${personalInfo.contact.email}`} className="p-2 glass rounded-full hover:border-accent-blue/50 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} Abhishek Kushwah. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built with curiosity and caffeine <Heart size={12} className="text-red-500 fill-red-500" />
                    </p>
                </div>
            </div>
        </footer>
    );
};
