import styles from './hero.module.css'
import FotoHero from '../../../public/Foto-Hero.jpeg';
import Technologies from '../technologies/technologies';


export default function Hero (){

    return(
        <>
            <div className={styles.bigContainer} id='home'>
                <div className={styles.upperContainer}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Desenvolvedor Fullstack</h1>
                        <h3 className={styles.subTitle}>Lucas Benini</h3>
                        <p className={styles.paragraph}>Desenvolvedor Fullstack em formação pela EBAC – Escola Britânica de Artes Criativas e Tecnologia, com graduação em Sistemas de Informação pela Universidade Anhembi Morumbi.</p>
                        <button className={styles.buttons}>
                            <a href="/curriculum.pdf" download>Download Currículo</a>
                        </button>
                        <button className={styles.buttons}>
                            <a href="http://www.linkedin.com/in/lucasbenini" 
                            target='_blank' 
                            className={styles.linkedin}>
                            LinkedIn</a>
                        </button>
                        <p className={styles.city}>São Paulo / SP - Brasil</p>
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