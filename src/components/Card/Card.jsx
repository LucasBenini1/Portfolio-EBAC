import styles from './Card.module.css'

export default function Card({src, titulo, descricaoS, descricaoL, link}){
    return(
        <>  
            <div className={styles.container}>
                <img src={src} alt="Imagem do projeto" className={styles.photo}/>
                <h4 className={styles.title}>{titulo}</h4>
                <span className={styles.descriptionS}>{descricaoS}</span>
                <p className={styles.descriptionL}>{descricaoL}</p>
                <p className={styles.link}>{link}</p>
            </div>
        </>
    )
}