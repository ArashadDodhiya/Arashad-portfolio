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
            // Changed: py-12 for mobile, py-24 for desktop. Removed min-h-screen to prevent layout gaps.
            className={cn(
                "relative w-full overflow-hidden py-12 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16",
                className
            )}
        >
            {/* Inner container to keep content centered on ultra-wide screens */}
            <div className="max-w-7xl mx-auto relative z-10">
                {(title || subtitle) && (
                    <div className="mb-10 md:mb-16">
                        {subtitle && (
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="text-anime-orange font-mono text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.5em] uppercase mb-2 block"
                            >
                // {subtitle}
                            </motion.span>
                        )}
                        {title && (
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                // Changed: Responsive text sizes for the header
                                className="text-4xl sm:text-5xl md:text-7xl font-bebas text-white uppercase italic leading-none tracking-tighter"
                            >
                                {title}
                            </motion.h2>
                        )}
                        {/* Optional: Manga-style accent line under section title */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "80px" }}
                            className="h-1 bg-anime-orange mt-2 md:mt-4 hidden md:block"
                        />
                    </div>
                )}

                {/* Render children inside the constrained container */}
                <div className="w-full">
                    {children}
                </div>
            </div>
        </section>
    );
}