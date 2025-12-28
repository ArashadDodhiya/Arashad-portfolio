"use client";

import Section from "@/components/ui/Section";
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
        tags: ["MongoDB", "SQL", "Node.js", "Varcel", "Render", "Learning..."],
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-[#08080A] overflow-hidden">
            <div className="container mx-auto px-6">
                {/* HEADER */}
                <div className="mb-16 border-l-8 border-anime-orange pl-6">
                    <h2 className="text-6xl md:text-8xl font-bebas text-white tracking-tighter uppercase italic">
                        CURRENT <span className="text-anime-orange">TECHNIQUES</span>
                    </h2>
                    <p className="font-mono text-zinc-500 tracking-widest mt-2 uppercase">Analysis: Mastery Levels & Skill Progression</p>
                </div>

                {/* GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {techniques.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative p-8 border-2 border-white/5 bg-[#0F0F14] overflow-hidden group 
                ${tech.isPrimary ? "md:col-span-3" : "md:col-span-2"}
                ${tech.isGrowing ? "border-anime-red/30" : ""}
              `}
                        >
                            {/* Halftone Texture Overlay */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]" />

                            {/* ENERGY CORE (Background Icon) */}
                            <tech.icon className="absolute -right-4 -bottom-4 text-[10rem] opacity-5 rotate-12 group-hover:scale-110 transition-transform duration-700" />

                            {/* CARD CONTENT */}
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div
                                        className="p-4 rounded-none border-2 border-current bg-black"
                                        style={{ color: tech.color }}
                                    >
                                        <tech.icon className="text-4xl" />
                                    </div>

                                    {/* Status Indicator */}
                                    <div className="flex flex-col items-end">
                                        <span className="text-[10px] font-mono text-zinc-500">LEVEL_STATUS</span>
                                        <span className="text-sm font-bold tracking-tighter" style={{ color: tech.color }}>
                                            {tech.level}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bebas text-white mb-4 tracking-wider italic uppercase">
                                    {tech.name}
                                    {tech.isGrowing && (
                                        <motion.span
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                            className="ml-3 text-xs font-mono bg-anime-red text-white px-2 py-1 align-middle not-italic"
                                        >
                                            EVOLVING...
                                        </motion.span>
                                    )}
                                </h3>

                                <p className="text-zinc-400 font-inter text-sm md:text-base leading-relaxed mb-8">
                                    {tech.desc}
                                </p>

                                {/* TAGS / SUB-TECHNIQUES */}
                                <div className="flex flex-wrap gap-2">
                                    {tech.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] font-mono py-1 px-2 bg-white/5 text-white/60 border border-white/10 uppercase tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* DECORATIVE IMPACT ELEMENTS */}
                            {tech.isGrowing && (
                                <div className="absolute top-0 right-0 w-24 h-24 bg-anime-red opacity-10 blur-[60px] animate-pulse" />
                            )}

                            {/* HOVER BORDER EFFECT */}
                            <motion.div
                                className="absolute inset-0 border-2 border-transparent group-hover:border-current opacity-40 pointer-events-none transition-all duration-300"
                                style={{ color: tech.color }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}