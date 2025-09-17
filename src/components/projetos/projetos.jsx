import Card from '../Card/Card'
import styles from './projetos.module.css'

export default function Projetos(){

    const projetos = [
        {
        src: "https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2024-05/How-to-watch-Partner-FTRs-%28Disney%2B%29.jpg.webp?itok=IskYvWMX",
        titulo: "Clone Disney+",
        descricaoS: "Projeto realizado pela EBAC",
        descricaoL: "Cópia de layout do site Disney +. Projeto realizado à fins acadêmicos para estudo de responsividade e organização de layout. Feito com HTML, SCSS e JavaScript.",
        link: 'https://github.com/LucasBenini1/Clone_Disney-.git'
        },
        {
        src: "https://unifor.br/documents/392172/562305/pesquisa+unifor+-+IA+desempenho+futebol+-+800+-+GETTY.png/b88a9c2a-7444-6e10-a022-e2fe1a4a89b7?t=1752521028455",
        titulo: "Analise de Times",
        descricaoS: "Projeto realizado pela Universidade Anhembi Morumbi",
        descricaoL: "Análise de períodos do Campeonato Brasileiro utilizando Python e bibliotecas especializadas. Projeto desenvolvido para estudo de algoritmos, organização em clusters e geração de gráficos.",
        link: 'https://github.com/LucasBenini1/Analise_Times.git'
        },
        {
        src: "https://projetodesenvolve.online/asset-v1:ProjetoDesenvolve+JS1+01+type@asset+block@1628644950-javascript.png",
        titulo: "JavaScript Quiz",
        descricaoS: "Projeto realizado por fins de estudo de lógica de programação",
        descricaoL: "Quiz de JavaScript feito com HTML, SCSS e JavaScript. 10 perguntas com indicador de acerto / erro e contagem de perguntas corretas.",
        link: 'https://github.com/LucasBenini1/Quiz_JS.git'
        },
 
    ]

    return(
        <>
        <div className={styles.container} id='projetos'>
            <h3 className={styles.title}>Projetos <span className={styles.coloredText}>Pessoais</span></h3>

            <div className={styles.itens}>
                {projetos.map((item) => (
                    <Card key={item.titulo}
                    src={item.src}
                    titulo={item.titulo} 
                    descricaoL={item.descricaoL} 
                    descricaoS={item.descricaoS}
                    link={item.link} />
                ))}
            </div>
            <button className={styles.button}>
                <a href=" https://github.com/LucasBenini1" 
                className={styles.githubBtn} 
                target='_blank'>
                Veja mais no GitHub</a>
            </button>
        </div>

        </>
    )
}