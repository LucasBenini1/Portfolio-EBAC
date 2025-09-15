import { useContext } from 'react'
import styles from './hero.module.css'
import UserContext from '../../context/UserContext'
import FotoHero from '../../img/Foto-hero.jpeg';
import Technologies from '../technologies/technologies';


export default function Hero (){
    const {light} = useContext(UserContext)

    
    
    return(
        <>
            <div className={styles.bigContainer}>
                <div className={light ? styles.upperContainer : styles.containerDark}>
                    <div className={styles.content}>
                        <h1 className={light ? styles.title : styles.titleDark}>Desenvolvedor Front-End</h1>
                        <h3 className={light ? styles.subTitle : styles.subtitleDark}>Lucas Benini</h3>
                        <p className={styles.paragraph}>Desenvolvedor Front-End em formação pela EBAC – Escola Britânica de Artes Criativas e Tecnologia, com graduação em Sistemas de Informação pela Universidade Anhembi Morumbi.</p>
                        <button className={styles.buttons}>Download Currículo</button>
                        <button className={styles.buttons}>
                            LinkedIn
                        </button>
                        <p>São Paulo / SP - Brasil</p>
                    </div>

                    <div className={styles.heroPhotoContainer}>
                        <img src={FotoHero} alt="Foto de perfil de Lucas Benini" className={styles.photo}/>
                    </div>
                </div>

                <div className={styles.lowerContainer}>
                    <Technologies/>
                </div>
            </div>
        </>
    )
}