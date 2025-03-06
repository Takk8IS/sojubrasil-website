import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { LotteLogo } from "@/components/LotteLogo";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://sojuchumchurum.com"),
    title: {
        default:
            "Soju Chum Churum | Lotte Group - A Essência da Tradição Coreana",
        template: "%s | Soju Chum Churum - Lotte Group",
    },
    description:
        "Descubra o Soju Chum Churum da Lotte Group, um destilado artesanal que transcende gerações. Sabores únicos, tradição coreana e qualidade premium em cada garrafa.",
    keywords: [
        "soju",
        "bebida coreana",
        "destilado",
        "chum churum",
        "korea",
        "premium",
        "artesanal",
        "lotte group",
        "lotte",
        "korean beverage",
    ],
    authors: [{ name: "Lotte Group" }, { name: "Soju Chum Churum" }],
    creator: "Lotte Group",
    publisher: "Lotte Group",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Soju Chum Churum | Lotte Group - A Essência da Tradição Coreana",
        description:
            "Descubra o Soju Chum Churum da Lotte Group, um destilado artesanal que transcende gerações. Sabores únicos, tradição coreana e qualidade premium em cada garrafa.",
        url: "https://sojuchumchurum.com",
        siteName: "Soju Chum Churum - Lotte Group",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: "https://sojubrasil.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsoju-blueberry.cffe4ad1.webp",
                width: 1200,
                height: 630,
                alt: "Soju Chum Churum - Garrafa de Soju Premium da Lotte Group",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Soju Chum Churum | Lotte Group - A Essência da Tradição Coreana",
        description:
            "Descubra o Soju Chum Churum da Lotte Group, um destilado artesanal que transcende gerações. Sabores únicos, tradição coreana e qualidade premium em cada garrafa.",
        images: [
            "https://sojubrasil.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsoju-blueberry.cffe4ad1.webp",
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
    },
    other: {
        "og:brand": "Lotte Group",
        "og:company": "Lotte Group",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#ffffff" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "Lotte Group - Soju Chum Churum",
                            url: "https://sojuchumchurum.com",
                            logo: "https://sojuchumchurum.com/logo.png",
                            description:
                                "Descubra o Soju Chum Churum da Lotte Group, um destilado artesanal que transcende gerações. Sabores únicos, tradição coreana e qualidade premium em cada garrafa.",
                            brand: {
                                "@type": "Brand",
                                name: "Lotte Group",
                                logo: "https://sojuchumchurum.com/lotte-logo.png",
                            },
                            parentOrganization: {
                                "@type": "Organization",
                                name: "Lotte Group",
                                url: "https://www.lotte.co.kr/global/en/main.do",
                            },
                            sameAs: [
                                "https://instagram.com/sojuchumchurum",
                                "https://tiktok.com/@sojuchumchurum",
                            ],
                            address: {
                                "@type": "PostalAddress",
                                addressCountry: "BR",
                            },
                            contactPoint: {
                                "@type": "ContactPoint",
                                telephone: "+55-81-99928-5835",
                                contactType: "customer service",
                            },
                        }),
                    }}
                />
            </head>
            <body className={spaceGrotesk.className}>
                <LotteLogo />
                {children}
            </body>
        </html>
    );
}
