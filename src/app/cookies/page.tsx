import Link from "next/link";
import { Footer } from "../components/footer";

export default function CookiesPage() {
    return (
        <>
            <main className="min-h-screen py-24 px-4">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-12">
                        Política de Cookies - Soju Brasil (Lotte)
                    </h1>
                    <div className="prose prose-lg">
                        <p>
                            Última atualização:{" "}
                            {new Date().toLocaleDateString("pt-BR")}
                        </p>
                        <p>
                            Esta Política de Cookies explica como a Soju Brasil
                            (Lotte), em seu site https://sojubrasil.com, utiliza
                            cookies e tecnologias similares para reconhecer você
                            quando visita nosso site. Ela explica o que são
                            essas tecnologias e por que as usamos, bem como seus
                            direitos de controlar nosso uso delas.
                        </p>

                        <h2>O que são cookies?</h2>

                        <p>
                            Cookies são pequenos arquivos de dados que são
                            colocados no seu computador ou dispositivo móvel
                            quando você visita um site. Cookies são amplamente
                            usados por proprietários de sites para fazer seus
                            sites funcionarem, ou para funcionarem de forma mais
                            eficiente, bem como para fornecer informações de
                            relatórios.
                        </p>

                        <h2>Por que usamos cookies?</h2>

                        <p>
                            Utilizamos cookies por vários motivos. Alguns
                            cookies são necessários por razões técnicas para que
                            nosso site opere, e nos referimos a eles como
                            cookies &quot;essenciais&quot; ou &quot;estritamente
                            necessários&quot;. Outros cookies também nos
                            permitem rastrear e direcionar os interesses de
                            nossos usuários para aprimorar a experiência em
                            nosso site. Por exemplo, a Soju Brasil (Lotte)
                            rastreia as páginas que você visita dentro do site
                            para determinar qual parte do site ou produtos (Chum
                            Churum Soju, em seus diversos sabores como Pêssego,
                            Uva, Cidra, Maçã, Morango e Iogurte) são os mais
                            populares. Esses dados são usados para entregar
                            conteúdo e promoções personalizadas dentro do site
                            para clientes cujo comportamento indica que eles
                            estão interessados em uma área específica.
                        </p>
                        <p>
                            Os tipos específicos de cookies servidos através do
                            nosso site e os propósitos que eles desempenham
                            incluem:
                        </p>
                        <ul>
                            <li>
                                <strong>Cookies Essenciais do Site:</strong>{" "}
                                Estes cookies são estritamente necessários para
                                fornecer a você os serviços disponíveis através
                                do nosso site e para usar alguns de seus
                                recursos, como acesso a áreas seguras.
                            </li>
                            <li>
                                <strong>
                                    Cookies de Desempenho e Funcionalidade:
                                </strong>{" "}
                                Estes cookies são usados para aprimorar o
                                desempenho e a funcionalidade do nosso site, mas
                                não são essenciais para o seu uso. No entanto,
                                sem esses cookies, certas funcionalidades (como
                                vídeos) podem ficar indisponíveis.
                            </li>
                            <li>
                                <strong>
                                    Cookies de Análise e Personalização:
                                </strong>{" "}
                                Estes cookies coletam informações que são usadas
                                de forma agregada para nos ajudar a entender
                                como nosso site está sendo usado ou quão
                                eficazes são nossas campanhas de marketing, ou
                                para nos ajudar a personalizar nosso site para
                                você.
                            </li>
                            <li>
                                <strong>
                                    Cookies de Publicidade (Targeting):
                                </strong>{" "}
                                Estes cookies são usados para tornar as
                                mensagens de publicidade mais relevantes para
                                você. Eles desempenham funções como impedir que
                                o mesmo anúncio reapareça continuamente,
                                garantindo que os anúncios sejam exibidos
                                corretamente para os anunciantes e, em alguns
                                casos, selecionando anúncios que são baseados em
                                seus interesses.
                            </li>
                        </ul>

                        <h2>Como posso controlar os cookies?</h2>

                        <p>
                            Você tem o direito de decidir se aceita ou rejeita
                            cookies. Você pode exercer suas preferências de
                            cookies ajustando as configurações do seu navegador.
                            A maioria dos navegadores da web aceita cookies
                            automaticamente, mas você geralmente pode modificar
                            a configuração do seu navegador para recusar
                            cookies, se preferir. Isso pode impedi-lo de
                            aproveitar ao máximo o site.
                        </p>

                        <h2>Alterações a esta Política de Cookies</h2>
                        <p>
                            Podemos atualizar esta Política de Cookies de tempos
                            em tempos para refletir, por exemplo, mudanças nos
                            cookies que usamos ou por outras razões
                            operacionais, legais ou regulatórias. Portanto,
                            visite esta Política de Cookies regularmente para se
                            manter informado sobre nosso uso de cookies e
                            tecnologias relacionadas.
                        </p>
                        <h2>Mais Informações</h2>
                        <p>
                            Se você tiver alguma dúvida sobre nosso uso de
                            cookies ou outras tecnologias, entre em contato
                            conosco.
                        </p>
                    </div>
                    <div className="mt-12">
                        <Link
                            href="/"
                            className="text-lg hover:opacity-70 transition-opacity"
                        >
                            ← Voltar para home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
