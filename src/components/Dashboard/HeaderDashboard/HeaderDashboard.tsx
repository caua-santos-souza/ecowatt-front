import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Header.module.css';

const HeaderDashboard = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Adicionando o estado para o menu

    const encerrarSessao = () => {
        // Remove as informações do localStorage
        localStorage.removeItem('logado');
        localStorage.removeItem('usuario');
        router.push('/'); // Redireciona para a página inicial
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu hambúrguer
    };

    return (
        <header className={styles.Header}>
            <div className="Header__logo">
                <img src="/assets/Logo.svg" alt="Logo ecowatt" />
            </div>

            {/* Botão hambúrguer */}
            <button className={styles.Header__hamburger} onClick={toggleMenu}>
                <span className={styles.Header__hamburger_bar}></span>
                <span className={styles.Header__hamburger_bar}></span>
                <span className={styles.Header__hamburger_bar}></span>
            </button>

            {/* Links - visíveis apenas no desktop */}
            <nav className={`${styles.Header__links} ${isMenuOpen ? styles.Header__links_open : ''}`}>
                <Link href="/dashboard">Pagina Principal</Link>
                <a href="/dashboard/duvidas">Dúvidas</a>
                <a href="/dashboard/usuario">Usuário</a>
            </nav>

            {/* Menu hambúrguer visível no mobile */}
            {isMenuOpen && (
                <nav className={styles.Header__links_open}>
                    <Link href="/dashboard">Pagina Principal</Link>
                    <a href="/dashboard/duvidas">Dúvidas</a>
                    <a href="/dashboard/usuario">Usuário</a>
                    
                    {/* Botão de encerrar sessão dentro do menu hambúrguer */}
                    <button className={styles.Header__Sair} onClick={encerrarSessao}>
                        Encerrar sessão
                    </button>
                </nav>
            )}

            <div className={styles.Header__Login_Registro}>
                <button className={styles.Header__Sair} onClick={encerrarSessao}>
                    Encerrar sessão
                </button>
            </div>
        </header>
    );
};

export default HeaderDashboard;
