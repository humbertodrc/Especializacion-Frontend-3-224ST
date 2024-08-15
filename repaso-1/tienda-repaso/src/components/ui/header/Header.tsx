import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";

export const Header = () => {
  // Traemos la información del idioma utilizando useRouter()
  

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <figure>
          <Image src="/img/logo.png" alt="logo" width={50} height={50} />
        </figure>
        <div className={styles.appName}>
          <p>Tienda</p>
        </div>
      </div>
      <div className={styles.navbar}>
        <Link href="./">Productos Destacados</Link>
        <Link href="./tycs">Términos y condiciones</Link>
      </div>
      <div className={styles.localeSwitch}>
        {/* Mediante el atributo locale le indicamos a Next que idioma queremos utilizar al hacer la
          redirección
           */}
      </div>
    </header>
  );
};


