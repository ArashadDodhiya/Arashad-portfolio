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
        <section id="values" className="relative bg-[#FF6B00] text-black py-24 overflow-hidden">
            {/* 1. MANGA TEXTURE OVERLAY */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(black_1px,transparent_1px)] [background-size:12px_12px]" />

            {/* 2. DECORATIVE BACKGROUND KANJI (忍道 - Nindo) */}
            <div className="absolute left-[-2rem] top-1/2 -translate-y-1/2 opacity-20 select-none pointer-events-none">
                <span className="text-[25rem] font-black leading-none tracking-tighter text-black">忍道</span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* SECTION HEADER WITH IMPACT */}
                <div className="mb-16 relative">
                    <motion.h2
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "circOut" }}
                        className="text-7xl md:text-[10rem] font-bebas uppercase leading-[0.8] tracking-tighter italic"
                    >
                        MY NINJA <span className="text-white drop-shadow-[4px_4px_0px_#000]">WAY</span>
                    </motion.h2>
                    <div className="h-2 w-48 bg-black mt-4 skew-x-[-20deg]" />
                </div>

                {/* 3. VALUE PANELS: DIAGONAL MESH LAYOUT */}
                <div className="grid md:grid-cols-2 gap-px bg-black border-2 border-black overflow-hidden shadow-[20px_20px_0px_rgba(0,0,0,0.2)]">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 1.1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative bg-[#FF6B00] p-10 flex flex-col justify-between hover:bg-black hover:text-[#FF6B00] transition-colors duration-300 min-h-[250px]"
                        >
                            {/* Slashing Animation Overlay */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ delay: 0.5 + (index * 0.1), duration: 0.8 }}
                                className="absolute top-0 left-0 h-1 bg-black/20 group-hover:bg-[#FF6B00]/40"
                            />

                            <div className="flex justify-between items-start">
                                <span className="text-5xl font-black italic opacity-20 group-hover:opacity-100 transition-opacity">
                                    0{index + 1}
                                </span>
                                {/* Tactical HUD detail */}
                                <div className="text-[10px] font-mono border border-current px-2 py-1 rotate-90 origin-right translate-y-4 opacity-50">
                                    CORE_VALUE_v.01
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl md:text-5xl font-bebas uppercase leading-tight tracking-tighter mb-2">
                                    {item.text}
                                </h3>
                                <p className="font-inter text-sm md:text-base opacity-70 group-hover:opacity-100 italic">
                  // {item.sub}
                                </p>
                            </div>

                            {/* Hover Decorative Element */}
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M0 40L40 0V40H0Z" fill="currentColor" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 4. CLOSING QUOTE */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 text-right"
                >
                    <p className="text-xl font-bebas italic tracking-widest text-black/60 uppercase">
                        "A ninja who breaks the rules is scum, <br />
                        but a ninja who lets their skills stagnate is worse."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}