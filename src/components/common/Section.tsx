import { motion } from 'framer-motion';

interface SectionProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}

export const Section = ({ children, id, className = "" }: SectionProps) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`py-24 relative overflow-hidden ${className}`}
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {children}
            </div>
        </motion.section>
    );
};
