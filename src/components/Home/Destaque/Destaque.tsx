import Link from "next/link"
import styles from "./Destaque.module.css"

const Destaque = () =>{
    return (
        <section className={styles.Destaque}>
            <img src="/assets/imgDestaque.svg" alt="Homem segurando uma lampada com o dinheiro do lado" />
            <div className={styles.Destaque__conteudo}>
                <h1>Comece a economizar energia hoje mesmo!</h1>
                <p>Com a EcoWatt, você tem acesso a dados em tempo real para ajustar seu consumo e reduzir seus custos com energia.</p>
                <Link className={styles.Destaque__botao} href="/Registro">economize já</Link>
            </div>

        </section>
    )
}

export default Destaque