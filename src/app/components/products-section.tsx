"use client";

import { useRef, useEffect, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useMotionValue,
} from "framer-motion";
import Image from "next/image";

import sojuManga from "../../assets/images/soju-manga.webp";
import sojuPessego from "../../assets/images/soju-pessego.webp";
import sojuMacaVerde from "../../assets/images/soju-maca-verde.webp";
import sojuMorango from "../../assets/images/soju-morango.webp";
import sojuIogurte from "../../assets/images/soju-iogurte.webp";
import sojuBlueberry from "../../assets/images/soju-blueberry.webp";
import sojuOriginal from "../../assets/images/soju-original.webp";

const products = [
    {
        name: "Original",
        description:
            'A essência do soju tradicional, feito com água alcalina pura, proporciona uma suavidade única ao paladar. "Chum Churum" significa "Como da Primeira Vez", refletindo o frescor e a novidade em cada gole.',
        color: "#EBF2DC",
        image: sojuOriginal,
        ingredients:
            "Água mineral pura, destilado de arroz e tapioca, xarope de milho de alta frutose, adoçante artificial.",
        details: {
            type: "Destilado Especial / Soju",
            abv: "16,5%",
            bottleSize: "375ml",
            characteristics:
                "Feito com água alcalina, proporciona uma suavidade única ao paladar, ideal para quem aprecia o verdadeiro sabor do soju.",
        },
    },
    {
        name: "Manga",
        description:
            "Um deleite suave e adocicado que lembra um doce de manga recém-colhido. Seu aroma envolvente torna cada gole uma experiência inesquecível.",
        color: "#F2C4C4",
        image: sojuManga,
        ingredients:
            "Água purificada, destilado de arroz e tapioca, suco de manga, aroma de manga, adoçante artificial.",
        details: {
            type: "Soju Saborizado",
            abv: "12%",
            bottleSize: "375ml",
            characteristics:
                "Sabor tropical marcante com aroma frutado intenso, perfeito para degustação pura ou em coquetéis.",
        },
    },
    {
        name: "Pêssego",
        description:
            "Um deleite suave e adocicado que lembra um doce de pêssego recém-colhido. Seu aroma envolvente torna cada gole uma experiência inesquecível.",
        color: "#F2BFBB",
        image: sojuPessego,
        ingredients:
            "Água purificada, destilado de arroz e tapioca, suco de pêssego, aroma de pêssego, adoçante artificial.",
        details: {
            type: "Soju Saborizado",
            abv: "12%",
            bottleSize: "375ml",
            characteristics:
                "Suavidade e doçura em perfeito equilíbrio, com aroma persistente de pêssego maduro.",
        },
    },
    {
        name: "Maçã Verde",
        description:
            "O equilíbrio perfeito entre doce e azedo, com o frescor natural da maçã verde. Remete a uma bala de maçã com um toque sofisticado, ideal para adultos que amam sabores intensos.",
        color: "#CDD9A3",
        image: sojuMacaVerde,
        ingredients:
            "Água purificada, destilado de arroz e tapioca, suco de maçã, aroma de maçã, adoçante artificial.",
        details: {
            type: "Soju Saborizado",
            abv: "12%",
            bottleSize: "375ml",
            characteristics:
                "Acidez refrescante típica da maçã verde com finalização levemente adocicada.",
        },
    },
    {
        name: "Morango",
        description:
            "Sabor marcante e suave de morango, com um aroma intenso que desperta os sentidos. Uma escolha perfeita para quem ama frutas vermelhas.",
        color: "#F2C2DC",
        image: sojuMorango,
        ingredients:
            "Água purificada, destilado de arroz e tapioca, suco de morango, aroma de morango, adoçante artificial.",
        details: {
            type: "Soju Saborizado",
            abv: "12%",
            bottleSize: "375ml",
            characteristics:
                "Doçura natural e aroma intenso de morango fresco, com finalização equilibrada.",
        },
    },
    {
        name: "Iogurte",
        description:
            "Leve e refrescante, este soju combina a doçura sutil do iogurte com notas cremosas de laranja e pêssego. Uma versão elegante de um orange creamsicle, ideal puro ou com pratos como Samgyeopsal (churrasco coreano).",
        color: "#F2E6D8",
        image: sojuIogurte,
        ingredients:
            "Água purificada, destilado de arroz e tapioca, aroma de iogurte, aroma de laranja, aroma de pêssego, adoçante artificial.",
        details: {
            type: "Soju Saborizado",
            abv: "12%",
            bottleSize: "375ml",
            characteristics:
                "Textura cremosa com notas de cítricos, perfeito para harmonização com pratos da culinária coreana.",
        },
    },
    {
        name: "Blueberry",
        description:
            "Desfrute do sabor suave e adocicado do blueberry, com uma doçura natural que encanta sem o amargor típico do soju tradicional. Refrescante e delicioso, é uma opção que conquista logo no primeiro gole.",
        color: "#E7DCF2",
        image: sojuBlueberry,
        ingredients:
            "Água purificada, destilado de arroz e tapioca, suco de blueberry, aroma de blueberry, adoçante artificial.",
        details: {
            type: "Soju Saborizado",
            abv: "12%",
            bottleSize: "375ml",
            characteristics:
                "Sabor sofisticado de frutas vermelhas com notas doces e baixa acidez.",
        },
    },
];

