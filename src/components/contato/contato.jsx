import styles from './contato.module.css'
import { FiPhone, FiMail } from "react-icons/fi";

export default function Contato(){
    return(
        <>
            <div className={styles.container}>
                <h3 className={styles.title}>Contato</h3>
                <div className={styles.itens}>
                    <div className={styles.item}>
                        <div className={styles.itemHeader}>
                            <FiPhone/>
                            <h4>Telefone</h4>
                        </div>
                        <p>+55 (11) 98340-1004</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemHeader}>
                            <FiMail/>
                            <h4>E-mail</h4>
                        </div>
                        <p>lucasbenini.dvlp@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}