import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiSass, SiLess, SiGit, SiBootstrap, SiStyledcomponents, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import styles from './technologies.module.css'

export default function Technologies(){
        return(
            <>
                <div className={styles.container}>
                    <SiHtml5/>
                    <SiCss3/>
                    <SiJavascript/>
                    <SiTypescript/>
                    <SiReact/>
                    <SiGit/>
                    <SiBootstrap/>
                    <SiStyledcomponents/>
                    <SiNextdotjs/>
                    <SiSass/>
                    <SiLess/>
                    <SiTailwindcss/>
                </div>  
            </>
        )
    }