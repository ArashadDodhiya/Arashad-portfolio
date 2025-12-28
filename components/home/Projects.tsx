"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

const projects = [
    {
        arc: "05",
        title: "MENTORIFY - MENTORSHIP PLATFORM",
        enemy: [
            "UNTRUSTED USERS",
            "AUTHENTICATION FLOWS",
            "ONBOARDING FRICTION",
            "SCALABILITY ISSUES"
        ],
        victory: [
            "OTP + JWT AUTH",
            "ROLE-BASED DASHBOARDS",
            "ADMIN APPROVAL WORKFLOWS",
            "REAL-TIME NOTIFICATIONS",
            "CLOUDINARY FILE HANDLING"
        ],
        link: "#",
    },
    {
        arc: "04",
        title: "DATASET ANALYZER - AI ASSISTED EDA",
        enemy: [
            "MANUAL DATA EXPLORATION",
            "MISSING VALUE CONFUSION",
            "OUTLIER DETECTION",
            "NO ML DIRECTION"
        ],
        victory: [
            "AUTOMATED EDA PIPELINE",
            "CSV / EXCEL UPLOADS",
            "INTERACTIVE VISUALIZATIONS",
            "AI ML TASK SUGGESTIONS",
            "EXPORTABLE REPORTS"
        ],
        link: "#",
    },
    {
        arc: "03",
        title: "SERVICE MARKETPLACE PLATFORM",
        enemy: [
            "UNAUTHORIZED ACCESS",
            "ROLE CONFUSION",
            "SERVICE DISCOVERY ISSUES",
            "DASHBOARD COMPLEXITY"
        ],
        victory: [
            "ROLE-BASED AUTHORIZATION",
            "DYNAMIC DASHBOARD ROUTING",
            "SECURE ACCESS CONTROL",
            "SCALABLE NEXT.JS ARCHITECTURE"
        ],
        link: "#",
    },
    {
        arc: "02",
        title: "REDDIT SENTIMENT ANALYSIS DASHBOARD",
        enemy: [
            "UNSTRUCTURED TEXT DATA",
            "SENTIMENT NOISE",
            "TREND IDENTIFICATION",
            "LOW INSIGHT VISIBILITY"
        ],
        victory: [
            "SENTIMENT ANALYSIS PIPELINE",
            "REAL-TIME VISUALIZATION",
            "KEYWORD FREQUENCY TRACKING",
            "PLOTLY + WORDCLOUD INSIGHTS"
        ],
        link: "#",
    },
];


export default function Projects() {
    return (
        <Section id="projects" title="MAJOR BATTLES" subtitle="PROJECT ARCS">
            <div className="space-y-16">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="group relative grid md:grid-cols-2 gap-0 border-y-2 border-anime-text-muted/20 bg-anime-black overflow-hidden"
                    >
                        {/* Lightning Bolt Separator (Absolute Centered) */}
                        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-anime-text-muted/20 z-20 group-hover:bg-anime-orange group-hover:shadow-[0_0_20px_orange] transition-all duration-300 transform -skew-x-12 origin-center" />

                        {/* Left Side: The Protocol (Project Info) */}
                        <div className="p-8 md:p-12 relative flex flex-col justify-center items-end text-right border-r border-anime-text-muted/10 md:border-none group-hover:bg-white/5 transition-colors duration-500">
                            <span className="font-bebas text-9xl text-anime-text-muted/10 absolute left-4 top-0 z-0 select-none">
                                {project.arc}
                            </span>

                            <div className="relative z-10">
                                <span className="text-anime-orange font-mono text-sm tracking-widest mb-2 block uppercase">
                                    Battle Record
                                </span>
                                <h3 className="text-4xl md:text-5xl font-bebas text-white mb-6 uppercase leading-0.9">
                                    {project.title}
                                </h3>
                                <Button variant="outline" className="ml-auto">
                                    View Log
                                </Button>
                            </div>
                        </div>

                        {/* Right Side: The Enemy (Cure/Solution) */}
                        <div className="p-8 md:p-12 relative flex flex-col justify-center border-l border-anime-text-muted/10 md:border-none bg-dots-pattern group-hover:bg-anime-purple/5 transition-colors duration-500">
                            <div className="space-y-8 relative z-10">

                                {/* Enemy Section */}
                                <div>
                                    <h4 className="flex items-center gap-2 font-bebas text-xl text-anime-red mb-2">
                                        <span className="animate-pulse">⚠️</span> THREAT DETECTED
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.enemy.map((e, i) => (
                                            <span key={i} className="font-mono text-xs text-anime-red border border-anime-red/30 px-2 py-1 bg-anime-red/5">
                                                {e}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Victory Section */}
                                <div>
                                    <h4 className="flex items-center gap-2 font-bebas text-xl text-anime-purple mb-2">
                                        <span className="text-anime-orange">✨</span> COUNTER MEASURE
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.victory.map((v, i) => (
                                            <span key={i} className="font-mono text-xs text-anime-purple border border-anime-purple/30 px-2 py-1 bg-anime-purple/5">
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
