"use client";

import React, { useEffect, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    AnimatePresence,
} from "framer-motion";
import {
    Dot,
    Droplets,
    Leaf,
    Wine,
    Sparkles,
    Droplet,
    Flame,
    Apple,
    Heart,
    Milk,
    Grape,
    MapPin,
    Phone,
    Instagram,
    BookIcon as TiktokIcon,
} from "lucide-react";

interface FlavorType {
    name: string;
    nameKr: string;
    type: string;
    abv: string;
    volume: string;
    description: string;
    characteristics: string;
    color: string;
    textColor: string;
    icon: React.ReactElement;
    image: string;
}

const flavors: FlavorType[] = [
    {
        name: "Original",
        nameKr: "오리지널",
        type: "Destilado Especial / Soju",
        abv: "16,5%",
        volume: "375ml",
        description:
            'A essência do soju tradicional, feito com água alcalina pura, proporciona uma suavidade única ao paladar. "Chum Churum" significa "Como da Primeira Vez", refletindo o frescor e a novidade em cada gole.',
        characteristics:
            "Feito com água alcalina, proporciona uma suavidade única ao paladar, ideal para quem aprecia o verdadeiro sabor do soju.",
        color: "#E6EDF2",
        textColor: "#000000",
        icon: <Droplet className="w-8 h-8" />,
        image: "/images/soju-original.webp",
    },
    {
        name: "Manga",
        nameKr: "망고",
        type: "Soju Saborizado",
        abv: "12%",
        volume: "375ml",
        description:
            "Um deleite suave e adocicado que lembra um doce de manga recém-colhido. Seu aroma envolvente torna cada gole uma experiência inesquecível.",
        characteristics:
            "Sabor tropical marcante com aroma frutado intenso, perfeito para degustação pura ou em coquetéis.",
        color: "#FFDB9D",
        textColor: "#000000",
        icon: <Sparkles className="w-8 h-8" />,
        image: "/images/soju-manga.webp",
    },
    {
        name: "Pêssego",
        nameKr: "복숭아",
        type: "Soju Saborizado",
        abv: "12%",
        volume: "375ml",
        description:
            "Um deleite suave e adocicado que lembra um doce de pêssego recém-colhido. Seu aroma envolvente torna cada gole uma experiência inesquecível.",
        characteristics:
            "Suavidade e doçura em perfeito equilíbrio, com aroma persistente de pêssego maduro.",
        color: "#FFCBA4",
        textColor: "#000000",
        icon: <Flame className="w-8 h-8" />,
        image: "/images/soju-pessego.webp",
    },
    {
        name: "Maçã",
        nameKr: "청사과",
        type: "Soju Saborizado",
        abv: "12%",
        volume: "375ml",
        description:
            "O equilíbrio perfeito entre doce e azedo, com o frescor natural da maçã verde. Remete a uma bala de maçã com um toque sofisticado, ideal para adultos que amam sabores intensos.",
        characteristics:
            "Acidez refrescante típica da maçã verde com finalização levemente adocicada.",
        color: "#CCFFBB",
        textColor: "#000000",
        icon: <Apple className="w-8 h-8" />,
        image: "/images/soju-maca-verde.webp",
    },
    {
        name: "Morango",
        nameKr: "딸기",
        type: "Soju Saborizado",
        abv: "12%",
        volume: "375ml",
        description:
            "Sabor marcante e suave de morango, com um aroma intenso que desperta os sentidos. Uma escolha perfeita para quem ama frutas vermelhas.",
        characteristics:
            "Doçura natural e aroma intenso de morango fresco, com finalização equilibrada.",
        color: "#FF9AA2",
        textColor: "#000000",
        icon: <Heart className="w-8 h-8" />,
        image: "/images/soju-morango.webp",
    },
    {
        name: "Iogurte",
        nameKr: "요구르트",
        type: "Soju Saborizado",
        abv: "12%",
        volume: "375ml",
        description:
            "Leve e refrescante, este soju combina a doçura sutil do iogurte com notas cremosas de laranja e pêssego. Uma versão elegante de um orange creamsicle, ideal puro ou com pratos como Samgyeopsal.",
        characteristics:
            "Textura cremosa com notas de cítricos, perfeito para harmonização com pratos da culinária coreana.",
        color: "#F5F0DC",
        textColor: "#000000",
        icon: <Milk className="w-8 h-8" />,
        image: "/images/soju-iogurte.webp",
    },
    {
        name: "Blueberry",
        nameKr: "블루베리",
        type: "Soju Saborizado",
        abv: "12%",
        volume: "375ml",
        description:
            "Desfrute do sabor suave e adocicado do blueberry, com uma doçura natural que encanta sem o amargor típico do soju tradicional. Refrescante e delicioso, é uma opção que conquista logo no primeiro gole.",
        characteristics:
            "Sabor sofisticado de frutas vermelhas com notas doces e baixa acidez.",
        color: "#9370DB",
        textColor: "#000000",
        icon: <Grape className="w-8 h-8" />,
        image: "/images/soju-blueberry.webp",
    },
];

