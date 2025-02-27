"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";

const products = [
    {
        name: "Chum Churum Soonhari Maçã Verde",
        description:
            "Experimente o refrescante Soju Chum Churum Soonhari Maçã Verde, um destilado coreano suave com um toque vibrante de maçã verde. Perfeito para celebrar momentos especiais ou relaxar. Teor alcoólico: 16,5%. Garrafa de 375ml. Descubra o sabor da Coreia!",
        color: "#0F8C46", // Cor principal Maçã Verde
        image: "/soju-maca-verde.webp",
        alt: "Soju Chum Churum Soonhari Maçã Verde - Bebida Destilada Coreana Premium",
        keywords:
            "soju, chum churum, soonhari, maçã verde, apple, bebida coreana, destilado, suave, refrescante, álcool, coreia, lotte, comprar soju, soju online, bebida alcoólica, soju maçã, melhor soju, soju brasil, onde comprar soju, soju preço, drink com soju, coquetel com soju, soju puro, soju com frutas",
    },
    {
        name: "Chum Churum Soonhari Manga",
        description:
            "Deixe-se levar pela doçura exótica do Soju Chum Churum Soonhari Manga. Um destilado coreano tropical, perfeito para dar um toque especial às suas comemorações. Direto da Coreia para você! Teor alcoólico: 16,5%. Garrafa de 375ml.",
        color: "#F27329", // Cor principal Manga
        image: "/soju-manga.webp",
        alt: "Soju Chum Churum Soonhari Manga - Bebida Destilada Coreana Sabor Tropical",
        keywords:
            "soju, chum churum, soonhari, manga, mango, bebida coreana, destilado, tropical, doce, álcool, coreia, lotte, comprar soju, soju online, bebida alcoólica, soju manga, soju brasil, onde comprar soju, soju preço, drink com soju, coquetel com soju",
    },
    {
        name: "Chum Churum Soonhari Blueberry",
        description:
            "Descubra a combinação vibrante de mirtilos e a suavidade do Soju coreano Chum Churum Soonhari Blueberry. Uma experiência única e deliciosa! Teor alcoólico: 16,5%. Garrafa de 375ml.  Soju Brasil: o autêntico sabor da Coreia.",
        color: "#562C73", // Cor principal Blueberry
        image: "/soju-blueberry.webp",
        alt: "Soju Chum Churum Soonhari Blueberry - Bebida Destilada Coreana com Mirtilo",
        keywords:
            "soju, chum churum, soonhari, blueberry, mirtilo, bebida coreana, destilado, vibrante, álcool, coreia, lotte, comprar soju, soju online, bebida alcoólica, soju blueberry, soju brasil, onde comprar soju, soju preço, drink com soju",
    },
    {
        name: "Chum Churum Soonhari Pêssego",
        description:
            "Delicie-se com o Soju Chum Churum Soonhari Pêssego, um destilado coreano premium com o sabor suave e sofisticado do pêssego.  Perfeito para momentos especiais. Teor alcoólico: 16,5%. Garrafa de 375ml.  A bebida destilada mais vendida no mundo!",
        color: "#D94395", // Cor principal Pêssego
        image: "/soju-pessego.webp",
        alt: "Soju Chum Churum Soonhari Pêssego - Bebida Destilada Coreana Sabor Pêssego",
        keywords:
            "soju, chum churum, soonhari, pêssego, peach, bebida coreana, destilado, suave, sofisticado, álcool, coreia, lotte, comprar soju, soju online, bebida alcoólica, soju pêssego, soju brasil, onde comprar soju, melhor soju, soju preço",
    },
    {
        name: "Chum Churum Soonhari Morango",
        description:
            "Experimente a harmonia perfeita entre a doçura do morango e a tradição coreana do Soju Chum Churum Soonhari Morango.  Uma explosão de sabor! Teor alcoólico: 16,5%. Garrafa de 375ml.  Lotte Soju: tradição e qualidade.",
        color: "#D92332", // Cor principal Morango
        image: "/soju-morango.webp",
        alt: "Soju Chum Churum Soonhari Morango - Bebida Destilada Coreana com Morango",
        keywords:
            "soju, chum churum, soonhari, morango, strawberry, bebida coreana, destilado, doce, álcool, coreia, lotte, comprar soju, soju online, bebida alcoólica, soju morango, soju brasil, onde comprar soju, drink com soju, soju preço",
    },
    {
        name: "Chum Churum Soonhari Iogurte",
        description:
            "Descubra a refrescância e o sabor único do Soju Chum Churum Soonhari Iogurte. A combinação perfeita entre o iogurte e a bebida coreana mais famosa do mundo.  Uma experiência surpreendente! Teor alcoólico: 16,5%. Garrafa de 375ml.",
        color: "#F2913D", // Cor principal Iogurte
        image: "/soju-iogurte.webp",
        alt: "Soju Chum Churum Soonhari Iogurte - Bebida Destilada Coreana Sabor Iogurte",
        keywords:
            "soju, chum churum, soonhari, iogurte, yogurt, bebida coreana, destilado, refrescante, álcool, coreia, lotte, comprar soju, soju online, bebida alcoólica, soju iogurte, bebida cremosa, soju brasil, onde comprar soju, soju preço, drink com soju",
    },
];

export function ProductsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [currentProduct, setCurrentProduct] = useState(0);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            const productIndex = Math.min(
                Math.floor(latest * products.length),
                products.length - 1,
            );
            setCurrentProduct(productIndex);
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div ref={sectionRef} className="relative h-[600vh]">
            <motion.div
                className="sticky top-0 h-screen overflow-hidden flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    animate={{
                        backgroundColor: products[currentProduct].color,
                    }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.h2
                            className="text-4xl md:text-6xl font-bold mb-4"
                            key={products[currentProduct].name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {products[currentProduct].name}
                        </motion.h2>
                        <motion.p
                            className="text-xl md:text-2xl"
                            key={products[currentProduct].description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            {products[currentProduct].description}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 flex justify-center items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            key={products[currentProduct].image}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src={
                                    products[currentProduct].image ||
                                    "/placeholder.svg"
                                }
                                alt={products[currentProduct].alt}
                                width={200}
                                height={600}
                                className="h-[60vh] w-auto object-contain"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