export function ProductsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [currentProduct, setCurrentProduct] = useState(0);
    const imageX = useMotionValue(0);
    const imageY = useMotionValue(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        damping: 50,
        stiffness: 400,
    });

    const y = useTransform(
        smoothProgress,
        [0, 1],
        ["0%", `${-(products.length - 1) * 100}%`],
    );

    const backgroundColor = useTransform(
        smoothProgress,
        products.map((_, i) => i / (products.length - 1)),
        products.map((product) => product.color),
    );

    useEffect(() => {
        const unsubscribe = smoothProgress.on("change", (latest) => {
            const productIndex = Math.round(latest * (products.length - 1));
            setCurrentProduct(productIndex);
        });
        return () => unsubscribe();
    }, [smoothProgress]);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const containerRect = sectionRef.current?.getBoundingClientRect();
            if (containerRect) {
                const x =
                    (event.clientX -
                        containerRect.left -
                        containerRect.width / 2) /
                    20;
                const y =
                    (event.clientY -
                        containerRect.top -
                        containerRect.height / 2) /
                    20;
                imageX.set(x);
                imageY.set(y);
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [imageX, imageY]);

    return (
        <div ref={sectionRef} className="relative h-[600vh]">
            <motion.div
                className="sticky top-0 h-screen overflow-hidden flex items-center justify-center"
                style={{ backgroundColor }}
            >
                <motion.div className="relative w-full h-full" style={{ y }}>
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            className="absolute top-0 left-0 w-full h-screen flex items-center justify-center"
                            style={{ y: `${index * 100}%` }}
                        >
                            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                                <motion.div
                                    className="md:w-1/2 text-left pr-6"
                                    initial={{ x: -50 }}
                                    animate={{
                                        x: currentProduct === index ? 0 : -50,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut",
                                    }}
                                >
                                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                                        {product.name}
                                    </h2>
                                    <p className="text-lg md:text-xl mb-6 leading-relaxed">
                                        {product.description}
                                    </p>
                                    <div className="flex flex-wrap gap-4 mb-6 text-sm md:text-base">
                                        <span>{product.details.type}</span>
                                        <span>{product.details.abv} ABV</span>
                                        <span>
                                            {product.details.bottleSize}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        Características
                                    </h3>
                                    <p className="text-base mb-6">
                                        {product.details.characteristics}
                                    </p>
                                    <h3 className="text-lg font-semibold mb-2">
                                        Ingredientes
                                    </h3>
                                    <p className="text-base">
                                        {product.ingredients}
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="md:w-1/2 flex justify-center items-center"
                                    initial={{ scale: 0.8 }}
                                    animate={{
                                        scale:
                                            currentProduct === index ? 1 : 0.8,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut",
                                    }}
                                    style={{ x: imageX, y: imageY }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Image
                                        src={product.image}
                                        alt={`Garrafa de soju sabor ${product.name}`}
                                        width={300}
                                        height={800}
                                        className="h-[80vh] w-auto object-contain drop-shadow-xl"
                                        priority={index === 0}
                                        loading={index === 0 ? "eager" : "lazy"}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
