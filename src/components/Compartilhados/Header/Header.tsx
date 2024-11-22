import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className="Header__logo">
                <img src="/assets/Logo.svg" alt="Logo ecowatt" />
            </div>
            <nav className={styles.Header__links}>
                <Link href="/">Home</Link>
                <a href='/#contato'>Contato</a>
                <a href='/#faq'>Faq</a>
                <a href='/Participantes'>Participantes</a>
            </nav>
            <div className={styles.Header__Login_Registro}>
                <Link className={styles.Header__Entrar} href="/Login">Entrar</Link>
                <Link className={styles.Header__Registro} href="/Registro">Crie sua conta</Link>
            </div>
        </header>
    )
}

export default Header;
