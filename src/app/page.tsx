"use client";

import { useRef } from "react";
import Image from "next/image";
import { CustomCursor } from "./components/cursor";
import { ScrollSection } from "./components/scroll-section";
import { ProductsSection } from "./components/products-section";
import { Footer } from "./components/footer";
import { CookieConsent } from "./components/cookie-consent";
import { SmoothScroll } from "./components/smooth-scroll";

import sojuHeroLeft from "../assets/images/soju-hero-left.webp";
import sojuHeroRight from "../assets/images/soju-hero-right.webp";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="relative min-h-screen bg-[var(--primary)]">
            <SmoothScroll />
            <CustomCursor />

            <main ref={containerRef} className="relative">
                <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--primary)]">
                    <div className="relative z-10 text-center px-6 max-w-4xl">
                        <h1>SOJU BRASIL</h1>
                        <p>
                            Descubra o mundo refrescante do autêntico Soju
                            Coreano Premium
                        </p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-between px-10 pointer-events-none">
                        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 -rotate-12">
                            <Image
                                src={sojuHeroLeft}
                                alt="Soju"
                                width={300}
                                height={800}
                                className="h-[90vh] w-auto object-contain"
                                priority
                            />
                        </div>
                        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 rotate-12">
                            <Image
                                src={sojuHeroRight}
                                alt="Soju"
                                width={300}
                                height={800}
                                className="h-[70vh] w-auto object-contain"
                                priority
                            />
                        </div>
                    </div>
                </section>

                <ScrollSection
                    as="div"
                    className="bg-gray-50 min-h-screen flex items-center justify-center"
                >
                    <div className="container mx-auto px-6 max-w-6xl py-16">
                        <h2 className="text-5xl md:text-7xl font-bold mb-12 text-center text-gray-900">
                            Soju saboroso a cada drink
                        </h2>
                        <div className="grid grid-cols-1 gap-12">
                            <p>
                                Mergulhe no universo do Soju Chum Churum, a
                                bebida destilada mais icônica da Coreia. Feita
                                com ingredientes premium como arroz, batata ou
                                tapioca, combina suavidade e um toque adocicado.
                                Com menos calorias e um teor alcoólico leve, é
                                perfeito para uma experiência descontraída, seja
                                puro, gelado ou em coquetéis criativos. A
                                essência do soju tradicional com 16,5% de teor
                                alcoólico. Feito com água alcalina pura,
                                destilado de arroz e tapioca, oferece suavidade
                                única.
                            </p>
                        </div>
                    </div>
                </ScrollSection>

                <ScrollSection
                    as="div"
                    className="bg-white min-h-screen flex items-center justify-center"
                >
                    <div className="container mx-auto px-6 max-w-6xl text-center py-16">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
                                Linha Soonhari
                            </h2>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
                                A linha Soonhari transforma o soju em uma
                                explosão de sabores frutados, ideal para quem
                                busca algo doce, leve e divertido. Com 12% de
                                teor alcoólico, é perfeita sozinha ou em
                                coquetéis.
                            </p>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                                Conheça os 8 sabores que tornam a linha Soonhari
                                irresistível logo abaixo.
                            </p>
                        </div>
                    </div>
                </ScrollSection>

                <ProductsSection />

                <ScrollSection
                    as="div"
                    className="bg-gray-50 min-h-screen flex items-center justify-center"
                >
                    <div className="container mx-auto px-6 max-w-6xl py-16">
                        <h2 className="text-5xl md:text-7xl font-bold mb-12 text-center text-gray-900">
                            Por que Escolher Chum Churum?
                        </h2>
                        <div className="text-center">
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
                                Seja fã de bebidas coreanas ou em busca de novos
                                sabores, o Soju Chum Churum oferece uma
                                experiência única — tradição pura no Original e
                                inovação frutada na linha Soonhari.
                            </p>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                                Com menos calorias e sabor suave, é perfeito
                                para celebrações ou momentos casuais com amigos.
                            </p>
                        </div>
                    </div>
                </ScrollSection>

                <ScrollSection
                    as="div"
                    className="bg-white min-h-screen flex items-center justify-center"
                >
                    <div className="container mx-auto px-6 max-w-6xl py-16">
                        <h2 className="text-5xl md:text-7xl font-bold mb-12 text-center text-gray-900">
                            Onde Encontrar
                        </h2>
                        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                            <div className="md:w-1/2">
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                    Experimente o Soju Chum Churum em nossa loja
                                    conceito no Recife, um espaço que une
                                    sofisticação e cultura coreana.
                                </p>
                            </div>
                            <div className="md:w-1/3">
                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                                    Shopping Recife
                                </h3>
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                    R. Padre Carapuceiro, 777
                                    <br />
                                    Boa Viagem, Recife - PE
                                    <br />
                                    CEP 51020-900
                                    <br />
                                    Piso L2 - Loja 321
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollSection>
            </main>

            <Footer />
            <CookieConsent />
        </div>
    );
}
