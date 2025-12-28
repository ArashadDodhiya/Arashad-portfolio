"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax values for that "3D Manga" feel
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const rotate = useTransform(scrollY, [0, 500], [-12, -20]);

    return (
        <section
            ref={containerRef}
            className="relative h-[110vh] w-full bg-[#08080A] flex items-center justify-center overflow-hidden"
        >
            {/* 1. THE IMPACT SLASH (Background Layer) */}
            <motion.div
                style={{ rotate, y: y1 }}
                className="absolute top-[-10%] right-[-10%] w-[120%] h-[120%] bg-[#FF6B00] opacity-10 pointer-events-none"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
                {/* Halftone Texture Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(black_2px,transparent_2px)] [background-size:10px_10px]" />
            </motion.div>

            {/* 2. SPEED LINES (Background Layer) */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" className="absolute inset-0">
                    <pattern id="speed-lines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#speed-lines)" />
                </svg>
            </div>

            {/* 3. CENTER CONTENT (Foreground Layer) */}
            <div className="relative z-20 container mx-auto px-6 flex flex-col items-center">

                {/* The "Episode" Tag - Tactical UI style */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-4 mb-12"
                >
                    <div className="h-[1px] w-12 bg-anime-orange" />
                    <span className="text-anime-orange font-mono text-xs tracking-[0.5em] uppercase">
                        EPISODE_01 // THE_AWAKENING
                    </span>
                    <div className="h-[1px] w-12 bg-anime-orange" />
                </motion.div>

                {/* MASSIVE IMPACT TYPOGRAPHY */}
                <div className="relative">
                    <motion.div
                        style={{ y: y2 }}
                        className="flex flex-col items-center"
                    >
                        <h1 className="text-[12vw] md:text-[14vw] font-bebas leading-[0.75] text-white italic tracking-tighter flex flex-col items-center">
                            <motion.span
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative z-10"
                            >
                                ARASHAD
                            </motion.span>
                            <motion.span
                                className="relative inline-block font-bebas text-white"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {/* Layer 1: Red Offset */}
                                <span className="absolute top-[2px] left-[2px] text-anime-red opacity-70">DODHIYA</span>

                                {/* Layer 2: Purple Offset */}
                                <span className="absolute top-[-2px] left-[-2px] text-anime-purple opacity-70">DODHIYA</span>

                                {/* Layer 3: Main White Text */}
                                <span className="relative text-white border-b-4 border-anime-orange">DODHIYA</span>
                            </motion.span>
                        </h1>
                    </motion.div>

                    {/* Decorative "Cursed" Kanji behind the name */}
                    <motion.div
                        initial={{ opacity: 0, scale: 2 }}
                        animate={{ opacity: 0.05, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white pointer-events-none -z-10"
                    >
                        最強
                    </motion.div>
                </div>

                {/* SUBTITLE & MISSION STATEMENT */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-12 text-center"
                >
                    <p className="text-zinc-500 font-mono text-sm md:text-lg tracking-widest uppercase mb-4 flex items-center justify-center gap-3">
                        <span>Web Architect</span>
                        <span className="w-2 h-2 bg-anime-red rotate-45" />
                        <span>AI Pioneer</span>
                        <span className="w-2 h-2 bg-anime-purple rotate-45" />
                        <span>Cybersecurity</span>
                    </p>
                    <h3 className="text-white text-2xl md:text-4xl font-bebas italic tracking-wide">
                        &quot;NOT THE STRONGEST. <span className="text-anime-orange underline decoration-2 underline-offset-8">NOT YET.</span>&quot;
                    </h3>
                </motion.div>

                {/* CALL TO ACTION - FIGHTER SELECT STYLE */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-16 flex flex-col md:flex-row gap-8"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-anime-orange blur opacity-25 group-hover:opacity-100 transition duration-500" />
                        <Button
                            variant="primary"
                            size="lg"
                            className="relative bg-black border-2 border-anime-orange text-anime-orange hover:bg-anime-orange hover:text-black px-12 py-8 text-2xl font-bebas skew-x-[-10deg] transition-all"
                        >
                            START MISSION
                        </Button>
                    </div>

                    <Button
                        variant="outline"
                        size="lg"
                        className="px-12 py-8 text-2xl font-bebas skew-x-[-10deg] border-2 border-zinc-700 hover:border-white text-white transition-all"
                    >
                        COLLECT INTEL (CV)
                    </Button>
                </motion.div>
            </div>

            {/* 4. TACTICAL HUD ELEMENTS (Corners) */}
            <div className="absolute top-10 left-10 opacity-20 hidden md:block">
                <div className="font-mono text-[10px] text-white space-y-1">
                    <p>LAT: 22.3039° N</p>
                    <p>LONG: 70.8022° E</p>
                    <p>STATUS: SYSTEM_READY</p>
                </div>
            </div>

            <div className="absolute bottom-10 right-10 flex flex-col items-end opacity-20 hidden md:block">
                <div className="w-32 h-[2px] bg-white mb-2" />
                <p className="font-mono text-[10px] text-white tracking-[0.5em]">VERSION_2.0.25</p>
            </div>
        </section>
    );
}