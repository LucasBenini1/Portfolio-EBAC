import { useState } from 'react'
import styles from './header.module.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.container}>
      <nav className={`${styles.insideContainer} ${isOpen ? styles.active : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#qualificacoes">Qualificações</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#github">GitHub</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      <div
        className={styles.menuHamburguer}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
    </div>
  )
}

export default Header
