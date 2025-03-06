"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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
                        <h1 className="text-4xl font-bold">Termos de Uso</h1>
                        <p className="text-xl text-black/60">
                            Última atualização:{" "}
                            {new Date().toLocaleDateString("pt-BR")}
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none space-y-8 text-black/80">
                        <p>
                            Ao acessar e usar o site da Soju Chum Churum, você
                            concorda com estes termos de uso. Por favor, leia-os
                            atentamente.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8">
                            Uso do Site
                        </h2>
                        <p>
                            Você concorda em usar este site apenas para
                            propósitos legais e de acordo com estes termos. Você
                            não pode:
                        </p>
                        <ul className="list-disc pl-6 space-y-4">
                            <li>
                                Usar o site de maneira fraudulenta ou ilegal
                            </li>
                            <li>Coletar dados dos usuários sem autorização</li>
                            <li>Interferir no funcionamento do site</li>
                            <li>Acessar áreas restritas sem autorização</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-8">
                            Propriedade Intelectual
                        </h2>
                        <p>
                            Todo o conteúdo deste site - incluindo textos,
                            gráficos, logos, imagens e software - é propriedade
                            da Soju Chum Churum e está protegido por leis de
                            direitos autorais.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8">
                            Limitação de Responsabilidade
                        </h2>
                        <p>
                            A Soju Chum Churum não se responsabiliza por danos
                            diretos, indiretos, incidentais ou consequenciais
                            resultantes do uso ou impossibilidade de uso do
                            site.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8">
                            Alterações nos Termos
                        </h2>
                        <p>
                            Reservamo-nos o direito de modificar estes termos a
                            qualquer momento. Alterações entram em vigor
                            imediatamente após publicação no site.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8">
                            Lei Aplicável
                        </h2>
                        <p>
                            Estes termos são regidos pelas leis do Brasil.
                            Qualquer disputa será resolvida nos tribunais
                            brasileiros.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8">Contato</h2>
                        <p>
                            Para questões sobre estes termos, entre em contato
                            através de nossos canais oficiais.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
