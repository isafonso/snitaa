import React from "react";
import styles from "../../public/css/index.module.css";

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/galeria">Galeria</a>
          </li>
          <li>
            <a href="/noticias">Notícias</a>
          </li>
          <li>
            <a href="">Biblioteca</a>
          </li>
          <li>
            <a href="/sobre">Quem somos nós?</a>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
