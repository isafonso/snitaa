import Head from "next/head";
import { Header, Footer } from "../components";
import styles from "../../public/css/about.module.css";
import { Fragment } from "react";

const sobre = () => {
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="RMINDR" />
        <link
          rel="shortcut icon"
          href="/images/favicon.jpg"
          type="image/x-icon"
        />
        <title>SNITAA</title>
      </Head>
      <div className={styles.about__container}>
        <Header></Header>
        <main>
          <div className={styles.divider}>
            <div></div>
            <h3>Quem somos?</h3>
            <div></div>
          </div>
          <section className={styles.about__section_1}>
            <div>
              <img src="/images/logo_main.jpg" alt="" />
            </div>
            <div>
              <b>19, dezembro 2022</b>
              <span>
                Poderia persegui-la até um lugar sossegado e depois esmagar seu
                crânio com uma pedra do calçamento. O pedaço de vidro que tinha
                no bolso já seria pesado o suficiente para o serviço. Só que foi
                obrigado a abandonar o plano na mesma hora, pois mesmo a ideia
                de fazer algum tipo de esforço físico lhe era insuportável. Não
                conseguia correr, e não seria capaz de atacar ninguém.
              </span>
            </div>
          </section>
          <section className={styles.about__section_2}>
            <div>
              <p>
                Poderia persegui-la até um lugar sossegado e depois esmagar seu
                crânio com uma pedra do calçamento. O pedaço de vidro que tinha
                no bolso já seria pesado o suficiente para o serviço. Só que foi
                obrigado a abandonar o plano na mesma hora, pois mesmo a ideia
                de fazer algum tipo de esforço físico lhe era insuportável.
              </p>
              <p>
                Poderia persegui-la até um lugar sossegado e depois esmagar seu
                crânio com uma pedra do calçamento. O pedaço de vidro que tinha
                no bolso já seria pesado o suficiente para o serviço. Só que foi
                obrigado a abandonar o plano na mesma hora, pois mesmo a ideia
                de fazer algum tipo de esforço físico lhe era insuportável. Não
                conseguia correr, e não seria capaz de atacar ninguém. Além do
                mais, ela era jovem e forte e trataria de defender-se. Pensou
                também em ir às pressas para o Centro Comunitário e ficar por lá
                até o lugar fechar, forjando assim um álibi parcial para aquela
                noite. Mas isso também era impossível. Uma lassidão mortal se
                apossara dele. A única coisa que Winston queria era voltar
                rapidamente para casa, sentar-se e ficar quietonumcanto.
              </p>
              <p>
                Poderia persegui-la até um lugar sossegado e depois esmagar seu
                crânio com uma pedra do calçamento. O pedaço de vidro que tinha
                no bolso já seria pesado o suficiente para o serviço. Só que foi
                obrigado a abandonar o plano na mesma hora, pois mesmo a ideia
                de fazer algum tipo de esforço físico lhe era insuportável. Não
                conseguia correr, e não seria capaz de atacar ninguém. Além do
                mais, ela era jovem e forte e trataria de defender-se.
              </p>
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

export default sobre;
