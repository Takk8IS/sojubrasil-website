"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
                            Política de Privacidade
                        </h1>
                        <p className="text-xl text-black/60">
                            Última atualização:{" "}
                            {new Date().toLocaleDateString("pt-BR")}
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none space-y-8 text-black/80">
                        <p>
                            A Soju Chum Churum está comprometida em proteger sua
                            privacidade. Esta política descreve como coletamos,
                            usamos e protegemos suas informações pessoais.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8">
                            Informações que coletamos
                        </h2>
                        <ul className="list-disc pl-6 space-y-4">
                            <li>
                                Informações de contato (nome, e-mail, telefone)
                            </li>
                            <li>Dados demográficos (idade, localização)</li>
                            <li>Informações de navegação</li>
                            <li>Preferências e interesses</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-8">
                            Como usamos suas informações
                        </h2>
                        <ul className="list-disc pl-6 space-y-4">
                            <li>Processar pedidos e transações</li>
                            <li>
                                Enviar comunicações sobre produtos e serviços
                            </li>
                            <li>
                                Melhorar nossos produtos e experiência do
                                usuário
                            </li>
                            <li>Cumprir obrigações legais</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-8">
                            Compartilhamento de dados
                        </h2>
                        <p>
                            Não vendemos suas informações pessoais.
                            Compartilhamos dados apenas com parceiros de
                            confiança necessários para nossas operações.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8">
                            Seus direitos
                        </h2>
                        <p>
                            Você tem direito a acessar, corrigir ou solicitar a
                            exclusão de seus dados pessoais. Entre em contato
                            conosco para exercer esses direitos.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8">
                            Segurança
                        </h2>
                        <p>
                            Implementamos medidas de segurança técnicas e
                            organizacionais para proteger suas informações
                            pessoais.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8">Contato</h2>
                        <p>
                            Para questões sobre privacidade, entre em contato
                            através de nossos canais oficiais.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
