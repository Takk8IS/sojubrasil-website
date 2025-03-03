"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4"
                    role="dialog"
                    aria-labelledby="cookie-consent-title"
                    aria-describedby="cookie-consent-description"
                >
                    <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-lg shadow-sm p-6">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <p
                                id="cookie-consent-description"
                                className="text-sm mb-4 md:mb-0 md:mr-4 text-gray-700"
                            >
                                Utilizamos cookies para melhorar sua
                                experiência. Você concorda com nossa{" "}
                                <Link
                                    href="/cookies"
                                    className="underline hover:text-gray-600 transition-colors"
                                    title="Política de Cookies"
                                >
                                    Política de Cookies
                                </Link>
                                .
                            </p>
                            <div className="flex space-x-4">
                                <button
                                    onClick={handleAccept}
                                    className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                    aria-label="Aceitar cookies"
                                >
                                    Aceitar
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
