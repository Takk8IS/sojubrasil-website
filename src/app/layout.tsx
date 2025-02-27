import type React from "react";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
    title: "Chum Churum Soju | Soju Brasil - O Autêntico Sabor Coreano",
    description:
        "Descubra o Chum Churum Soju, a bebida destilada mais vendida no mundo, importada diretamente da Coreia pela Soju Brasil (Lotte). Experimente o sabor suave e refrescante do soju original e dos sabores Pêssego, Uva, Cidra, Maçã, Morango e Iogurte. Teor alcoólico: 16.5%. Compre online!",
    keywords: [
        "Soju",
        "Chum Churum",
        "Chum Churum Soju",
        "Soju Brasil",
        "Lotte",
        "bebida coreana",
        "destilado coreano",
        "soju original",
        "soju pêssego",
        "soju uva",
        "soju cidra",
        "soju maçã",
        "soju morango",
        "soju iogurte",
        "comprar soju",
        "soju online",
        "bebida alcoólica",
        "cultura coreana",
        "onde comprar soju",
        "melhor soju",
        "receitas com soju",
        "coquetéis com soju",
        "Soonhari",
        "Chum-Churum Soonhari",
    ],
    alternates: {
        canonical: "https://sojubrasil.com",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": "-1",
            "max-image-preview": "large",
            "max-snippet": "-1",
        },
    },
    twitter: {
        card: "summary_large_image",
        title: "Chum Churum Soju | Soju Brasil",
        description:
            "O autêntico sabor da Coreia em cada garrafa. Experimente o soju Chum Churum, suave e refrescante!",
        images: ["https://sojubrasil.com/images/chum-churum-original.jpg"],
    },
    openGraph: {
        title: "Chum Churum Soju | Soju Brasil",
        description:
            "Descubra o autêntico sabor coreano do Soju Chum Churum. A bebida destilada mais vendida no mundo!",
        url: "https://sojubrasil.com",
        siteName: "Soju Brasil",
        images: [
            {
                url: "https://sojubrasil.com/images/chum-churum-banner.jpg",
                width: 1200,
                height: 630,
                alt: "Chum Churum Soju Banner Image",
            },
        ],
        locale: "pt-BR",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" className={mulish.className}>
            <body>{children}</body>
        </html>
    );
}
