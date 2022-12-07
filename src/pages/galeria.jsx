import Head from "next/head";
import { Fragment } from "react";
import { Header, Footer } from "../components";
import styles from "../../public/css/gallery.module.css";

const galeria = () => {
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
      <div class={styles.galeria__container}>
        <Header></Header>
        <main>
          <div class={styles.divider}>
            <div></div>
            <h3>Galeria de fotos</h3>
            <div></div>
          </div>
          <section class={styles.galeria__section}>
            <div>
              <img src="/images/logo_main.jpg" alt="" />
            </div>
            <div>
              <img src="/images/logo_main.jpg" alt="" />
            </div>
            <div>
              <img src="/images/logo_main.jpg" alt="" />
            </div>
            <div>
              <img src="/images/logo_main.jpg" alt="" />
            </div>
            <div>
              <img src="/images/logo_main.jpg" alt="" />
            </div>
            <div>
              <img src="/images/logo_main.jpg" alt="" />
            </div>
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

export default galeria;
