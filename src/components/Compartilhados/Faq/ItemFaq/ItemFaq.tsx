
import React, { useState } from 'react';
import styles from '../Faq.module.css'; 

interface ItemFAQProps {
    pergunta: string;
    resposta: string;
}

const ItemFAQ: React.FC<ItemFAQProps> = ({ pergunta, resposta }) => {
    const [estaAberto, setEstaAberto] = useState<boolean>(false);

    const alternarResposta = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault(); 
        setEstaAberto(!estaAberto);
    };

    return (
        <div className={styles.item_faq}>
            <div className={styles.pergunta_faq} onClick={alternarResposta}>
                <h3>{pergunta}</h3>
                <span className={`${styles.seta_faq} ${estaAberto ? styles.aberto : ''}`} tabIndex={-1}></span>
            </div>
            <div className={`${styles.resposta_faq} ${estaAberto ? styles.aberto : ''}`}>
                <p>{resposta}</p>
            </div>
        </div>
    );
};

export default ItemFAQ;
