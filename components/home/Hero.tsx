"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax values - subtle adjustments for better mobile performance
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const rotate = useTransform(scrollY, [0, 500], [-12, -18]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100svh] w-full bg-[#08080A] flex items-center justify-center overflow-hidden py-20"
        >
            {/* 1. THE IMPACT SLASH */}
            <motion.div
                style={{ rotate, y: y1 }}
                className="absolute top-[-10%] right-[-10%] w-[140%] h-[120%] bg-[#FF6B00] opacity-5 md:opacity-10 pointer-events-none"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(black_2px,transparent_2px)] [background-size:8px_8px] md:[background-size:10px_10px]" />
            </motion.div>

            {/* 2. SPEED LINES */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" preserveAspectRatio="none" className="absolute inset-0">
                    <pattern id="speed-lines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="80" y2="80" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#speed-lines)" />
                </svg>
            </div>

            {/* 3. CENTER CONTENT */}
            <div className="relative z-20 container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center">

                {/* Episode Tag */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-2 md:gap-4 mb-8 md:mb-12"
                >
                    <div className="h-[1px] w-8 md:w-12 bg-anime-orange" />
                    <span className="text-anime-orange font-mono text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-center">
                        EPISODE_01 // THE_AWAKENING
                    </span>
                    <div className="h-[1px] w-8 md:w-12 bg-anime-orange" />
                </motion.div>

                {/* MASSIVE IMPACT TYPOGRAPHY */}
                <div className="relative w-full flex justify-center">
                    <motion.div style={{ y: y2 }} className="flex flex-col items-center w-full">
                        <h1 className="text-[18vw] sm:text-[15vw] md:text-[13vw] lg:text-[14vw] font-bebas leading-[0.8] text-white italic tracking-tighter flex flex-col items-center">
                            <motion.span
                                initial={{ x: -50, opacity: 0 }}
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
                                transition={{ delay: 0.4 }}
                            >
                                {/* Layered Text Shadows (Optimized for performance) */}
                                <span className="absolute top-[1px] left-[1px] md:top-[2px] md:left-[2px] text-anime-red opacity-70 select-none">DODHIYA</span>
                                <span className="absolute top-[-1px] left-[-1px] md:top-[-2px] md:left-[-2px] text-anime-purple opacity-70 select-none">DODHIYA</span>
                                <span className="relative text-white border-b-2 md:border-b-4 border-anime-orange">DODHIYA</span>
                            </motion.span>
                        </h1>
                    </motion.div>

                    {/* Decorative Kanji */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.5 }}
                        animate={{ opacity: 0.05, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] md:text-[30vw] font-black text-white pointer-events-none -z-10 select-none"
                    >
                        最強
                    </motion.div>
                </div>

                {/* SUBTITLE & MISSION */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-8 md:mt-12 text-center px-4"
                >
                    <div className="text-zinc-500 font-mono text-[10px] md:text-sm lg:text-lg tracking-widest uppercase mb-4 flex flex-wrap items-center justify-center gap-2 md:gap-4">
                        <span>Web Architect</span>
                        <span className="hidden sm:block w-1.5 h-1.5 bg-anime-red rotate-45" />
                        <span>AI Pioneer</span>
                        <span className="hidden sm:block w-1.5 h-1.5 bg-anime-purple rotate-45" />
                        <span>Cybersecurity</span>
                    </div>
                    <h3 className="text-white text-xl sm:text-2xl md:text-4xl font-bebas italic tracking-wide">
                        &quot;NOT THE STRONGEST. <span className="text-anime-orange underline decoration-2 underline-offset-4 md:underline-offset-8">NOT YET.</span>&quot;
                    </h3>
                </motion.div>

                {/* CALL TO ACTION */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-10 md:mt-16 flex flex-col sm:flex-row gap-4 md:gap-8 w-full max-w-md sm:max-w-none justify-center items-center"
                >
                    <div className="relative group w-full sm:w-auto">
                        <div className="absolute -inset-1 bg-anime-orange blur opacity-20 group-hover:opacity-70 transition duration-500 rounded" />
                        <Button
                            variant="primary"
                            className="relative w-full sm:w-auto bg-black border-2 border-anime-orange text-anime-orange hover:bg-anime-orange hover:text-black px-8 md:px-12 py-4 md:py-8 text-xl md:text-2xl font-bebas sm:skew-x-[-10deg] transition-all"
                        >
                            START MISSION
                        </Button>
                    </div>

                    <Button
                        variant="outline"
                        className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-8 text-xl md:text-2xl font-bebas sm:skew-x-[-10deg] border-2 border-zinc-700 hover:border-white text-white transition-all"
                    >
                        COLLECT INTEL (CV)
                    </Button>
                </motion.div>
            </div>

            {/* 4. TACTICAL HUD ELEMENTS (Hidden on small mobile) */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 opacity-30 md:opacity-20 hidden sm:block">
                <div className="font-mono text-[8px] md:text-[10px] text-white space-y-1">
                    <p>LAT: 22.3039° N</p>
                    <p>LONG: 70.8022° E</p>
                    <p className="text-anime-orange">STATUS: SYSTEM_READY</p>
                </div>
            </div>

            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex flex-col items-end opacity-30 md:opacity-20 hidden sm:block">
                <div className="w-16 md:w-32 h-[1px] md:h-[2px] bg-white mb-2" />
                <p className="font-mono text-[8px] md:text-[10px] text-white tracking-[0.3em] md:tracking-[0.5em]">VERSION_2.0.25</p>
            </div>
        </section>
    );
}