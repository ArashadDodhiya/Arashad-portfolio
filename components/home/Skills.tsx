"use client";

import { motion } from "framer-motion";
import { FaCode, FaBrain, FaShieldAlt, FaTerminal } from "react-icons/fa";

const techniques = [
    {
        name: "WEB ARCHITECTURE",
        level: "MASTERED // GRADE 1",
        desc: "Building high-performance neural networks of the web. Expertise in Next.js, React, and seamless Frontend Engineering.",
        icon: FaCode,
        color: "#FF6B00", // Orange
        tags: ["React", "Next.js", "Tailwind", "Learning..."],
        isPrimary: true,
    },
    {
        name: "AI ENGINEERING",
        level: "SPECIALIZED // GRADE 1",
        desc: "Harnessing LLMs and RAG pipelines to create intelligent systems. Turning raw data into autonomous techniques.",
        icon: FaBrain,
        color: "#6A00FF", // Purple
        tags: ["Python", "LangChain", "LLMs", "RAG", "Learning..."],
        isPrimary: true,
    },
    {
        name: "CYBERSECURITY",
        level: "AWAKENING // GRADE 2",
        desc: "Currently refining the 'Absolute Defense'. Focusing on penetration testing, secure auth, and system hardening.",
        icon: FaShieldAlt,
        color: "#FF003C", // Red
        tags: ["Networking", "Linux", "JWT", "Learning..."],
        isGrowing: true,
    },
    {
        name: "SYSTEM OPS",
        level: "SUPPORT // GRADE 3",
        desc: "Managing the infrastructure where battles take place. Database management and scalable system design.",
        icon: FaTerminal,
        color: "#3B82F6", // Blue
        tags: ["MongoDB", "SQL", "Node.js", "Vercel", "Render"],
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-16 md:py-24 bg-[#08080A] overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                {/* HEADER */}
                <div className="mb-12 md:mb-16 border-l-4 md:border-l-8 border-anime-orange pl-4 md:pl-6">
                    <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bebas text-white tracking-tighter uppercase italic leading-none">
                        CURRENT <span className="text-anime-orange">TECHNIQUES</span>
                    </h2>
                    <p className="font-mono text-zinc-500 text-[10px] md:text-sm tracking-[0.1em] md:tracking-[0.2em] mt-2 uppercase">
                        Analysis: Mastery Levels & Skill Progression
                    </p>
                </div>

                {/* GRID LAYOUT 
            Mobile: 1 col
            Tablet: 2 cols (md:grid-cols-2)
            Desktop: 6 cols (lg:grid-cols-6)
        */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
                    {techniques.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative p-6 md:p-8 border-2 border-white/5 bg-[#0F0F14] overflow-hidden group 
                ${tech.isPrimary ? "lg:col-span-3 md:col-span-2" : "lg:col-span-2 md:col-span-1"}
                ${tech.isGrowing ? "border-anime-red/30" : ""}
              `}
                        >
                            {/* Halftone Texture */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]" />

                            {/* ENERGY CORE (Background Icon) - Responsive sizing */}
                            <tech.icon className="absolute -right-4 -bottom-4 text-[7rem] md:text-[10rem] opacity-5 rotate-12 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

                            {/* CARD CONTENT */}
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6 md:mb-8">
                                    <div
                                        className="p-3 md:p-4 rounded-none border-2 border-current bg-black shrink-0"
                                        style={{ color: tech.color }}
                                    >
                                        <tech.icon className="text-2xl md:text-4xl" />
                                    </div>

                                    {/* Status Indicator */}
                                    <div className="flex flex-col items-end text-right">
                                        <span className="text-[8px] md:text-[10px] font-mono text-zinc-500">LEVEL_STATUS</span>
                                        <span className="text-xs md:text-sm font-bold tracking-tighter uppercase" style={{ color: tech.color }}>
                                            {tech.level}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-2xl md:text-4xl font-bebas text-white mb-3 md:mb-4 tracking-wider italic uppercase">
                                    {tech.name}
                                    {tech.isGrowing && (
                                        <motion.span
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                            className="inline-block ml-2 text-[9px] md:text-xs font-mono bg-anime-red text-white px-2 py-0.5 align-middle not-italic"
                                        >
                                            EVOLVING...
                                        </motion.span>
                                    )}
                                </h3>

                                <p className="text-zinc-400 font-inter text-sm md:text-base leading-relaxed mb-6 md:mb-8 flex-grow">
                                    {tech.desc}
                                </p>

                                {/* TAGS */}
                                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
                                    {tech.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[9px] md:text-[10px] font-mono py-1 px-2 bg-white/5 text-white/60 border border-white/10 uppercase tracking-[0.1em]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* IMPACT ELEMENT */}
                            {tech.isGrowing && (
                                <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-anime-red opacity-10 blur-[40px] md:blur-[60px] animate-pulse pointer-events-none" />
                            )}

                            {/* HOVER BORDER EFFECT (Hidden on non-hover devices for cleaner look) */}
                            <motion.div
                                className="absolute inset-0 border-2 border-transparent lg:group-hover:border-current opacity-40 pointer-events-none transition-all duration-300"
                                style={{ color: tech.color }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}