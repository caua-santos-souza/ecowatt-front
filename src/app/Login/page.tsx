'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Login.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Verifica se os campos não estão vazios
        if (!email || !senha) {
            setMessage('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/EcoWatt/api/clientes/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });

            if (response.ok) {
                const userData = await response.json();
                // Salvar as informações do usuário no localStorage
                localStorage.setItem('logado', 'sim');
                localStorage.setItem('usuario', JSON.stringify(userData));

                // Redireciona para o Dashboard
                router.push('/dashboard');
            } else {
                const errorData = await response.text();
                setMessage(`Erro: ${errorData}`);
            }
        } catch (error) {
            setMessage('Erro ao realizar login.');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageSide}>
                <div className={styles.texto__img}>
                    <h1>EcoWatt</h1>
                    <p>Inteligência Energética para um Futuro Sustentável</p>
                </div>
            </div>
            <div className={styles.formSide}>
                <div className={styles.Login__texto}>
                    <h1>Olá Novamente!</h1>
                    <p>Bem-vindo de volta</p>
                </div>
                <form onSubmit={handleLogin}>
                    <input
                        className={styles.input__email}
                        type="email"
                        placeholder="Endereço de email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className={styles.input__senha}
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                    <button type="submit">Entrar</button>
                    {message && <p className={styles.error}>{message}</p>}
                    <a href="/TrocarSenha">Esqueceu sua senha?</a>
                    <p>
                        Ainda não tem uma conta? <a href="/Registro">Inscreva-se aqui</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
