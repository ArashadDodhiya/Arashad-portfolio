"use client";

import { motion } from "framer-motion";

const values = [
    { text: "Understand before memorizing", sub: "Deep logic over surface syntax." },
    { text: "Build before judging", sub: "Creation is the only path to critique." },
    { text: "Security is responsibility", sub: "Protecting the village starts with code." },
    { text: "Growth over comfort", sub: "Seeking the next breakthrough daily." },
];

export default function Values() {
    return (
        <section id="values" className="relative bg-[#FF6B00] text-black py-16 md:py-24 overflow-hidden">
            {/* 1. MANGA TEXTURE OVERLAY */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(black_1px,transparent_1px)] [background-size:12px_12px]" />

            {/* 2. DECORATIVE BACKGROUND KANJI (忍道 - Nindo) */}
            <div className="absolute left-[-1rem] md:left-[-2rem] top-1/2 -translate-y-1/2 opacity-10 md:opacity-20 select-none pointer-events-none">
                <span className="text-[40vw] md:text-[25rem] font-black leading-none tracking-tighter text-black">
                    忍道
                </span>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* SECTION HEADER WITH IMPACT */}
                <div className="mb-12 md:mb-16 relative">
                    <motion.h2
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "circOut" }}
                        className="text-6xl sm:text-7xl md:text-[10rem] font-bebas uppercase leading-[0.85] md:leading-[0.8] tracking-tighter italic"
                    >
                        MY NINJA <span className="text-white drop-shadow-[2px_2px_0px_#000] md:drop-shadow-[4px_4px_0px_#000]">WAY</span>
                    </motion.h2>
                    <div className="h-1.5 md:h-2 w-32 md:w-48 bg-black mt-4 skew-x-[-20deg]" />
                </div>

                {/* 3. VALUE PANELS: DIAGONAL MESH LAYOUT */}
                {/* We use md:gap-px to create the "grid line" effect on desktop, but gap-4 on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-px bg-transparent md:bg-black border-none md:border-2 md:border-black overflow-hidden shadow-none md:shadow-[20px_20px_0px_rgba(0,0,0,0.2)]">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative bg-[#FF6B00] p-8 md:p-10 flex flex-col justify-between hover:bg-black hover:text-[#FF6B00] transition-colors duration-300 min-h-[220px] md:min-h-[250px] border-2 border-black md:border-none shadow-[8px_8px_0px_rgba(0,0,0,1)] md:shadow-none"
                        >
                            {/* Slashing Animation Overlay (Desktop only for precision) */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                                className="absolute top-0 left-0 h-1 bg-black/20 group-hover:bg-[#FF6B00]/40 hidden md:block"
                            />

                            <div className="flex justify-between items-start">
                                <span className="text-4xl md:text-5xl font-black italic opacity-20 group-hover:opacity-100 transition-opacity">
                                    0{index + 1}
                                </span>

                                {/* Tactical HUD detail - Adjusted for mobile */}
                                <div className="text-[8px] md:text-[10px] font-mono border border-current px-2 py-1 rotate-90 origin-right translate-y-2 opacity-50 uppercase">
                                    CORE_VAL_v1.0
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl md:text-5xl font-bebas uppercase leading-tight tracking-tighter mb-2">
                                    {item.text}
                                </h3>
                                <p className="font-inter text-xs md:text-base opacity-80 group-hover:opacity-100 italic">
                  // {item.sub}
                                </p>
                            </div>

                            {/* Hover Decorative SVG - Hidden on mobile to keep it clean */}
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M0 40L40 0V40H0Z" fill="currentColor" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 4. CLOSING QUOTE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-12 md:mt-16 text-left md:text-right"
                >
                    <p className="text-lg md:text-xl font-bebas italic tracking-widest text-black/70 uppercase leading-snug">
                        "A ninja who breaks the rules is scum, <br className="hidden md:block" />
                        <span className="text-black">but a ninja who lets their skills stagnate is worse."</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}