import styles from './resumo.module.css'

export default function Resumo(){
    return(
        <>
        <div className={styles.container}>
            <h3>Resumo das <span className={styles.coloredText}>Qualificações</span></h3>
            <div className={styles.paragraphs}>
                <p className={styles.firstParagraph}>
                    Desenvolvedor Front-End em formação pela EBAC – Escola Britânica de Artes Criativas e Tecnologia, 
                    com <strong>graduação</strong> em Sistemas de Informação pela Universidade Anhembi Morumbi (Dez/2024).
                    Experiência como freelancer, com participação ativa em projetos reais de clientes 
                    como um SaaS para clínicas odontológicas, onde colaboro com uma equipe de back-end,
                    design e desenvolvimento de landing page.  
                    Desenvolvimento de  projetos, como uma to-do list em React com funcionalidades de editar, 
                    salvar e excluir tarefas, uma análise de uma database csv com Python, exercícios de compartilhamento 
                    de estado com Redux e Context API, estilização com SCSS, LESS e Styled-Components. 
                </p>
                <p className={styles.secondParagraph}>
                    Consumo e manipulação de dados de APIs e entre outros exercícios que fortaleceram a 
                    minha lógica de programação. Focado na construção de interfaces modernas, responsivas 
                    e também na performance e usabilidade.
                    Possuo perfil comunicativo, proativo e orientado à solução de problemas, com facilidade 
                    de trabalho em equipe e adaptação a novas tecnologias.
                </p>
            </div>
            <ul className={styles.habilitiesList}>
                <li>Inglês Avançado c/ experiência profissional.</li>
                <li>Habilidades em HTML5, CSS3, JavaScript ES6, TypeScript, React, SCSS, LESS, Git,
                     Bootstrap, Styled-Components e Criação de Interfaces.</li>
                <li>Conhecimentos em Automação de Tarefas, Next, Vue, POO, Tailwind, Vercel e Acessibilidade Web.</li>
                <li>Noções de Angular e Python.</li>
            </ul>
        </div>
        </>
    )
}