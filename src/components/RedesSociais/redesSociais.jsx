import styles from './redesSociais.module.css'

export default function RedesSociais(){
    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Redes <span className={styles.coloredText}>Sociais</span></h1>

                <div className={styles.item}>
                    <h5>Instagram</h5>
                </div>
                <div className={styles.item}>
                    <h5>LinkedIn</h5>
                </div>
            </div>

        </>
    )
}