const locations = [
    {
        name: "MIMOS KOREA - Shopping Recife",
        address: "R. Pe. Carapuceiro, 777, Loja 0017, Boa Viagem",
        city: "Recife - PE",
        cep: "51020-280",
        phone: "(81) 99928-5835",
    },
    {
        name: "MIMOS KOREA - Shopping Riomar Recife",
        address: "Av. República do Líbano, 251 - Piso L1, Pina",
        city: "Recife - PE",
        cep: "51110-160",
        phone: "(81) 99481-8060",
    },
    {
        name: "MIMOS KOREA - Shopping Jardins Aracaju",
        address: "Av. Ministro Geraldo Barreto Sobral, 215, Jardins",
        city: "Aracaju - SE",
        cep: "49026-010",
        phone: "(79) 99195-2000",
    },
    {
        name: "MIMOS KOREA - Midway Shopping Natal",
        address: "Av. Nevaldo Rocha, 3775 - Térreo, Lojas 137A/138A, Tirol",
        city: "Natal - RN",
        cep: "59015-450",
        phone: "(84) 99430-3663",
    },
];

export default function Home() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const flavorsSection = document.getElementById("flavors-section");
            if (!flavorsSection) return;

            const sectionRect = flavorsSection.getBoundingClientRect();
            const sectionTop = window.pageYOffset + sectionRect.top;
            const sectionHeight = sectionRect.height;
            const windowHeight = window.innerHeight;
            const scrollPosition = window.pageYOffset;

            // Calculate the scroll progress within the section
            const scrollStart = sectionTop - windowHeight / 2;
            const scrollEnd = sectionTop + sectionHeight - windowHeight * 1.5;
            const progress =
                (scrollPosition - scrollStart) / (scrollEnd - scrollStart);

            // Ensure progress is between 0 and 1
            const clampedProgress = Math.max(0, Math.min(1, progress));

            // Calculate the flavor index based on the progress
            const newIndex = Math.min(
                Math.floor(clampedProgress * flavors.length),
                flavors.length - 1,
            );

            if (newIndex !== currentFlavorIndex) {
                setCurrentFlavorIndex(newIndex);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, [currentFlavorIndex]);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative min-h-screen overflow-hidden bg-[#F4F4F4] flex flex-col justify-center">
                <div
                    className="repeating-text py-4 text-[200px] font-bold opacity-[0.03] absolute inset-0 pointer-events-none"
                    data-text="SOJU CHUM CHURUM "
                />

                <div className="relative z-10 section-padding">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-16">
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="text-giant font-bold text-black text-balance"
                                >
                                    <span className="block text-outline text-transparent">
                                        소주
                                    </span>
                                    <span className="block -mt-8">Soju</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-black/80 text-2xl max-w-md leading-relaxed text-balance"
                                >
                                    A essência da tradição coreana em uma
                                    garrafa. Destilado artesanal que transcende
                                    gerações.
                                </motion.p>
                            </div>

                            <div className="relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                    className="relative z-20"
                                >
                                    <img
                                        src="/images/soju-original.webp"
                                        alt="Garrafa de Soju"
                                        className="w-full h-[80vh] object-contain floating bottle-shadow"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="absolute -right-4 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full"
                                    style={{
                                        background:
                                            "radial-gradient(circle at center, rgba(0,0,0,0.05) 0%, transparent 70%)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div
                    style={{ opacity }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
                >
                    <div className="w-px h-16 bg-gradient-to-b from-black/0 via-black/50 to-black/0" />
                    <span className="text-black/60 text-sm uppercase tracking-[0.4em]">
                        Scroll
                    </span>
                </motion.div>
            </div>

            {/* Flavors Section */}
            <section
                id="flavors-section"
                className="relative"
                style={{ height: `${(flavors.length + 0.5) * 100}vh` }}
            >
                <div
                    className="sticky top-0 h-screen overflow-hidden flex items-center"
                    style={{
                        backgroundColor: flavors[currentFlavorIndex].color,
                    }}
                >
                    <div
                        className="repeating-text py-4 text-[200px] font-bold opacity-[0.03] absolute inset-0 pointer-events-none"
                        data-text={`${flavors[currentFlavorIndex].nameKr} ${flavors[currentFlavorIndex].name} `}
                    />

                    <div className="container mx-auto section-padding relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentFlavorIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                            >
                                <div className="space-y-16">
                                    <div className="space-y-8">
                                        <motion.h2
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.3,
                                            }}
                                            className="text-mega font-bold text-balance"
                                        >
                                            <span className="block text-outline text-transparent">
                                                {
                                                    flavors[currentFlavorIndex]
                                                        .nameKr
                                                }
                                            </span>
                                            <span className="block -mt-6">
                                                {
                                                    flavors[currentFlavorIndex]
                                                        .name
                                                }
                                            </span>
                                        </motion.h2>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.4,
                                            }}
                                            className="flex items-center space-x-4 text-xl opacity-80"
                                        >
                                            <span>
                                                {
                                                    flavors[currentFlavorIndex]
                                                        .abv
                                                }{" "}
                                                ABV
                                            </span>
                                            <span>•</span>
                                            <span>
                                                {
                                                    flavors[currentFlavorIndex]
                                                        .volume
                                                }
                                            </span>
                                        </motion.div>
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.5,
                                            }}
                                            className="text-2xl leading-relaxed opacity-80 text-balance"
                                        >
                                            {
                                                flavors[currentFlavorIndex]
                                                    .description
                                            }
                                        </motion.p>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.6,
                                        }}
                                        className="space-y-8"
                                    >
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold">
                                                Características
                                            </h3>
                                            <p className="text-lg opacity-80 text-balance">
                                                {
                                                    flavors[currentFlavorIndex]
                                                        .characteristics
                                                }
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative flex items-center justify-center"
                                >
                                    <img
                                        src={flavors[currentFlavorIndex].image}
                                        alt={`Soju ${flavors[currentFlavorIndex].name}`}
                                        className="w-full h-[80vh] object-contain mx-auto floating bottle-shadow"
                                    />
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Calories Section */}
            <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
                <div
                    className="repeating-text py-4 text-[200px] font-bold opacity-[0.03] absolute inset-0 pointer-events-none"
                    data-text="POUR "
                />

                <div className="relative z-10 container mx-auto section-padding">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-[90vw] mx-auto"
                    >
                        <h2 className="text-giant font-bold text-black leading-none text-balance">
                            Com menos calorias e sabor suave, é perfeito para
                            celebrações ou momentos casuais com amigos.
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
                <div
                    className="repeating-text py-4 text-[200px] font-bold opacity-[0.03] absolute inset-0 pointer-events-none"
                    data-text="VISIT "
                />

                <div className="relative z-10 container mx-auto section-padding">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-[90vw] mx-auto space-y-24"
                    >
                        <div className="space-y-8">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-mega font-bold text-white leading-none text-balance max-w-4xl"
                            >
                                Experimente o Soju Chum Churum em nossa loja
                                conceito no Recife, um espaço que une
                                sofisticação e cultura coreana.
                            </motion.h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {locations.map((location, index) => (
                                <motion.div
                                    key={location.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="space-y-6"
                                >
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="w-6 h-6 mt-1 text-white/60" />
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold text-white">
                                                {location.name}
                                            </h3>
                                            <p className="text-lg text-white/60">
                                                {location.address}
                                            </p>
                                            <p className="text-lg text-white/60">
                                                {location.city}
                                            </p>
                                            <p className="text-lg text-white/60">
                                                CEP {location.cep}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 text-lg">
                                        <Phone className="w-5 h-5 text-white/60" />
                                        <a
                                            href={`tel:${location.phone}`}
                                            className="text-white/60 hover:text-white smooth-transition"
                                        >
                                            {location.phone}
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative bg-black text-white border-t border-white/5">
                <div className="container mx-auto section-padding">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <h3 className="text-2xl font-bold text-white">
                                Soju Chum Churum
                            </h3>
                            <div className="flex items-center space-x-6">
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/60 hover:text-white smooth-transition"
                                >
                                    <Instagram className="w-6 h-6" />
                                    <span className="sr-only">Instagram</span>
                                </a>
                                <a
                                    href="https://tiktok.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/60 hover:text-white smooth-transition"
                                >
                                    <TiktokIcon className="w-6 h-6" />
                                    <span className="sr-only">TikTok</span>
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a
                                    href="/termos"
                                    className="text-white/60 hover:text-white smooth-transition"
                                >
                                    Termos de Uso
                                </a>
                                <a
                                    href="/cookies"
                                    className="text-white/60 hover:text-white smooth-transition"
                                >
                                    Política de Cookies
                                </a>
                                <a
                                    href="/privacidade"
                                    className="text-white/60 hover:text-white smooth-transition"
                                >
                                    Política de Privacidade
                                </a>
                            </nav>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-16 pt-8 border-t border-white/5"
                    >
                        <p className="text-sm text-white/40 text-center">
                            © {new Date().getFullYear()} Soju Chum Churum.
                            Todos os direitos reservados.
                        </p>
                    </motion.div>
                </div>
            </footer>
        </div>
    );
}
