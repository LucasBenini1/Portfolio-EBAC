import styles from './experiencia.module.css'

export default function Experiencia(){
    return(
        <>
            <div className={styles.container} id='experiencia'>
                <h3 className={styles.title}>Experiência <span className={styles.coloredText}>Profissional</span></h3>

            <div className={styles.itensContainer}>
                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <img src="https://media.licdn.com/dms/image/v2/D4D0BAQH9Ayi3APhlrQ/company-logo_200_200/B4DZUU_VtuHwAU-/0/1739813903564/autorolabrasil_logo?e=2147483647&v=beta&t=EgH4s_xpJsnSZoGgOhrgDvZ4ZsmVAbYngrDf2p_CDS4" alt="Imagem da empresa Autorola" className={styles.photo}/>
                        <div className={styles.itemHeaderTexts}>
                            <h4>Autorola</h4>
                            <p>Estagiário de TI</p>
                            <p><i>dez/2023 - abr/2024</i></p>
                        </div>
                    </div>

                    <ul className={styles.itemBody}>
                        <li>Operações sistêmicas</li>
                        <li>Implementação de soluções inovadoras que tornem processos mais ágeis e eficazes</li>
                        <li>Reuniões com a matriz dinamarquesa para relatórios e novas estratégias</li>
                        <li>Planilhas em Excel</li>
                        <li>Monitoramento de vendas e entrega de relatórios para empresas parceiras</li>
                    </ul>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <img src="https://img.myloview.com.br/adesivos/vector-logo-veterinaria-700-1791046.jpg" alt="Imagem de medicina veterinaria" className={styles.photo}/>
                        <div className={styles.itemHeaderTexts}>
                            <h4>Fisioterapeuta Animal</h4>
                            <p>Desenvolvedor de Front-End - Freelancer</p>
                            <p><i>mai/2025</i></p>
                        </div>
                    </div>
                    <ul className={styles.itemBody}>
                        <li>Responsável pelo design e desenvolvimento da landing page, com foco em interface amigável e boa experiência de usuário.</li>
                        <li>A identidade visual foi construída com cores claras e fontes sem serifa, transmitindo leveza e acessibilidade.</li>
                        <li>Boas práticas de SEO foram aplicadas visando ampliar a visibilidade da clínica e atrair novos atendimentos.</li>
                        <li>O primeiro escopo foi entregue em menos de 48 horas.</li>
                        <li>Tecnologias utilizadas: HTML, CSS, JavaScript e Gulp.</li>
                    </ul>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemHeader}>
                        <img src="/apenas-img-blink.png" alt="Imagem da empresa blink" className={styles.photoBlink}/>
                        <div className={styles.itemHeaderTexts}>
                            <h4>Blink</h4>
                            <p>Desenvolvedor de Front-End</p>
                            <p><i>mai/2025 - Atual</i></p>
                        </div>
                    </div>
                    <ul className={styles.itemBody}>
                        <li>Desenvolvimento front-end de SaaS utilizando Next.js e TypeScript para criar uma interface responsiva e fácil de usar;</li>
                        <li>Colaboração com o backend para implementar funcionalidades principais e garantir a consistência do fluxo de dados;</li>
                        <li>Design UI/UX com foco em paletas de cores claras para melhorar a legibilidade e estética moderna;</li>
                        <li>Controle de versão utilizando Git Flow para manter um fluxo de desenvolvimento limpo e estruturado;</li>
                        <li>Reuniões semanais com a equipe para alinhar metas, resolver bloqueios e acompanhar o progresso;</li>
                        <li>Interface completa e funcionalidades principais entregues em uma semana, garantindo alto desempenho e usabilidade.</li>
                    </ul>
                </div>
            </div>

            </div>
        </>
    )
}