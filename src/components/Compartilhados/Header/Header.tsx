import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.Header}>
            <div className="Header__logo">
                <img src="/assets/Logo.svg" alt="Logo ecowatt" />
            </div>
            <button className={styles.Header__hamburger} onClick={toggleMenu}>
                <span className={styles.Header__hamburger_bar}></span>
                <span className={styles.Header__hamburger_bar}></span>
                <span className={styles.Header__hamburger_bar}></span>
            </button>
            <nav className={`${styles.Header__links} ${isMenuOpen ? styles.Header__links_open : ''}`}>
                <Link href="/">Home</Link>
                <a href="/#contato">Contato</a>
                <a href="/#faq">Faq</a>
                <a href="/Participantes">Participantes</a>
                {isMenuOpen && (
                    <div className={styles.Header__Login_Registro_mobile}>
                        <Link className={styles.Header__Entrar} href="/Login">Entrar</Link>
                        <Link className={styles.Header__Registro} href="/Registro">Crie sua conta</Link>
                    </div>
                )}
            </nav>
            
            <div className={styles.Header__Login_Registro}>
                <Link className={styles.Header__Entrar} href="/Login">Entrar</Link>
                <Link className={styles.Header__Registro} href="/Registro">Crie sua conta</Link>
            </div>
        </header>
    );
};

export default Header;
