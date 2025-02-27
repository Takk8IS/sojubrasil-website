import Link from "next/link";
import { Footer } from "../components/footer";

export default function TermsPage() {
    return (
        <>
            <main className="min-h-screen py-24 px-4">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-12">
                        Termos de Uso
                    </h1>
                    <div className="prose prose-lg">
                        <p>
                            Última atualização:{" "}
                            {new Date().toLocaleDateString("pt-BR")}
                        </p>
                        <h2>Termos de Uso do Site Soju Brasil (Lotte)</h2>

                        <p>
                            Bem-vindo ao Soju Brasil, o site da Lotte para o
                            Chum Churum Soju. Ao acessar e usar este site, você
                            concorda com os seguintes termos e condições.
                            Leia-os atentamente.
                        </p>

                        <h3>1. Aceitação dos Termos</h3>

                        <p>
                            Ao acessar ou usar o site Soju Brasil, você concorda
                            em cumprir estes Termos de Uso e todas as leis e
                            regulamentos aplicáveis. Se você não concordar com
                            algum destes termos, não use este site.
                        </p>

                        <h3>2. Uso do Site</h3>

                        <p>
                            Este site é destinado a fornecer informações sobre o
                            Chum Churum Soju, a bebida destilada mais vendida no
                            mundo, e outros produtos relacionados da Lotte. Você
                            concorda em usar este site apenas para fins legais e
                            de maneira que não infrinja os direitos de
                            terceiros, nem restrinja ou iniba o uso e
                            aproveitamento do site por qualquer outra pessoa.
                        </p>

                        <h3>3. Conteúdo do Site</h3>

                        <p>
                            Todo o conteúdo deste site, incluindo textos,
                            imagens, gráficos, logotipos e informações sobre o
                            produto, é propriedade da Lotte ou de seus
                            licenciadores e é protegido por leis de direitos
                            autorais e outras leis de propriedade intelectual.
                            Você não pode reproduzir, distribuir, modificar ou
                            criar trabalhos derivados de qualquer parte deste
                            site sem a permissão expressa por escrito da Lotte.
                        </p>

                        <p>
                            <b>Informações sobre o Soju:</b> O Soju é uma bebida
                            destilada coreana, tradicionalmente feita de arroz,
                            mas também pode ser produzida a partir de batata,
                            batata doce ou tapioca. O Chum Churum Soju, em
                            particular, é feito com água alcalina e oferece um
                            sabor suave. Disponível em diversos sabores, como
                            pêssego, uva, cidra, maçã, morango e iogurte, o Chum
                            Churum Soju é conhecido por seu perfil de sabor
                            refrescante e teor alcoólico moderado (geralmente em
                            torno de 12% a 16,5%, dependendo do sabor).
                        </p>

                        <h3>4. Restrição de Idade</h3>

                        <p>
                            Este site é destinado a pessoas com idade legal para
                            consumir bebidas alcoólicas em seu país de
                            residência. Ao acessar este site, você confirma que
                            tem idade legal para beber.
                        </p>

                        <h3>5. Isenção de Responsabilidade</h3>

                        <p>
                            As informações fornecidas neste site são apenas para
                            fins informativos gerais. A Lotte não garante a
                            exatidão, integridade ou atualidade das informações
                            e não se responsabiliza por quaisquer erros ou
                            omissões. O consumo de bebidas alcoólicas deve ser
                            feito com moderação.
                        </p>

                        <h3>6. Links para Sites de Terceiros</h3>

                        <p>
                            Este site pode conter links para sites de terceiros.
                            A Lotte não é responsável pelo conteúdo ou pelas
                            práticas de privacidade desses sites.
                        </p>

                        <h3>7. Alterações nos Termos de Uso</h3>

                        <p>
                            A Lotte reserva-se o direito de modificar estes
                            Termos de Uso a qualquer momento. Quaisquer
                            alterações entrarão em vigor imediatamente após a
                            publicação no site. É sua responsabilidade revisar
                            periodicamente os Termos de Uso para estar ciente de
                            quaisquer alterações.
                        </p>

                        <h3>8. Lei Aplicável</h3>
                        <p>
                            Estes Termos de Uso serão regidos e interpretados de
                            acordo com as leis brasileiras, sem levar em
                            consideração os conflitos de princípios legais.
                        </p>

                        <h3>9. Contato</h3>
                        <p>
                            Se você tiver alguma dúvida sobre estes Termos de
                            Uso, entre em contato conosco através dos canais
                            disponíveis no site.
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
