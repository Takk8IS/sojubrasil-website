"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function CookiesPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto space-y-16"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center space-x-2 text-black/60 hover:text-black smooth-transition"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        <span>Voltar para home</span>
                    </Link>

                    <div className="space-y-8">
                        <h1 className="text-4xl font-bold">
                            Política de Cookies
                        </h1>
                        <p className="text-xl text-black/60">
                            Última atualização:{" "}
                            {new Date().toLocaleDateString("pt-BR")}
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none space-y-8 text-black/80">
                        <p>
                            A Soju Chum Churum utiliza cookies para melhorar sua
                            experiência em nosso site. Esta política explica
                            como utilizamos cookies e tecnologias similares.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8">
                            O que são cookies?
                        </h2>
                        <p>
                            Cookies são pequenos arquivos de texto armazenados
                            em seu dispositivo quando você visita um site. Eles
                            servem para lembrar suas preferências e melhorar sua
                            experiência de navegação.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8">
                            Como utilizamos os cookies
                        </h2>
                        <ul className="list-disc pl-6 space-y-4">
                            <li>
                                Cookies essenciais: necessários para o
                                funcionamento básico do site
                            </li>
                            <li>
                                Cookies de desempenho: ajudam a entender como os
                                visitantes interagem com o site
                            </li>
                            <li>
                                Cookies de funcionalidade: lembram suas
                                preferências e escolhas
                            </li>
                            <li>
                                Cookies de publicidade: personalizam anúncios
                                baseados em seus interesses
                            </li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-8">
                            Seus direitos
                        </h2>
                        <p>
                            Você pode controlar e/ou excluir cookies conforme
                            desejar. Pode apagar todos os cookies já presentes
                            em seu dispositivo e configurar a maioria dos
                            navegadores para bloqueá-los.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8">Contato</h2>
                        <p>
                            Para questões sobre nossa política de cookies, entre
                            em contato através de nossos canais oficiais.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
