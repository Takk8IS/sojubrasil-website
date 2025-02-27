import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-24 px-4 border-t border-gray-100">
            <div className="container mx-auto max-w-7xl">
                {/* Logo */}
                <div className="mb-20">
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase">
                        Soju Chum Churum
                    </h2>
                </div>

                {/* Navigation Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Index */}
                    <div>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:opacity-70 transition-opacity"
                                    title="Página Inicial - Soju Brasil"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#sobre"
                                    className="hover:opacity-70 transition-opacity"
                                    title="Sobre o Soju Chum Churum - Soju Brasil"
                                >
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#produtos"
                                    className="hover:opacity-70 transition-opacity"
                                    title="Conheça nossos sabores de Soju - Soju Brasil"
                                >
                                    Produtos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#onde-encontrar"
                                    className="hover:opacity-70 transition-opacity"
                                    title="Onde Comprar Soju Chum Churum - Soju Brasil"
                                >
                                    Onde Encontrar
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="#" //  Idealmente, links específicos para cada produto
                                    className="hover:opacity-70 transition-opacity"
                                    title="Soju Chum Churum Sabor Blueberry - Soju Brasil"
                                >
                                    Soju Blueberry
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#" //  Idealmente, links específicos para cada produto
                                    className="hover:opacity-70 transition-opacity"
                                    title="Soju Chum Churum Sabor Iogurte - Soju Brasil"
                                >
                                    Soju Iogurte
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#" //  Idealmente, links específicos para cada produto
                                    className="hover:opacity-70 transition-opacity"
                                    title="Soju Chum Churum Sabor Maçã Verde - Soju Brasil"
                                >
                                    Soju Maçã Verde
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#" //  Idealmente, links específicos para cada produto
                                    className="hover:opacity-70 transition-opacity"
                                    title="Soju Chum Churum Sabor Manga - Soju Brasil"
                                >
                                    Soju Manga
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#" //  Idealmente, links específicos para cada produto
                                    className="hover:opacity-70 transition-opacity"
                                    title="Soju Chum Churum Sabor Morango - Soju Brasil"
                                >
                                    Soju Morango
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#" //  Idealmente, links específicos para cada produto
                                    className="hover:opacity-70 transition-opacity"
                                    title="Soju Chum Churum Sabor Pêssego - Soju Brasil"
                                >
                                    Soju Pêssego
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/termos"
                                    className="hover:opacity-70 transition-opacity"
                                    title="Termos de Serviço - Soju Brasil"
                                >
                                    Termos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacidade"
                                    className="hover:opacity-70 transition-opacity"
                                    title="Política de Privacidade - Soju Brasil"
                                >
                                    Privacidade
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cookies"
                                    className="hover:opacity-70 transition-opacity"
                                    title="Política de Cookies - Soju Brasil"
                                >
                                    Cookies
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="https://instagram.com/sojubrasil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity"
                                    title="Soju Brasil no Instagram"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://facebook.com/sojubrasil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity"
                                    title="Soju Brasil no Facebook"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://x.com/sojubrasil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity"
                                    title="Soju Brasil no Twitter (X)"
                                >
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-100">
                    <p className="text-sm mb-4 md:mb-0">
                        © {currentYear} Soju Brasil. Todos os direitos
                        reservados. Designed by{" "}
                        <a
                            href="https://takk.ag"
                            className="hover:opacity-70 transition-opacity"
                            title="Design por Takk™ Innovate Studio"
                        >
                            Takk™ Innovate Studio
                        </a>
                        .
                    </p>
                    <div className="text-sm">
                        <span className="opacity-70">
                            Beba com moderação. Venda proibida para menores de
                            18 anos.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
