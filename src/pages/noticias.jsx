import Head from "next/head";
import { Header, Footer } from "../components";
import styles from "../../public/css/news.module.css";
import { Fragment } from "react";

const noticias = () => {
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
      <div className={styles.news__container}>
        <Header></Header>
        <main>
          <div className={styles.divider}>
            <div></div>
            <h3>Últimas notícias</h3>
            <div></div>
          </div>
          <section className={styles.news__section_1}>
            <a href="/" target="_self">
              <img src="/images/logo_main.jpg" alt="" />
              <b>19, dezembro 2022</b>
              <h3>Título da notícia</h3>
              <span>
                “E costumava acontecer —só estou falando oque li nos livros de
                história —, era comum que essas pessoas e seus empregados
                abrissem caminho na calçada empurrando vocês para a sarjeta?”
              </span>
            </a>
            <div>
              <a href="/" target="_self">
                <img src="/images/logo_main.jpg" alt="" />
                <div>
                  <b>19, dezembro 2022</b>
                  <h3>Título da notícia</h3>
                </div>
              </a>
              <a href="/" target="_self">
                <img src="/images/logo_main.jpg" alt="" />
                <div>
                  <b>19, dezembro 2022</b>
                  <h3>Título da notícia</h3>
                </div>
              </a>
              <a href="/" target="_self">
                <img src="/images/logo_main.jpg" alt="" />
                <div>
                  <b>19, dezembro 2022</b>
                  <h3>Título da notícia</h3>
                </div>
              </a>
            </div>
          </section>
          <div className={styles.divider}>
            <div></div>
            <h3>Mais notícias</h3>
            <div></div>
          </div>
          <section className={styles.news__section_2}>
            <a href="/" target="_self">
              <img src="/images/juliano.jpg" alt="" />
              <b>19, dezembro 2022</b>
              <h3>Título da notícia</h3>
              <span>
                “Teve uma vez que me empurraram”, disse o velho. “Lembro como se
                fosse ontem. Foi na noite da Boat Race* —trombei comumrapaz na
                avenida Shaftesbury. Eu estava na maior estica: camisa social,
                cartola, sobretudo preto.
              </span>
            </a>
            <a href="/" target="_self">
              <img src="/images/juliano.jpg" alt="" />
              <b>19, dezembro 2022</b>
              <h3>Título da notícia</h3>
              <span>
                “Teve uma vez que me empurraram”, disse o velho. “Lembro como se
                fosse ontem. Foi na noite da Boat Race* —trombei comumrapaz na
                avenida Shaftesbury. Eu estava na maior estica: camisa social,
                cartola, sobretudo preto.
              </span>
            </a>
            <a href="/" target="_self">
              <img src="/images/juliano.jpg" alt="" />
              <b>19, dezembro 2022</b>
              <h3>Título da notícia</h3>
              <span>
                “Teve uma vez que me empurraram”, disse o velho. “Lembro como se
                fosse ontem. Foi na noite da Boat Race* —trombei comumrapaz na
                avenida Shaftesbury. Eu estava na maior estica: camisa social,
                cartola, sobretudo preto.
              </span>
            </a>
            <a href="/" target="_self">
              <img src="/images/juliano.jpg" alt="" />
              <b>19, dezembro 2022</b>
              <h3>Título da notícia</h3>
              <span>
                “Teve uma vez que me empurraram”, disse o velho. “Lembro como se
                fosse ontem. Foi na noite da Boat Race* —trombei comumrapaz na
                avenida Shaftesbury. Eu estava na maior estica: camisa social,
                cartola, sobretudo preto.
              </span>
            </a>
            <a href="/" target="_self">
              <img src="/images/juliano.jpg" alt="" />
              <b>19, dezembro 2022</b>
              <h3>Título da notícia</h3>
              <span>
                “Teve uma vez que me empurraram”, disse o velho. “Lembro como se
                fosse ontem. Foi na noite da Boat Race* —trombei comumrapaz na
                avenida Shaftesbury. Eu estava na maior estica: camisa social,
                cartola, sobretudo preto.
              </span>
            </a>
            <a href="/" target="_self">
              <img src="/images/juliano.jpg" alt="" />
              <b>19, dezembro 2022</b>
              <h3>Título da notícia</h3>
              <span>
                “Teve uma vez que me empurraram”, disse o velho. “Lembro como se
                fosse ontem. Foi na noite da Boat Race* —trombei comumrapaz na
                avenida Shaftesbury. Eu estava na maior estica: camisa social,
                cartola, sobretudo preto.
              </span>
            </a>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </Fragment>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default noticias;
