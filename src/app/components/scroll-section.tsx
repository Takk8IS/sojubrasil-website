"use client";

import type React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

    const y = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [100, 0, 0, -100],
    );
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    const Component = motion(as);

    return (
        <Component
            ref={ref}
            style={{ y, scale }}
            className={`relative min-h-[80vh] py-16 ${className}`}
        >
            {children}
        </Component>
    );
}

interface ScrollSectionProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}
