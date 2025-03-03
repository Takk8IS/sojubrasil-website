"use client";

import Link from "next/link";
import { useMemo } from "react";

export function Footer() {
    const currentYear = useMemo(() => new Date().getFullYear(), []);

    const linkClasses = "hover:opacity-70 transition-opacity text-gray-700";

    const navItems = [
        { href: "/", label: "Home", title: "Página Inicial - Soju Brasil" },
        {
            href: "#sobre",
            label: "Sobre",
            title: "Sobre o Soju Chum Churum - Soju Brasil",
        },
        {
            href: "#produtos",
            label: "Produtos",
            title: "Conheça nossos sabores de Soju - Soju Brasil",
        },
        {
            href: "#onde-encontrar",
            label: "Onde Encontrar",
            title: "Onde Comprar Soju Chum Churum - Soju Brasil",
        },
    ];

    const flavors = [
        "Blueberry",
        "Iogurte",
        "Maçã Verde",
        "Manga",
        "Morango",
        "Pêssego",
    ];

    const legalLinks = [
        {
            href: "/termos",
            label: "Termos",
            title: "Termos de Serviço - Soju Brasil",
        },
        {
            href: "/privacidade",
            label: "Privacidade",
            title: "Política de Privacidade - Soju Brasil",
        },
        {
            href: "/cookies",
            label: "Cookies",
            title: "Política de Cookies - Soju Brasil",
        },
    ];

    const socialLinks = [
        {
            href: "https://instagram.com/sojubrasil",
            label: "Instagram",
            title: "Soju Brasil no Instagram",
        },
        {
            href: "https://facebook.com/sojubrasil",
            label: "Facebook",
            title: "Soju Brasil no Facebook",
        },
        {
            href: "https://x.com/sojubrasil",
            label: "Twitter",
            title: "Soju Brasil no Twitter (X)",
        },
    ];

    return (
        <footer className="py-24 px-4 border-t border-gray-100 bg-white">
            <div className="container mx-auto max-w-7xl">
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase text-gray-900">
                        Soju Chum Churum
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <nav aria-label="Navegação Principal">
                        <ul className="space-y-4">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className={linkClasses}
                                        title={item.title}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Produtos Soju Chum Churum">
                        <ul className="space-y-4">
                            {flavors.map((flavor) => (
                                <li key={flavor}>
                                    <Link
                                        href="#"
                                        className={linkClasses}
                                        title={`Soju Chum Churum Sabor ${flavor} - Soju Brasil`}
                                    >
                                        Soju {flavor}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Informações Legais">
                        <ul className="space-y-4">
                            {legalLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className={linkClasses}
                                        title={link.title}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Redes Sociais">
                        <ul className="space-y-4">
                            {socialLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={linkClasses}
                                        title={link.title}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-100 text-gray-500 text-sm">
                    <p className="mb-4 md:mb-0">
                        © {currentYear} Soju Brasil. Todos os direitos
                        reservados. Designed by{" "}
                        <a
                            href="https://takk.ag"
                            className={linkClasses}
                            title="Design por Takk™ Innovate Studio"
                        >
                            Takk™ Innovate Studio
                        </a>
                        .
                    </p>
                    <div>
                        <span className="opacity-70">
                            Beba com moderação. Venda proibida para menores de
                            18 anos.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
