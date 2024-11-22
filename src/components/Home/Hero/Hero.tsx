import Link from "next/link"
import styles from "./Hero.module.css"
const hero = () => {
    return (
        <section className={styles.Hero}>
            <div className={styles.Hero__conteudo}>
                <h1>Energia Inteligente para um Futuro Sustentável</h1>
                <p>Nossas soluções de monitoramento e gestão energética são desenvolvidas para empresas e pessoas que desejam economizar enquanto fazem sua parte pelo planeta. Com a EcoWatt, você otimiza o uso de energia, reduz gastos e participa ativamente da construção de um amanhã mais sustentável.</p>
                <Link className={styles.Hero__botao} href="/Login">Comece a Economizar </Link>
            </div>
            
            <img className={styles.hero__img} src="/assets/ImgHero.svg" alt="foto painel solar" />
            
        </section>
    )
}

export default hero