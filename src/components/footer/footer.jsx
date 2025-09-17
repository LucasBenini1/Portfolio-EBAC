//import styles from './footer.module.css'

import Contato from "../contato/contato";
import RedesSociais from "../RedesSociais/redesSociais";
import styles from './footer.module.css'

export default function Footer(){
    return(
        <>  
            <div className={styles.container}>
                <Contato/>
                <RedesSociais/>
            </div>
        </>
    )
}