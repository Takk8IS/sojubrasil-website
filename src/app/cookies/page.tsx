"use client";

import Link from "next/link";
import { Footer } from "../components/footer";

export default function CookiesPage() {
    return (
        <>
            <main className="bg-[var(--background)] grid place-items-center">
                <div className="max-w-7xl w-full px-4 py-8 mt-10 mb-20">
                    <h2 className="mb-6">Cookies</h2>
                    <div className="space-y-4">
                        <p>
                            Esta Política de Cookies explica como a Soju Brasil
                            (Lotte), em seu site https://sojubrasil.com, utiliza
                            cookies e tecnologias similares para reconhecer você
                            quando visita nosso site. Ela explica o que são
                            essas tecnologias e por que as usamos, bem como seus
                            direitos de controlar nosso uso delas.
                        </p>

                        <p>
                            <b>O que são cookies?</b>
                        </p>

                        <p>
                            Cookies são pequenos arquivos de dados que são
                            colocados no seu computador ou dispositivo móvel
                            quando você visita um site. Cookies são amplamente
                            usados por proprietários de sites para fazer seus
                            sites funcionarem, ou para funcionarem de forma mais
                            eficiente, bem como para fornecer informações de
                            relatórios.
                        </p>

                        <p>
                            <b>Por que usamos cookies?</b>
                        </p>

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
                                <b>Cookies Essenciais do Site:</b> Estes cookies
                                são estritamente necessários para fornecer a
                                você os serviços disponíveis através do nosso
                                site e para usar alguns de seus recursos, como
                                acesso a áreas seguras.
                            </li>
                            <li>
                                <b>Cookies de Desempenho e Funcionalidade:</b>{" "}
                                Estes cookies são usados para aprimorar o
                                desempenho e a funcionalidade do nosso site, mas
                                não são essenciais para o seu uso. No entanto,
                                sem esses cookies, certas funcionalidades (como
                                vídeos) podem ficar indisponíveis.
                            </li>
                            <li>
                                <b>Cookies de Análise e Personalização:</b>{" "}
                                Estes cookies coletam informações que são usadas
                                de forma agregada para nos ajudar a entender
                                como nosso site está sendo usado ou quão
                                eficazes são nossas campanhas de marketing, ou
                                para nos ajudar a personalizar nosso site para
                                você.
                            </li>
                            <li>
                                <b>Cookies de Publicidade (Targeting):</b> Estes
                                cookies são usados para tornar as mensagens de
                                publicidade mais relevantes para você. Eles
                                desempenham funções como impedir que o mesmo
                                anúncio reapareça continuamente, garantindo que
                                os anúncios sejam exibidos corretamente para os
                                anunciantes e, em alguns casos, selecionando
                                anúncios que são baseados em seus interesses.
                            </li>
                        </ul>

                        <p>
                            <b>Como posso controlar os cookies?</b>
                        </p>

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

                        <p>
                            <b>Alterações a esta Política de Cookies</b>
                        </p>
                        <p>
                            Podemos atualizar esta Política de Cookies de tempos
                            em tempos para refletir, por exemplo, mudanças nos
                            cookies que usamos ou por outras razões
                            operacionais, legais ou regulatórias. Portanto,
                            visite esta Política de Cookies regularmente para se
                            manter informado sobre nosso uso de cookies e
                            tecnologias relacionadas.
                        </p>
                        <p>
                            <b>Mais Informações</b>
                        </p>
                        <p>
                            Se você tiver alguma dúvida sobre nosso uso de
                            cookies ou outras tecnologias, entre em contato
                            conosco.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
