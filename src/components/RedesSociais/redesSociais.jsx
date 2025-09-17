import styles from './redesSociais.module.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function RedesSociais() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <a
          href="https://www.instagram.com/lucasbenini_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className={styles.icon} />
        </a>
      </div>
      <div className={styles.item}>
        <a
          href="https://www.linkedin.com/in/lucasbenini"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={styles.icon} />
        </a>
      </div>
    </div>
  );
}
