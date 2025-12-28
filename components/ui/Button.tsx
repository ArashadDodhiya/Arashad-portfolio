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
            "bg-anime-orange text-black hover:bg-white hover:text-anime-orange shadow-[0_0_15px_rgba(255,107,0,0.5)] hover:shadow-[0_0_25px_rgba(255,107,0,0.8)]",
        secondary:
            "bg-anime-purple text-white hover:bg-white hover:text-anime-purple shadow-[0_0_15px_rgba(106,0,255,0.5)] hover:shadow-[0_0_25px_rgba(106,0,255,0.8)]",
        danger:
            "bg-anime-red text-white hover:bg-white hover:text-anime-red shadow-[0_0_15px_rgba(255,0,51,0.5)] hover:shadow-[0_0_25px_rgba(255,0,51,0.8)]",
        outline:
            "border-2 border-anime-text text-anime-text hover:bg-anime-text hover:text-black",
    };

    const sizes = {
        sm: "px-4 py-1 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-4 text-xl",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05, skewX: -10 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "uppercase font-bebas tracking-wider transition-colors duration-300 ease-out clip-path-slant relative z-10",
                variants[variant],
                sizes[size],
                className
            )}
            style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)" }}
            {...props}
        >
            {children}
        </motion.button>
    );
}
