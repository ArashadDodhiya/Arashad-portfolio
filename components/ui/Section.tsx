"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
    id?: string;
    className?: string;
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
}

export default function Section({
    id,
    className,
    title,
    subtitle,
    children,
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn("relative w-full min-h-screen py-20 px-6 md:px-12", className)}
        >
            {(title || subtitle) && (
                <div className="mb-16">
                    {subtitle && (
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-anime-orange font-mono text-sm tracking-widest uppercase mb-2 block"
                        >
              // {subtitle}
                        </motion.span>
                    )}
                    {title && (
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bebas text-white uppercase italic"
                        >
                            {title}
                        </motion.h2>
                    )}
                </div>
            )}
            {children}
        </section>
    );
}
