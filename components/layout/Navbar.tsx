"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const navLinks = [
    { name: "ORIGIN", href: "#about" },
    { name: "TECHNIQUES", href: "#skills" },
    { name: "BATTLES", href: "#projects" },
    { name: "NINDO", href: "#values" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Your specific email logic
    const handleHireMe = () => {
        window.location.href = "mailto:ahd613900@gmail.com?subject=MISSION_RECRUITMENT";
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-6 py-4 md:px-12",
                scrolled ? "bg-black/80 backdrop-blur-md py-3 border-b border-white/10" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* LOGO / CALLSIGN */}
                <motion.a
                    href="#"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-start"
                >
                    <span className="font-bebas text-2xl md:text-3xl tracking-tighter text-white italic">
                        ARASHAD <span className="text-anime-orange">.D</span>
                    </span>
                    <span className="font-mono text-[8px] text-anime-orange tracking-[0.3em] leading-none">
                        DEV_RANK: S-CLASS
                    </span>
                </motion.a>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-bebas text-lg text-zinc-400 hover:text-anime-orange transition-colors tracking-widest italic"
                        >
                            {link.name}
                        </a>
                    ))}
                    {/* Integrated Hire Me Button */}
                    <Button
                        variant="primary"
                        size="sm"
                        className="ml-4"
                        onClick={handleHireMe}
                    >
                        HIRE_ME
                    </Button>
                </div>

                {/* MOBILE MENU TRIGGER */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2 z-[110] outline-none"
                >
                    <motion.div
                        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-[2px] bg-anime-orange"
                    />
                    <motion.div
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-8 h-[2px] bg-white"
                    />
                    <motion.div
                        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-[2px] bg-white"
                    />
                </button>
            </div>

            {/* MOBILE OVERLAY MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at 90% 10%)" }}
                        animate={{ clipPath: "circle(150% at 90% 10%)" }}
                        exit={{ clipPath: "circle(0% at 90% 10%)" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 bg-[#08080A] z-[105] flex flex-col items-center justify-center gap-8"
                    >
                        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]" />
                        <div className="absolute right-0 bottom-0 text-[30vh] font-black text-white/5 pointer-events-none select-none">
                            忍
                        </div>

                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className="font-bebas text-5xl text-white hover:text-anime-orange italic tracking-tighter"
                            >
                                {link.name}
                            </motion.a>
                        ))}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8"
                        >
                            {/* Integrated Hire Me Button for Mobile */}
                            <Button
                                onClick={() => {
                                    setIsOpen(false);
                                    handleHireMe();
                                }}
                                variant="primary"
                                size="lg"
                            >
                                CONTACT_BASE
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}