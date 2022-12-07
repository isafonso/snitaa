import React from "react";
import styles from "../../public/css/index.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h2>Nossos contactos</h2>
        <a href="mailto:nzumbindyavula@gmail.com">nzumbindyavula@gmail.com</a>
        <a href="tel:+244930375513">+244930375513</a>
      </div>
      <div>
        <h2>Nossos localização</h2>
        <address>
          <span>Angola, Luanda, Maianga</span>
        </address>
      </div>
      <div>
        <h2>Nossos redes sociais</h2>
      </div>
    </footer>
  );
};

export default Footer;
