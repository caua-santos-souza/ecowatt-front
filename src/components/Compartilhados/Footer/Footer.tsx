import React from 'react';
import styles from './Footer.module.css'; 

const Footer: React.FC = () => {
    return (
        <footer id={styles.rodape}>
            <div className={styles.rodape__logos}>
                <img 
                    src="/assets/ultragaz.svg" 
                    alt="logo ultragaz" 
                    className={styles.rodape__logo}
                    id={styles.Logo__porto}
                />
                <img 
                    src="/assets/EcoWattFotter.svg" 
                    alt="logo ecowatt" 
                    className={styles.rodape__logo} 
                />
                <img 
                    src="/assets/Fiap.svg" 
                    alt="logo Fiap" 
                    className={styles.rodape__logo} 
                />
            </div>
            <p className={styles.rodape__texto}>
                © 2024 EcoWatt. Todos os direitos reservados. Serviço de Monitoramento gratuito. Conteúdo sujeito a disponibilidade.
            </p>
            <p className={styles.rodape__texto}>
                EcoWatt é um projeto acadêmico gratuito desenvolvido por estudantes. Para saber mais<br /> sobre este projeto, entre em contato conosco.
            </p>
        </footer>
    );
};

export default Footer;
