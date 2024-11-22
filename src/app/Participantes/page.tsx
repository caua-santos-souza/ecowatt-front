'use client'
import Header from '@/components/Compartilhados/Header/Header';
import React from 'react';
import styles from './sobrenos.module.css'


const Participantes: React.FC = () => {
    return (
        <div>
            <Header />
            <div className={styles.Titulo__Particpantes}>
                <h1>Participantes</h1>
            </div>
            <section id={styles.sectionParticipantes}>
                <div className={styles.integrante}>
                    <img src='/assets/integrante1.png' alt="Integrante 1" />
                    <h3>Cauã Dos Santos Souza</h3>
                    <p>RM: 559093</p>
                    <p>Email: <a href="mailto:cauadosantosouza@gmail.com">cauadosantosouza@gmail.com</a></p>
                    <p>Redes Sociais: 
                        <a href="https://www.instagram.com/cauagsz/?hl=fb-ha" target="_blank" rel="noopener noreferrer">Instagram</a> / 
                        <a href="https://www.linkedin.com/in/cau%C3%A3-dos-santos-souza-2457b9268/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </p>
                </div>
                <div className={styles.integrante}>
                    <img src='/assets/integrante2.png' alt="Integrante 2" />
                    <h3>Luigi Berzaghi Hernandes Sespedes</h3>
                    <p>RM: 555516</p>
                    <p>Email: <a href="mailto:ilbhsg520741778@gmail.com">ilbhsg520741778@gmail.com</a></p>
                    <p>Redes Sociais: 
                        <a href="https://www.instagram.com/luigi.berzaghi/?hl=fb-ha" target="_blank" rel="noopener noreferrer">Instagram</a> / 
                        <a href="https://www.linkedin.com/in/luigi-berzaghi/?originalSubdomain=br" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </p>
                </div>
                <div className={styles.integrante}>
                    <img src='/assets/integrante3.png' alt="Integrante 3" />
                    <h3>Guilherme Pelissari Feitosa</h3>
                    <p>RM: 558445</p>
                    <p>Email: <a href="mailto:guipelissari2000@gmail.com">guipelissari2000@gmail.com</a></p>
                    <p>Redes Sociais: 
                        <a href="https://www.instagram.com/guipelissari/" target="_blank" rel="noopener noreferrer">Instagram</a> / 
                        <a href="https://www.linkedin.com/in/guilherme-pelissari-307472312/overlay/about-this-profile/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Participantes;
