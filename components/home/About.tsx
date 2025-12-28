"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="relative py-24 bg-[#08080A] overflow-hidden">
            {/* 1. BACKGROUND TEXTURE (Manga Paper Feel) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="container mx-auto px-6 relative z-10">
                {/* SECTION HEADER */}
                <div className="flex items-end gap-4 mb-16 border-b-2 border-white/10 pb-4">
                    <h2 className="text-7xl md:text-9xl font-bebas text-white leading-none tracking-tighter italic">
                        ORIGIN <span className="text-anime-purple">STORY</span>
                    </h2>
                    <span className="font-mono text-xs text-zinc-500 mb-2 tracking-[0.3em]">ARC_01 // THE_GENESIS</span>
                </div>

                <div className="grid md:grid-cols-12 gap-6 relative">

                    {/* PANEL 1: THE AWAKENING (Ink-Heavy Style) */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="md:col-span-7 relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-anime-purple to-transparent opacity-20 blur group-hover:opacity-40 transition-opacity" />
                        <div
                            className="relative bg-black border-2 border-white/20 p-10 min-h-[350px] flex flex-col justify-end overflow-hidden"
                            style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}
                        >
                            {/* Background Kanji Decor */}
                            <div className="absolute top-4 right-4 text-9xl font-black text-white/[0.03] select-none pointer-events-none">
                                覚醒
                            </div>

                            <div className="relative z-10">
                                <span className="text-anime-purple font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block underline decoration-anime-purple underline-offset-4">
                                    Phase 01: The Spark
                                </span>
                                <h3 className="text-4xl md:text-6xl font-bebas text-white mb-4 italic tracking-tight uppercase">
                                    THE AWAKENING
                                </h3>
                                <p className="text-zinc-400 font-inter text-lg leading-relaxed max-w-md">
                                    "I didn't just want to use systems; I wanted to know why they <span className="text-white italic underline">shatter</span>. Obsessed with the core logic that defines the digital realm."
                                </p>
                            </div>

                            {/* Halftone Detail */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-anime-purple opacity-10 blur-3xl group-hover:opacity-30 transition-opacity" />
                        </div>
                    </motion.div>

                    {/* PANEL 2: THE ALERT (High-Contrast Static) */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:col-span-5 relative"
                    >
                        <div
                            className="h-full bg-anime-orange border-4 border-black p-8 flex flex-col items-center justify-center relative overflow-hidden rotate-2 md:rotate-3 shadow-[10px_10px_0px_rgba(0,0,0,1)]"
                        >
                            {/* Animated Scanning Line */}
                            <motion.div
                                animate={{ top: ["-10%", "110%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 w-full h-4 bg-white/20 blur-md z-10"
                            />

                            <h4 className="font-bebas text-8xl text-black tracking-tighter leading-none mb-2">
                                TRAINING
                            </h4>
                            <p className="font-mono text-xs text-black font-black bg-white px-2 py-1 rotate-[-2deg]">
                                SYSTEMS_LOADED // 99%
                            </p>
                            <div className="mt-8 text-black/40 font-mono text-[8px] leading-tight">
                                BUILDING... BREAKING... <br /> UNDERSTANDING {">"} MEMORY
                            </div>
                        </div>
                    </motion.div>

                    {/* PANEL 3: THE RESOLVE (Full Width Dialogue Box) */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="md:col-span-12 mt-8"
                    >
                        <div className="relative bg-[#0F0F14] border-l-8 border-anime-red p-12 overflow-hidden">
                            {/* Manga Speed Lines Overlay */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,white_10px,white_11px)]" />

                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="h-[2px] w-8 bg-anime-red" />
                                        <span className="text-anime-red font-mono text-xs tracking-widest uppercase font-bold">Absolute Objective</span>
                                    </div>
                                    <p className="text-3xl md:text-5xl font-bebas text-white leading-[1.1] tracking-tight uppercase italic">
                                        "MY NINJA WAY IS TO BUILD SYSTEMS THAT CAN <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-anime-red via-anime-orange to-white">
                                            WITHSTAND ANY DOMAIN ATTACK.
                                        </span>"
                                    </p>
                                </div>

                                {/* Decorative Radar UI */}
                                <div className="relative w-32 h-32 flex items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 border border-dashed border-anime-red/30 rounded-full"
                                    />
                                    <div className="w-16 h-16 border border-anime-red/50 flex items-center justify-center rotate-45">
                                        <span className="text-[10px] font-mono text-anime-red -rotate-45 animate-pulse">ACTIVE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* FLOATING DECOR: VERTICAL TEXT (Evangelion Style) */}
            <div className="absolute left-4 bottom-20 opacity-10 hidden lg:block vertical-rl rotate-180">
                <span className="font-mono text-sm tracking-[1em] text-white">RECORDS_OF_A_RELENTLESS_DEVELOPER</span>
            </div>
        </section>
    );
}