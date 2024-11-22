import React from 'react';
import ItemFAQ from './ItemFaq/ItemFaq';
import styles from './Faq.module.css';

const FAQ: React.FC = () => {
    return (
        <div className={styles.faq} id='faq'>
            <h1 className={styles.faq__titulo}>
                Podemos te ajudar? Tire suas dúvidas aqui
            </h1>
            <ItemFAQ 
                pergunta="Como os painéis solares ajudam a reduzir a sua conta de energia?" 
                resposta="Os painéis solares geram energia elétrica a partir da luz do sol, reduzindo a necessidade de comprar energia da rede elétrica, o que pode diminuir significativamente sua conta de energia."
            />
            <ItemFAQ 
                pergunta="Quais são as vantagens de ter um carro elétrico em comparação com um carro a gasolina?" 
                resposta="Os carros elétricos são mais eficientes, emitem menos poluentes e são mais baratos de manter, pois não precisam de combustível e têm custos de manutenção menores."
            />
            <ItemFAQ 
                pergunta="Posso integrar meu sistema de painéis solares com o carregamento de carros elétricos?" 
                resposta="Sim! Integrar seus painéis solares com o carregamento de um carro elétrico é uma excelente maneira de tornar o uso do seu veículo ainda mais sustentável e econômico."
            />
            <ItemFAQ 
                pergunta="Como a EcoWatt contribui para um futuro mais sustentável?" 
                resposta="A EcoWatt promove a utilização de fontes de energia renováveis, como a solar, e fornece soluções de monitoramento que ajudam a reduzir o consumo e o desperdício de energia, criando um impacto positivo no meio ambiente."
            />
            <ItemFAQ 
                pergunta="É possível monitorar o consumo de energia de um carro elétrico?" 
                resposta="Sim! Você pode monitorar o consumo de energia do seu carro elétrico, ver a eficiência de carga e otimizar os horários de recarga para aproveitar a energia solar gerada durante o dia."
            />
            <ItemFAQ 
                pergunta="Os painéis solares podem fornecer energia suficiente para a minha casa e meu carro elétrico?" 
                resposta="Sim, dependendo do tamanho do seu sistema de painéis solares, é possível gerar energia suficiente para abastecer sua casa e carregar seu carro elétrico de forma eficiente."
            />
            <ItemFAQ 
                pergunta="Quais são os benefícios ambientais de usar energia solar e carros elétricos?" 
                resposta="Usar energia solar e carros elétricos reduz a emissão de gases de efeito estufa, diminui a dependência de combustíveis fósseis e contribui para a conservação dos recursos naturais."
            />
        </div>
    );
};

export default FAQ;
