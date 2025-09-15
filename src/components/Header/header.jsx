import { useContext } from 'react'
import styles from './header.module.css'
import UserContext from '../../context/UserContext'

function Header(){
    const {light, setLight} = useContext(UserContext)

    return(
    <>
        <div className={styles.container}>
                <nav className={styles.insideContainer}>
                    <ul>
                        <li>Serviços</li>
                        <li>Habilidades</li>
                        <li>Projetos</li>
                        <li>Formação</li>
                        <li>Contato</li>
                        <li onClick={() => setLight(!light)}>Trocar Tema</li>
                    </ul>
                </nav>
        </div>
    </>
    )
}

export default Header