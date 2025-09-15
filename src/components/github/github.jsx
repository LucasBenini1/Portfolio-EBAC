import { useEffect, useState } from 'react'
import styles from './github.module.css'

export default function Github(){
    const [data, setData] = useState([])

    useEffect(() => {
        async function buscaData(){
            try{
                const response = await fetch("https://api.github.com/users/LucasBenini1")
                const dados = await response.json()
                console.log({dados})
                setData(dados)
            }catch(e){
                console.error(e)
            }
        }
        buscaData()
    }, [])
    

    return(
        <>
        <h1 className={styles.title}>Github <span className={styles.coloredText}>Status</span></h1>
        <div className={styles.container}>
            <div className={styles.photoContainer}>
                <img src={data.avatar_url} alt="Minha imagem de perfil do Github" className={styles.photo}/>
            </div>
            <h3 className={styles.login}>{data.login}</h3>
            <p className={styles.description}>{data.bio}</p>
            <div className={styles.followItens}>
                <div className={styles.followers}>
                    <h3>Seguidores</h3>
                    <span>{data.followers}</span>
                </div>
                <div className={styles.following}>
                    <h3>Seguindo</h3>
                    <span>{data.following}</span>
                </div>
            </div>
            <div className={styles.moreInfo}>
                <p>Repositórios: {data.public_repos}</p>
                <p>
                Último Commit:{" "}
                {new Date(data.updated_at).toLocaleString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                })}
                </p>
            </div>

        </div>
        </>
    )
}