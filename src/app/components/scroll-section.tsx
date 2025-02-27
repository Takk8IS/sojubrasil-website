"use client";

import type React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollSectionProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}

export function ScrollSection({
    children,
    className = "",
    as = "section",
}: ScrollSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 1, 1, 0],
    );
    const y = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [100, 0, 0, -100],
    );

    const Component = motion(as);

    return (
        <Component
            ref={ref}
            style={{ opacity, y }}
            className={`relative min-h-screen py-24 ${className}`}
        >
            {children}
        </Component>
    );
}
