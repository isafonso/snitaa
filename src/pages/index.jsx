import Head from "next/head";
import { useRouter } from "next/router";
import { Header, Footer } from "../components";
import styles from "../../public/css/index.module.css";
import { Fragment } from "react";

const index = () => {
  const {} = useRouter();
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="RMINDR" />
        <meta name="robots" content="index, follow" />
        <link
          rel="shortcut icon"
          href="/images/favicon.jpg"
          type="image/x-icon"
        />
        <title>SNITAA</title>
      </Head>
      <div className={styles.index__container}>
        <Header></Header>
        <main>
          <section className={styles.index__section_1}>
            <div>
              <span>
                Sindicato Nacional Independente dos trabalhadores Aeronáuticos e
                dos Aeroportos
              </span>
              <button>
                <i className="fas fa-facebook"></i> Contactar
              </button>
            </div>
            <div>
              <img src="/images/logo_main.jpg" alt="" />
            </div>
          </section>
          <div className={styles.divider}>
            <div></div>
            <h3>Nossos princípios</h3>
            <div></div>
          </div>
          <section className={styles.index__section_2}>
            <div>
              <b>1</b>
              <span>
                {" "}
                Não faça suposições. Para ver as coisas como elas são, evite
                supor que você sabe o que alguém está pensando, ou que você sabe
                as suas motivações. Você pode ter pistas ou ideias, mas você
                deve evitar fazer suposições até que você tenha as informações
                suficientes para ter certeza de que você sabe o que está
                realmente acontecendo. Suposições o farão se sentir como um tolo
                quando você estiver errado. Elas também serão um desperdício do
                precioso poder cerebral, visto que muitas vezes você irá
                analisar algo que se baseia em uma suposição falsa. Se você
                fizer isso, você irá perder mais tempo e recursos.
              </span>
            </div>
            <div>
              <b>2</b>
              <span>
                Aprenda de vários modos e métodos diferentes. É verdade que as
                pessoas aprendem de maneiras diferentes. Alguns aprendem melhor
                através da leitura, outros através de ouvir, ver ou fazer.
                Quando for aprender algo novo, é uma boa ideia começar com um
                método de aprendizagem, talvez com o seu favorito em primeiro
                lugar. Quando você se deparar com uma barreira, onde você não
                entende, tente outro caminho.{" "}
              </span>
            </div>
            <div>
              <b>3</b>
              <span>
                Aprenda a ser autossuficiente e a priorizar o que é mais
                importante. Escola, trabalho, governo e outros sistemas têm suas
                próprias intenções, e as suas próprias falhas. Eles ficarão
                felizes em lhe dizer para onde ir e o que aprender, mas em certo
                momento você terá que decidir por conta própria o que é
                verdadeiramente importante saber. A escola foca na aprendizagem
                da matemática, ciências e história, entre outros temas, mas que
                tal aprender por que esses temas são importantes? Muitas vezes
                eles não focam no por quê, o tanto quanto eles exigem que você
                simplesmente memorize os fatos.
              </span>
            </div>
          </section>
          <div className={styles.divider}>
            <div></div>
            <h3>Nossos líderes</h3>
            <div></div>
          </div>
          <section className={styles.index__section_3}>
            <div className={styles.card}>
              <img src="/images/juliano.jpg" alt="" />
              <div>
                <b>João Afonso</b>
                <br />
                <cite>
                  "Recomendo uma reação diferente. Se a nossa resposta à
                  pergunta crucial for “Sim – sob as atuais circunstâncias,
                  gosto bastante deste sujeito”, isso deverá ser um sinal de que
                  chegou o momento de uma rápida manobra neutralizadora: separe
                  mentalmente Vitor do carro que ele está tentando vender."
                </cite>
              </div>
            </div>
          </section>
          <section className={styles.index__section_4}>
            <div>
              <cite>
                "Nossa reação apropriada, então, é um esforço consciente para
                nos concentrarmos exclusivamente nos méritos do negócio e do
                carro que Vitor nos ofereceu. O reconhecimento da sensação de
                afeição indevida pelo profissional da persuasão deve nos servir
                de lembrete para que façamos a distinção entre o vendedor e o
                negócio em si, e para tomarmos a nossa decisão"
              </cite>
              <b>João Afonso</b>
            </div>
            <div>
              <img src="/images/juliano.jpg" alt="" />
            </div>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </Fragment>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default index;
