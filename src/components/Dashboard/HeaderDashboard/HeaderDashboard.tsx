import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Header.module.css';

const HeaderDashboard = () => {
    const router = useRouter();

    const encerrarSessao = () => {
        // Remove as informações do localStorage
        localStorage.removeItem('logado');
        localStorage.removeItem('usuario');
        router.push('/'); // Redireciona para a página inicial
    };

    return (
        <header className={styles.Header}>
            <div className="Header__logo">
                <img src="/assets/Logo.svg" alt="Logo ecowatt" />
            </div>
            <nav className={styles.Header__links}>
                <Link href="/dashboard">Pagina Principal</Link>
                <a href="/dashboard/duvidas">Dúvidas</a>
                <a href="/dashboard/usuario">Usuário</a>
            </nav>
            <div className={styles.Header__Login_Registro}>
                <button
                    className={styles.Header__Sair}
                    onClick={encerrarSessao}
                >
                    Encerrar sessão
                </button>
            </div>
        </header>
    );
};

export default HeaderDashboard;
