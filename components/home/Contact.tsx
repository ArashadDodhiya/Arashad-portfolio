"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Contact() {
    return (
        <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#08080A]">
            {/* 1. CINEMATIC LETTERBOXING */}
            <div className="absolute top-0 left-0 w-full h-[10vh] bg-black z-30" />
            <div className="absolute bottom-0 left-0 w-full h-[10vh] bg-black z-30 flex items-center justify-center">
                {/* Animated "To Be Continued" arrow style */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="flex items-center gap-4 text-white/40 font-bebas tracking-[0.5em] text-xs"
                >
                    <div className="h-[1px] w-20 bg-current" />
                    TO BE CONTINUED IN SEASON 2
                    <div className="h-[1px] w-20 bg-current" />
                </motion.div>
            </div>

            {/* 2. BACKGROUND VISUALS: THE "RECAP" FEEL */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F0F14]/80 to-black" />
                {/* Subtle scanning lines to feel like a broadcast ending */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="relative z-20 max-w-5xl w-full px-6 text-center"
            >
                <motion.span
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-anime-orange font-mono text-xs tracking-[0.5em] uppercase mb-6 block"
                >
                    Final Episode: The New Alliance
                </motion.span>

                <h2 className="text-7xl md:text-[12rem] font-bebas text-white uppercase leading-none mb-4 tracking-tighter italic">
                    SEASON 1 <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-500 to-zinc-800 drop-shadow-2xl">
                        COMPLETE
                    </span>
                </h2>

                <div className="relative inline-block mb-12">
                    <motion.p
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        whileInView={{ clipPath: "inset(0 0 0 0)" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-xl md:text-2xl text-zinc-400 font-inter max-w-2xl mx-auto leading-relaxed"
                    >
                        Every great arc acts as a setup for the next. The training is done. The foundations are set.
                        <br />
                        <span className="text-white font-bold block mt-4 tracking-widest uppercase italic bg-anime-red/10 py-2">
                            READY FOR STRONGER BATTLES TOGETHER?
                        </span>
                    </motion.p>
                </div>

                {/* 3. TACTICAL ACTION BUTTONS */}
                <div className="flex flex-wrap justify-center gap-4">
                    {[
                        { label: "START MISSION (EMAIL)", variant: "primary", color: "#FF6B00" },
                        { label: "ALLIANCE (LINKEDIN)", variant: "outline", color: "#6A00FF" },
                        { label: "CODEBASE (GITHUB)", variant: "outline", color: "#F5F5F5" }
                    ].map((btn, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant={btn.variant as any}
                                size="lg"
                                className={`group relative overflow-hidden border-2 px-8 py-6`}
                            >
                                <span className="relative z-10 font-bebas text-2xl tracking-wide">{btn.label}</span>
                                {/* Shimmer effect on hover */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-white/10 skew-x-12" />
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* 4. FINAL SIGNATURE */}
                <div className="mt-20 opacity-20 flex flex-col items-center">
                    <div className="h-px w-12 bg-white mb-4" />
                    <p className="font-mono text-[10px] tracking-[0.2em]">DIRECTED BY ARASHAD DODHIYA</p>
                    <p className="font-mono text-[8px] mt-1 italic">PRODUCED IN NEON-TOKYO // 2025</p>
                </div>
            </motion.div>

            {/* 5. DECORATIVE SIDEBARS (EVANGELION STYLE) */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2 opacity-20 text-[10px] font-mono text-white vertical-rl">
                <span>STATUS: READY</span>
                <div className="h-20 w-[1px] bg-white mx-auto" />
                <span>CONNECTION: ESTABLISHED</span>
            </div>
        </section>
    );
}