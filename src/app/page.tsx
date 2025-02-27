"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CustomCursor } from "./components/cursor";
import { ScrollSection } from "./components/scroll-section";
import { ProductsSection } from "./components/products-section";
import { Footer } from "./components/footer";
import { CookieConsent } from "./components/cookie-consent";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white"
        >
            <CustomCursor />

            <main ref={containerRef} className="relative">
                {/* Hero Section */}
                <motion.section
                    className="relative h-screen flex items-center justify-center overflow-hidden"
                    style={{ opacity: heroOpacity }}
                >
                    <div className="relative z-10 text-center">
                        <motion.h1
                            className="text-6xl md:text-8xl font-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <motion.span
                                className="block"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                Chum Churum
                            </motion.span>
                            <motion.span
                                // Using a more specific color for SEO - targeting the green apple variant
                                className="block text-[#0F8C46]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                SOJU
                            </motion.span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            {/* Stronger, more SEO-friendly opening line */}
                            Descubra Chum Churum: O Soju Coreano Mais Vendido do
                            Mundo, Agora no Brasil.
                        </motion.p>
                    </div>

                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        {/* Updated image alt tags for better SEO, including flavor and brand */}
                        <Image
                            src="/placeholder.svg?height=800&width=300"
                            alt="Garrafa de Soju Chum Churum - Sabor Original"
                            width={300}
                            height={800}
                            className="absolute top-1/2 left-[20%] -translate-y-1/2 -rotate-12"
                            priority
                        />
                        <Image
                            src="/placeholder.svg?height=800&width=300"
                            alt="Garrafa de Soju Chum Churum - Sabor Maçã Verde"
                            width={300}
                            height={800}
                            className="absolute top-1/2 right-[20%] -translate-y-1/2 rotate-12"
                            priority
                        />
                    </motion.div>
                </motion.section>

                {/* About Section */}
                <ScrollSection as="div" className="bg-gray-50">
                    <div className="container mx-auto px-4">
                        <motion.h2
                            className="text-4xl md:text-6xl font-bold mb-12 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* More impactful heading, incorporating keywords */}
                            O Que é Soju? Conheça Chum Churum, o Autêntico
                            Destilado Coreano.
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <motion.div
                                className="space-y-6"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <p className="text-lg md:text-xl">
                                    {/* Improved description with keywords and brand emphasis */}
                                    <b>Chum Churum Soju</b>, produzido pela
                                    Lotte, é a autêntica bebida destilada
                                    coreana que conquistou o mundo. O Soju é a
                                    bebida destilada mais vendida globalmente, e
                                    Chum Churum é um dos seus rótulos mais
                                    emblemáticos e agora disponível no Brasil.
                                </p>
                                <p className="text-lg md:text-xl">
                                    {/* Clear mission statement */}
                                    Nossa missão é trazer a verdadeira cultura
                                    coreana ao Brasil, proporcionando uma
                                    experiência única com o Soju Chum Churum,
                                    símbolo de tradição e celebração na Coreia.
                                </p>
                            </motion.div>
                            <motion.div
                                className="space-y-6"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <p className="text-lg md:text-xl">
                                    {/* Detailed description of the ingredients and process */}
                                    Produzido com água mineral pura e destilados
                                    de arroz e tapioca, cada garrafa de{" "}
                                    <b>Chum Churum</b> carrega a essência da
                                    cultura coreana. Oferece um sabor suave,
                                    refrescante e levemente adocicado, perfeito
                                    para qualquer ocasião.
                                </p>
                                <p className="text-lg md:text-xl">
                                    {/* Highlight key features and the meaning of the name. */}
                                    Com 16,5% de teor alcoólico, o{" "}
                                    <b>Soju Chum Churum</b> é ideal para quem
                                    busca um destilado premium, com sabor único
                                    e tradição milenar. &quot;Chum Churum&quot;
                                    significa &quot;Como na primeira vez&quot;.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </ScrollSection>

                {/* Products Section */}
                <ProductsSection />

                {/* Onde Encontrar Section */}
                <ScrollSection as="div" className="bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <motion.h2
                                className="text-4xl md:text-6xl font-bold mb-16 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Clear call to action in heading */}
                                Onde Comprar Soju Chum Churum no Brasil
                            </motion.h2>
                            <div className="flex flex-col md:flex-row justify-between items-start">
                                <motion.div
                                    className="md:w-1/2 mb-8 md:mb-0"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <p className="text-xl md:text-2xl leading-relaxed">
                                        {/* More direct and action-oriented description */}
                                        Experimente o autêntico{" "}
                                        <b>Soju Chum Churum</b> na loja{" "}
                                        <b>Mimos Korea Design</b>, no Shopping
                                        Recife. Oferecemos degustação dos
                                        diversos sabores de Soju e um
                                        atendimento especializado para você
                                        mergulhar na cultura coreana.
                                    </p>
                                </motion.div>
                                <motion.div
                                    className="md:w-1/3"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    {/*  Location details with schema.org markup for local SEO */}
                                    <h3 className="text-2xl font-bold mb-4">
                                        Shopping Recife
                                    </h3>
                                    <p
                                        className="text-lg leading-relaxed"
                                        itemScope
                                        itemType="http://schema.org/LocalBusiness"
                                    >
                                        <span itemProp="name">
                                            Mimos Korea Design
                                        </span>
                                        <br />
                                        <span
                                            itemProp="address"
                                            itemScope
                                            itemType="http://schema.org/PostalAddress"
                                        >
                                            <span itemProp="streetAddress">
                                                R. Padre Carapuceiro, 777
                                            </span>
                                            <br />
                                            <span itemProp="addressLocality">
                                                Boa Viagem, Recife - PE
                                            </span>
                                            <br />
                                            <span itemProp="postalCode">
                                                CEP 51020-900
                                            </span>
                                            <br />
                                        </span>
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </ScrollSection>
            </main>

            <Footer />
            <CookieConsent />
        </motion.div>
    );
}
