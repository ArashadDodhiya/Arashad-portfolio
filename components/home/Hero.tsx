"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Timing Constants
    const imgDuration = 1.2;
    const textStartDelay = 0.8; // Text starts appearing while image finishes

    // Parallax values
    const ySlash = useTransform(scrollY, [0, 500], [0, 150]);
    const yImage = useTransform(scrollY, [0, 500], [0, 60]);
    const yText = useTransform(scrollY, [0, 500], [0, -120]);
    const rotate = useTransform(scrollY, [0, 500], [-12, -18]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100svh] w-full bg-[#08080A] overflow-hidden flex items-center justify-center"
        >
            {/* 1. DIAGONAL IMPACT SLASH */}
            <motion.div
                style={{ rotate, y: ySlash }}
                className="absolute top-[-10%] right-[-10%] w-[140%] h-[120%] bg-[#FF6B00] opacity-5 md:opacity-10 pointer-events-none"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(black_2px,transparent_2px)] [background-size:10px_10px]" />
            </motion.div>

            {/* 2. SPEED LINE BACKGROUND */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" preserveAspectRatio="none">
                    <pattern id="speed" width="80" height="80" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="80" y2="80" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#speed)" />
                </svg>
            </div>

            {/* 3. IMAGE — THE FIRST TO APPEAR */}
            <motion.div
                style={{ y: yImage }}
                initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: imgDuration, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] md:w-[45vw] lg:w-[40vw] h-[75vh] md:h-[85vh] z-10 pointer-events-none"
            >
                <div className="relative w-full h-full grayscale contrast-125 brightness-110 opacity-40 md:opacity-50">
                    <Image
                        src="/Arashad.png"
                        alt="Arashad Manga Presence"
                        fill
                        priority
                        className="object-contain object-bottom md:object-cover md:object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent" />
                </div>
            </motion.div>

            {/* 4. MAIN CONTENT — SEQUENTIAL REVEAL */}
            <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center">

                {/* Episode Tag */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: textStartDelay, duration: 0.5 }}
                    className="flex items-center gap-4 mb-6 md:mb-10"
                >
                    <div className="h-[1px] w-6 md:w-10 bg-anime-orange" />
                    <span className="text-anime-orange font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">
                        EPISODE_01 // THE_AWAKENING
                    </span>
                    <div className="h-[1px] w-6 md:w-10 bg-anime-orange" />
                </motion.div>

                {/* NAME — MASSIVE TYPOGRAPHY */}
                <motion.div style={{ y: yText }} className="relative">
                    <h1 className="text-[16vw] md:text-[14vw] font-bebas italic leading-[0.85] tracking-tighter text-white">
                        <motion.span
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: textStartDelay + 0.2, duration: 0.8 }}
                            className="block drop-shadow-[0_12px_12px_rgba(0,0,0,0.9)]"
                        >
                            ARASHAD
                        </motion.span>

                        <motion.span
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: textStartDelay + 0.4, duration: 0.8 }}
                            className="relative inline-block"
                        >
                            <span className="absolute top-[2px] left-[2px] text-anime-red opacity-70">DODHIYA</span>
                            <span className="absolute top-[-2px] left-[-2px] text-anime-purple opacity-70">DODHIYA</span>
                            <span className="relative border-b-2 md:border-b-4 border-anime-orange">DODHIYA</span>
                        </motion.span>
                    </h1>

                    {/* Kanji Background */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.04 }}
                        transition={{ delay: textStartDelay + 0.8, duration: 2 }}
                        className="absolute inset-0 flex items-center justify-center text-[30vw] font-black text-white select-none pointer-events-none"
                    >
                        最強
                    </motion.div>
                </motion.div>

                {/* ROLES + QUOTE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: textStartDelay + 0.6 }}
                    className="mt-8 md:mt-10"
                >
                    <div className="text-black font-mono text-[10px] md:text-sm tracking-widest uppercase mb-4 flex flex-wrap justify-center gap-3 md:gap-4">
                        <span>Web Architect</span>
                        <span className="w-1 h-1 bg-anime-red rotate-45 self-center" />
                        <span>AI Pioneer</span>
                        <span className="w-1 h-1 bg-anime-purple rotate-45 self-center" />
                        <span>Cybersecurity</span>
                    </div>

                    <h3 className="text-white text-lg md:text-4xl font-bebas italic">
                        “NOT THE STRONGEST.
                        <span className="text-anime-orange underline underline-offset-8 ml-2">
                            NOT YET.
                        </span>”
                    </h3>
                </motion.div>

                {/* CTA BUTTONS */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: textStartDelay + 0.9 }}
                    className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 md:gap-6"
                >
                    <Button
                        variant="primary"
                        className="bg-black border-2 border-anime-orange text-anime-orange hover:bg-anime-orange hover:text-black px-8 md:px-10 py-4 md:py-6 text-xl md:text-2xl font-bebas skew-x-[-10deg] transition-all"
                    >
                        START MISSION
                    </Button>

                    <Button
                        variant="outline"
                        className="border-2 border-zinc-700 text-white hover:border-white px-8 md:px-10 py-4 md:py-6 text-xl md:text-2xl font-bebas skew-x-[-10deg] transition-all"
                    >
                        COLLECT INTEL (CV)
                    </Button>
                </motion.div>
            </div>

            {/* HUD Elements (Late Reveal) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: textStartDelay + 1.2 }}
                className="absolute top-8 left-8 hidden sm:block"
            >
                <div className="font-mono text-[10px] text-white">
                    <p>LAT: 22.3039° N</p>
                    <p>LONG: 70.8022° E</p>
                    <p className="text-anime-orange">STATUS: SYSTEM_READY</p>
                </div>
            </motion.div>
        </section>
    );
}