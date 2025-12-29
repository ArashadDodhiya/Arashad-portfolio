"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Contact() {
    const contactLinks = [
        {
            label: "START MISSION (EMAIL)",
            variant: "primary" as const,
            link: "mailto:ahd613900@gmail.com?subject=MISSION_RECRUITMENT",
            external: false,
        },
        {
            label: "ALLIANCE (LINKEDIN)",
            variant: "outline" as const,
            link: "https://www.linkedin.com/in/arashad-dodhiya-9b3353241/",
            external: true,
        },
        {
            label: "CODEBASE (GITHUB)",
            variant: "outline" as const,
            link: "https://github.com/ArashadDodhiya",
            external: true,
        },
    ];

    const handleNavigation = (link: string, external: boolean) => {
        if (external) {
            window.open(link, "_blank", "noopener,noreferrer");
        } else {
            window.location.href = link;
        }
    };

    return (
        <section
            id="contact"
            className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#08080A] py-20 md:py-0"
        >
            {/* 1. CINEMATIC LETTERBOXING */}
            <div className="absolute top-0 left-0 w-full h-[5vh] md:h-[10vh] bg-black z-30 border-b border-white/5" />
            <div className="absolute bottom-0 left-0 w-full h-[5vh] md:h-[10vh] bg-black z-30 flex items-center justify-center border-t border-white/5">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="flex items-center gap-2 md:gap-4 text-white/40 font-bebas tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs"
                >
                    <div className="h-[1px] w-10 md:w-20 bg-current" />
                    TO BE CONTINUED IN SEASON 2
                    <div className="h-[1px] w-10 md:w-20 bg-current" />
                </motion.div>
            </div>

            {/* 2. BACKGROUND VISUALS */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F0F14]/80 to-black" />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="relative z-20 max-w-5xl w-full px-4 sm:px-6 text-center"
            >
                <motion.span
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-anime-orange font-mono text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4 md:mb-6 block"
                >
                    Final Episode: The New Alliance
                </motion.span>

                <h2 className="text-6xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-bebas text-white uppercase leading-[0.85] mb-6 md:mb-4 tracking-tighter italic">
                    SEASON 1 <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-700 drop-shadow-2xl">
                        COMPLETE
                    </span>
                </h2>

                <div className="relative inline-block mb-10 md:mb-12 px-2">
                    <motion.p
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        whileInView={{ clipPath: "inset(0 0 0 0)" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-base sm:text-lg md:text-2xl text-zinc-400 font-inter max-w-2xl mx-auto leading-relaxed"
                    >
                        Every great arc acts as a setup for the next. The training is done. The foundations are set.
                        <br className="hidden md:block" />
                        <span className="text-white font-bold block mt-4 tracking-widest uppercase italic bg-anime-red/10 py-2 border-x border-anime-red/20">
                            READY FOR STRONGER BATTLES TOGETHER?
                        </span>
                    </motion.p>
                </div>

                {/* 3. TACTICAL ACTION BUTTONS */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 max-w-sm sm:max-w-none mx-auto">
                    {contactLinks.map((btn, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto"
                        >
                            <Button
                                variant={btn.variant}
                                size="lg"
                                onClick={() => handleNavigation(btn.link, btn.external)}
                                className="group relative w-full overflow-hidden border-2 px-6 md:px-8 py-4 md:py-6"
                            >
                                <span className="relative z-10 font-bebas text-xl md:text-2xl tracking-wide">
                                    {btn.label}
                                </span>
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-white/10 skew-x-12" />
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* 4. FINAL SIGNATURE */}
                <div className="mt-12 md:mt-20 opacity-30 flex flex-col items-center">
                    <div className="h-px w-10 bg-white mb-4" />
                    <p className="font-mono text-[8px] md:text-[10px] tracking-[0.2em] uppercase">DIRECTED BY ARASHAD DODHIYA</p>
                    <p className="font-mono text-[7px] md:text-[8px] mt-1 italic">PRODUCED IN NEON-TOKYO // 2025</p>
                </div>
            </motion.div>

            {/* 5. DECORATIVE SIDEBARS */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 opacity-10 text-[10px] font-mono text-white vertical-rl">
                <span className="tracking-widest">STATUS: READY</span>
                <div className="h-20 w-[1px] bg-white mx-auto" />
                <span className="tracking-widest">CONNECTION: ESTABLISHED</span>
            </div>

            <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 opacity-10 text-[10px] font-mono text-white vertical-rl rotate-180">
                <span className="tracking-widest">LOC: 22.3039 N / 70.8022 E</span>
                <div className="h-20 w-[1px] bg-white mx-auto" />
                <span className="tracking-widest">ENCRYPTION: ACTIVE</span>
            </div>
        </section>
    );
}