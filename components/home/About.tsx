"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="relative py-16 md:py-24 bg-[#08080A] overflow-hidden">
            {/* 1. BACKGROUND TEXTURE */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* SECTION HEADER */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-4 mb-12 md:mb-16 border-b-2 border-white/10 pb-4">
                    <h2 className="text-6xl sm:text-7xl md:text-9xl font-bebas text-white leading-none tracking-tighter italic">
                        ORIGIN <span className="text-anime-purple">STORY</span>
                    </h2>
                    <span className="font-mono text-[10px] md:text-xs text-zinc-500 mb-1 md:mb-2 tracking-[0.2em] md:tracking-[0.3em] uppercase">
                        ARC_01 // THE_GENESIS
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">

                    {/* PANEL 1: THE AWAKENING */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="md:col-span-7 relative group w-full"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-anime-purple to-transparent opacity-10 group-hover:opacity-30 blur transition-opacity" />
                        <div
                            className="relative bg-black border-2 border-white/20 p-6 md:p-10 min-h-[300px] md:min-h-[350px] flex flex-col justify-end overflow-hidden"
                            // Slant is less aggressive on mobile (98% vs 95%) to protect text
                            style={{ clipPath: "polygon(0 0, 100% 0, var(--slant, 98%) 100%, 0% 100%)" }}
                        >
                            {/* Background Kanji Decor */}
                            <div className="absolute top-2 right-2 md:top-4 md:right-4 text-7xl md:text-9xl font-black text-white/[0.03] select-none pointer-events-none">
                                覚醒
                            </div>

                            <div className="relative z-10">
                                <span className="text-anime-purple font-mono text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase mb-3 block underline decoration-anime-purple underline-offset-4">
                                    Phase 01: The Spark
                                </span>
                                <h3 className="text-4xl md:text-6xl font-bebas text-white mb-4 italic tracking-tight uppercase">
                                    THE AWAKENING
                                </h3>
                                <p className="text-zinc-400 font-inter text-base md:text-lg leading-relaxed max-w-md">
                                    "I didn't just want to use systems; I wanted to know why they <span className="text-white italic underline">shatter</span>. Obsessed with the core logic that defines the digital realm."
                                </p>
                            </div>

                            <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-anime-purple opacity-10 blur-3xl group-hover:opacity-30 transition-opacity" />
                        </div>
                        {/* CSS variable for responsive clip path */}
                        <style jsx>{`
                            @media (min-width: 768px) {
                                .relative { --slant: 95%; }
                            }
                        `}</style>
                    </motion.div>

                    {/* PANEL 2: THE ALERT */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:col-span-5 relative h-full"
                    >
                        <div
                            className="h-full bg-anime-orange border-4 border-black p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden rotate-1 md:rotate-3 shadow-[6px_6px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_rgba(0,0,0,1)]"
                        >
                            <motion.div
                                animate={{ top: ["-10%", "110%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 w-full h-4 bg-white/20 blur-md z-10"
                            />

                            <h4 className="font-bebas text-6xl md:text-8xl text-black tracking-tighter leading-none mb-2 text-center">
                                TRAINING
                            </h4>
                            <p className="font-mono text-[10px] md:text-xs text-black font-black bg-white px-2 py-1 rotate-[-2deg]">
                                SYSTEMS_LOADED // 99%
                            </p>
                            <div className="mt-6 md:mt-8 text-black/50 font-mono text-[8px] md:text-[10px] leading-tight text-center uppercase tracking-tighter">
                                BUILDING... BREAKING... <br /> UNDERSTANDING {">"} MEMORY
                            </div>
                        </div>
                    </motion.div>

                    {/* PANEL 3: THE RESOLVE */}
                    <motion.div
                        initial={{ scale: 0.98, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="md:col-span-12 mt-4 md:mt-8"
                    >
                        <div className="relative bg-[#0F0F14] border-l-4 md:border-l-8 border-anime-red p-6 md:p-12 overflow-hidden">
                            {/* Speed Lines */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,white_10px,white_11px)]" />

                            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 md:gap-10">
                                <div className="flex-1 text-center lg:text-left">
                                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                                        <div className="h-[2px] w-6 md:w-8 bg-anime-red" />
                                        <span className="text-anime-red font-mono text-[10px] md:text-xs tracking-widest uppercase font-bold">Absolute Objective</span>
                                    </div>
                                    <p className="text-2xl sm:text-3xl md:text-5xl font-bebas text-white leading-[1.1] tracking-tight uppercase italic">
                                        "MY NINJA WAY IS TO BUILD SYSTEMS THAT CAN <br className="hidden md:block" />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-anime-red via-anime-orange to-white">
                                            WITHSTAND ANY DOMAIN ATTACK.
                                        </span>"
                                    </p>
                                </div>

                                {/* Radar UI - Hidden on small mobile to save space */}
                                <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center shrink-0">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 border border-dashed border-anime-red/30 rounded-full"
                                    />
                                    <div className="w-12 h-12 md:w-16 md:h-16 border border-anime-red/50 flex items-center justify-center rotate-45">
                                        <span className="text-[8px] md:text-[10px] font-mono text-anime-red -rotate-45 animate-pulse">ACTIVE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* VERTICAL TEXT - Visible only on large screens */}
            <div className="absolute left-2 bottom-10 md:left-4 md:bottom-20 opacity-10 hidden xl:block vertical-rl rotate-180">
                <span className="font-mono text-xs md:text-sm tracking-[1em] text-white">RECORDS_OF_A_RELENTLESS_DEVELOPER</span>
            </div>
        </section>
    );
}