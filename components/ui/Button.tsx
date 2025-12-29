"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "danger" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export default function Button({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
}: ButtonProps) {
    const variants = {
        primary:
            "bg-anime-orange text-black hover:bg-white hover:text-anime-orange shadow-[0_0_15px_rgba(255,107,0,0.4)] md:hover:shadow-[0_0_25px_rgba(255,107,0,0.7)]",
        secondary:
            "bg-anime-purple text-white hover:bg-white hover:text-anime-purple shadow-[0_0_15px_rgba(106,0,255,0.4)] md:hover:shadow-[0_0_25px_rgba(106,0,255,0.7)]",
        danger:
            "bg-anime-red text-white hover:bg-white hover:text-anime-red shadow-[0_0_15px_rgba(255,0,51,0.4)] md:hover:shadow-[0_0_25px_rgba(255,0,51,0.7)]",
        outline:
            "border-2 border-zinc-200 text-zinc-200 hover:bg-white hover:text-black hover:border-white",
    };

    const sizes = {
        // Increased padding for better mobile touch targets
        sm: "px-5 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-5 text-xl md:text-2xl",
    };

    return (
        <motion.button
            // Use "hover" only if the device supports it to prevent sticky touch states
            whileHover={{
                scale: 1.05,
                skewX: -5, // Slightly less aggressive skew for better text readability
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "uppercase font-bebas tracking-wider transition-all duration-300 ease-out relative z-10 select-none",
                "flex items-center justify-center text-center",
                variants[variant],
                sizes[size],
                className
            )}
            // Standardizing the clipPath to be slightly safer for short text
            style={{ clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0% 100%)" }}
            {...props}
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}