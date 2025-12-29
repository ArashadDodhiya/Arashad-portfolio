"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

const projects = [
    {
        arc: "05",
        title: "MENTORIFY - MENTORSHIP PLATFORM",
        enemy: ["UNTRUSTED USERS", "AUTH FLOWS", "FRICTION", "SCALABILITY"],
        victory: ["OTP + JWT AUTH", "ROLE-DASHBOARDS", "ADMIN APPROVAL", "REAL-TIME", "CLOUDINARY"],
        link: "#",
    },
    {
        arc: "04",
        title: "DATASET ANALYZER - AI ASSISTED EDA",
        enemy: ["MANUAL EXPLORATION", "MISSING VALUES", "OUTLIERS", "NO DIRECTION"],
        victory: ["AUTO PIPELINE", "CSV/EXCEL UPLOADS", "VISUALIZATIONS", "AI TASK SUGGESTIONS"],
        link: "#",
    },
    {
        arc: "03",
        title: "SERVICE MARKETPLACE PLATFORM",
        enemy: ["UNAUTHORIZED ACCESS", "ROLE CONFUSION", "DISCOVERY ISSUES"],
        victory: ["ROLE-BASED AUTH", "DYNAMIC ROUTING", "SECURE ACCESS", "NEXT.JS ARCH"],
        link: "#",
    },
    {
        arc: "02",
        title: "REDDIT SENTIMENT DASHBOARD",
        enemy: ["UNSTRUCTURED DATA", "SENTIMENT NOISE", "TREND TRACKING"],
        victory: ["SENTIMENT PIPELINE", "REAL-TIME VIS", "KEYWORD FREQ", "PLOTLY INSIGHTS"],
        link: "#",
    },
];

export default function Projects() {
    return (
        <Section id="projects" title="MAJOR BATTLES" subtitle="PROJECT ARCS">
            <div className="space-y-8 md:space-y-16">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="group relative grid grid-cols-1 md:grid-cols-2 gap-0 border-y md:border-y-2 border-white/10 bg-[#0F0F14] overflow-hidden"
                    >
                        {/* Lightning Bolt Separator (Only Desktop) */}
                        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-white/10 z-20 group-hover:bg-anime-orange group-hover:shadow-[0_0_20px_orange] transition-all duration-300 transform -skew-x-12 origin-center" />

                        {/* Left Side: The Protocol (Project Info) */}
                        <div className="p-6 md:p-12 relative flex flex-col justify-center items-start md:items-end text-left md:text-right border-b md:border-b-0 md:border-r border-white/10 group-hover:bg-white/[0.02] transition-colors duration-500">
                            {/* Background Arc Number */}
                            <span className="font-bebas text-7xl md:text-9xl text-white/[0.03] absolute left-4 md:left-auto md:right-4 top-0 z-0 select-none">
                                {project.arc}
                            </span>

                            <div className="relative z-10 w-full">
                                <span className="text-anime-orange font-mono text-[10px] md:text-sm tracking-[0.3em] mb-2 block uppercase">
                                    Battle Record
                                </span>
                                <h3 className="text-3xl md:text-5xl font-bebas text-white mb-6 uppercase leading-[0.9] tracking-tighter">
                                    {project.title}
                                </h3>
                                <div className="flex md:justify-end">
                                    <Button variant="outline" size="sm" className="group-hover:bg-white group-hover:text-black transition-all">
                                        View Log
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: The Enemy (Cure/Solution) */}
                        <div className="p-6 md:p-12 relative flex flex-col justify-center bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px] group-hover:bg-anime-purple/[0.03] transition-colors duration-500">
                            <div className="space-y-6 md:space-y-8 relative z-10">
                                {/* Enemy Section */}
                                <div>
                                    <h4 className="flex items-center gap-2 font-bebas text-lg md:text-xl text-anime-red mb-3">
                                        <span className="animate-pulse">⚠️</span> THREAT_DETECTED
                                    </h4>
                                    <div className="flex flex-wrap gap-2 md:justify-start">
                                        {project.enemy.map((e, i) => (
                                            <span key={i} className="font-mono text-[9px] md:text-xs text-anime-red border border-anime-red/30 px-2 py-1 bg-anime-red/5 whitespace-nowrap">
                                                {e}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Victory Section */}
                                <div>
                                    <h4 className="flex items-center gap-2 font-bebas text-lg md:text-xl text-anime-purple mb-3">
                                        <span className="text-anime-orange">✨</span> COUNTER_MEASURE
                                    </h4>
                                    <div className="flex flex-wrap gap-2 md:justify-start">
                                        {project.victory.map((v, i) => (
                                            <span key={i} className="font-mono text-[9px] md:text-xs text-anime-purple border border-anime-purple/30 px-2 py-1 bg-anime-purple/5 whitespace-nowrap">
                                                {v}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Slash Effect overlay */}
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100 mix-blend-overlay pointer-events-none" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}