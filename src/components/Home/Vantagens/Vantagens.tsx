import { Span } from 'next/dist/trace'
import styles from './Vantagens.module.css'

const Vantagens = () =>{
    return (
        <section className={styles.Vantagens}>
            <h1 className={styles.Titulo__vantagens}>Como Ajudamos Você a <br /> <span>Economizar Energia ?</span></h1>
            <div className={styles.vantagens__conteudos}>
                <div className={styles.card__vantagens}>
                    <h2>Contribua para um Futuro Sustentável</h2>
                    <img src="/assets/monitoramento.svg" alt="grafico de barras" />
                    <p>Veja o impacto positivo da sua escolha, reduzindo emissões e economizando energia com carros elétricos e painéis solares.</p>
                </div>
                <div className={styles.card__vantagens}>
                    <h2>Avisos sobre Sustentabilidade</h2>
                    <img src="/assets/alertas.svg" alt="placa de alerta" />
                    <p>Descubra como os carros elétricos e os painéis solares podem reduzir seus custos e impactar positivamente o meio ambiente.</p>
                </div>
                <div className={styles.card__vantagens}>
                    <h2>Análise de Economia de energia</h2>
                    <img src="/assets/economia.svg" alt="mão com dinheiro" />
                    <p>Acompanhe seu consumo energético ao vivo e saiba exatamente onde é possível economizar.</p>
                </div>
                <div className={styles.card__vantagens}>
                    <h2>Painel de Controle Interativo</h2>
                    <img src="/assets/painelControle.svg" alt="imagem de um Painel interativo" />
                    <p>Acesse uma interface intuitiva para gerenciar o uso de energia de forma eficiente e personalizada.</p>
                </div>
            </div>
        </section>
    )
}

export default Vantagens