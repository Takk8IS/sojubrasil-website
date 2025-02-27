import Link from "next/link";
import { Footer } from "../components/footer";

export default function PrivacyPage() {
    return (
        <>
            <main className="min-h-screen py-24 px-4">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-12">
                        Política de Privacidade
                    </h1>
                    <div className="prose prose-lg">
                        <p>
                            Última atualização:{" "}
                            {new Date().toLocaleDateString("pt-BR")}
                        </p>
                        <p>
                            A Lotte, proprietária do site Soju Brasil
                            (https://sojubrasil.com), está comprometida em
                            proteger a privacidade dos seus usuários. Esta
                            Política de Privacidade descreve como coletamos,
                            usamos e protegemos as informações pessoais que você
                            fornece em nosso site.
                        </p>

                        <h2>Coleta de Informações</h2>

                        <p>
                            Podemos coletar informações pessoais, como nome,
                            endereço de e-mail, endereço e informações
                            demográficas, quando você:
                        </p>
                        <ul>
                            <li>Faz um pedido em nosso site.</li>
                            <li>Se inscreve em nossa newsletter.</li>
                            <li>Participa de promoções ou concursos.</li>
                            <li>
                                Entra em contato conosco através do formulário
                                de contato.
                            </li>
                        </ul>

                        <p>
                            Também podemos coletar informações não pessoais,
                            como tipo de navegador, sistema operacional,
                            provedor de serviços de Internet e outros dados
                            técnicos, através de cookies e outras tecnologias de
                            rastreamento. Essas informações são usadas para
                            melhorar a experiência do usuário em nosso site e
                            para fins estatísticos.
                        </p>

                        <h2>Uso das Informações</h2>
                        <p>
                            As informações que coletamos podem ser usadas para:
                        </p>
                        <ul>
                            <li>Processar seus pedidos e transações.</li>
                            <li>
                                Enviar e-mails promocionais e newsletters (se
                                você optar por recebê-los).
                            </li>
                            <li>Melhorar nosso site e serviços.</li>
                            <li>Personalizar sua experiência em nosso site.</li>
                            <li>Responder às suas perguntas e solicitações.</li>
                            <li>Cumprir obrigações legais.</li>
                        </ul>

                        <h2>Compartilhamento de Informações</h2>
                        <p>
                            Não vendemos, trocamos ou alugamos suas informações
                            pessoais para terceiros. Podemos compartilhar suas
                            informações com:
                        </p>

                        <ul>
                            <li>
                                Prestadores de serviços que nos auxiliam na
                                operação do site (por exemplo, processadores de
                                pagamento, empresas de entrega). Esses
                                prestadores de serviços têm acesso às suas
                                informações apenas para realizar tarefas
                                específicas em nosso nome e são obrigados a
                                proteger suas informações.
                            </li>
                            <li>
                                Autoridades competentes, se exigido por lei ou
                                para proteger nossos direitos legais.
                            </li>
                        </ul>

                        <h2>Segurança das Informações</h2>
                        <p>
                            Implementamos medidas de segurança para proteger
                            suas informações pessoais contra acesso não
                            autorizado, alteração, divulgação ou destruição. No
                            entanto, nenhuma transmissão de dados pela Internet
                            é 100% segura, e não podemos garantir a segurança
                            absoluta das informações que você transmite para
                            nós.
                        </p>

                        <h2>Cookies</h2>
                        <p>
                            Utilizamos cookies para melhorar sua experiência em
                            nosso site. Cookies são pequenos arquivos de texto
                            que são armazenados em seu dispositivo quando você
                            visita um site. Você pode configurar seu navegador
                            para recusar todos os cookies ou para alertá-lo
                            quando um cookie estiver sendo enviado. No entanto,
                            se você desativar os cookies, algumas partes do
                            nosso site podem não funcionar corretamente.
                        </p>

                        <h2>Seus Direitos</h2>

                        <p>Você tem o direito de:</p>
                        <ul>
                            <li>Acessar suas informações pessoais.</li>
                            <li>
                                Solicitar a correção de informações incorretas.
                            </li>
                            <li>
                                Solicitar a exclusão de suas informações
                                pessoais (sujeito a certas exceções).
                            </li>
                            <li>Optar por não receber e-mails promocionais.</li>
                        </ul>

                        <p>
                            Para exercer esses direitos, entre em contato
                            conosco através do formulário de contato em nosso
                            site.
                        </p>

                        <h2>Alterações a esta Política de Privacidade</h2>
                        <p>
                            Podemos atualizar esta Política de Privacidade
                            periodicamente. Quaisquer alterações serão
                            publicadas nesta página, com a data da última
                            atualização indicada no topo.
                        </p>

                        <h2>Contato</h2>
                        <p>
                            Se você tiver alguma dúvida sobre esta Política de
                            Privacidade, entre em contato conosco através do
                            formulário de contato em nosso site.
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
