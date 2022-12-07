import { Head } from "next/head";
import { Fragment } from "react";
import { Header, Footer } from "../../components";
import "../../css/newsId.css";

const noticiasId = ({ res }) => {
  return (
    <Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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
      <div class="newsId__container">
        <Header></Header>
        <main>
          <div class="divider">
            <div></div>
            <h3>Título da notícia</h3>
            <div></div>
          </div>
          <section class="newsId__section-1">
            <div>
              <img src="/images/logo_main.jpg" alt="" />
            </div>
            <div>
              <b>19, dezembro 2022</b>
              <h3>Título da notícia</h3>
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
          <section class="newsId__section-2">
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

export const getStaticPaths = async () => {
  const req = await fetch("http://localhost:3000/api/news/read", {
    method: "GET",
  });
  const res = await req.json();

  const paths = res.map((dt) => ({
    params: { id: dt.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const req = await fetch(`http://localhost:3000/api/news/read${params.id}`, {
    method: "GET",
  });
  console.log(await req.json());
  const res = await req.json();

  return {
    props: {
      res,
    },
    revalidate: 60,
  };
};
export default noticiasId;
