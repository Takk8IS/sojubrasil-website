"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
    const [cursorVariant, setCursorVariant] = useState("default");
    const [cursorColor, setCursorColor] = useState("#000000");

    const springConfig = { stiffness: 300, damping: 20, mass: 0.1 };
    const mouseX = useSpring(0, springConfig);
    const mouseY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            mouseX.set(clientX - 12);
            mouseY.set(clientY - 12);
        };

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const tagName = target.tagName.toLowerCase();

            if (tagName === "a") {
                setCursorVariant("link");
            } else if (tagName === "button") {
                setCursorVariant("button");
            } else {
                setCursorVariant("hover");
            }

            const computedStyle = window.getComputedStyle(target);
            const bgColor = computedStyle.backgroundColor;
            const rgb = bgColor.match(/\d+/g);
            if (rgb && rgb.length >= 3) {
                const luminance =
                    (0.299 * Number(rgb[0]) +
                        0.587 * Number(rgb[1]) +
                        0.114 * Number(rgb[2])) /
                    255;
                setCursorColor(luminance > 0.5 ? "#000000" : "#f2f2f2");
            }
        };

        const handleMouseLeave = () => {
            setCursorVariant("default");
            setCursorColor("#000000");
        };

        const interactiveElements = document.querySelectorAll("a, button");
        window.addEventListener("mousemove", handleMouseMove);
        interactiveElements.forEach((el) => {
            el.addEventListener(
                "mouseenter",
                handleMouseEnter as EventListener,
            );
            el.addEventListener(
                "mouseleave",
                handleMouseLeave as EventListener,
            );
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            interactiveElements.forEach((el) => {
                el.removeEventListener(
                    "mouseenter",
                    handleMouseEnter as EventListener,
                );
                el.removeEventListener(
                    "mouseleave",
                    handleMouseLeave as EventListener,
                );
            });
        };
    }, [mouseX, mouseY]);

    const cursorVariants = {
        default: {
            width: 24,
            height: 24,
            borderRadius: "50%",
            border: "1px solid",
            borderColor: cursorColor,
            backgroundColor: "transparent",
            transition: { duration: 0.2 },
        },
        hover: {
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "2px solid",
            borderColor: cursorColor,
            backgroundColor: "transparent",
            transition: { duration: 0.2 },
        },
        link: {
            width: 24,
            height: 24,
            borderRadius: "50%",
            border: "1px dashed",
            borderColor: cursorColor,
            backgroundColor: "transparent",
            transition: { duration: 0.2 },
        },
        button: {
            width: 24,
            height: 24,
            borderRadius: "50%",
            border: "1px solid",
            borderColor: cursorColor,
            boxShadow: `0 0 0 1px ${cursorColor}`,
            backgroundColor: "transparent",
            transition: { duration: 0.2 },
        },
    };

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
            style={{ x: mouseX, y: mouseY }}
            variants={cursorVariants}
            animate={cursorVariant}
            transition={{ type: "spring", ...springConfig }}
        />
    );
}
