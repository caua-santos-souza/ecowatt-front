'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './TrocarSenha.module.css';

const TrocarSenha = () => {
    const [cpf, setCpf] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [etapa, setEtapa] = useState(1); // 1: Verificar CPF, 2: Redefinir senha
    const [erro, setErro] = useState('');
    const [sucesso, setSucesso] = useState('');
    const apiUrl = 'http://localhost:8080/EcoWatt/api/clientes';
    const router = useRouter(); // Hook para redirecionamento

    const verificarCpf = async () => {
        setErro('');
        setSucesso('');
        try {
            const response = await fetch(`${apiUrl}/${cpf}`);
            if (response.ok) {
                setEtapa(2); // Avança para a etapa de redefinição de senha
            } else {
                setErro('CPF não encontrado. Verifique e tente novamente.');
            }
        } catch (error) {
            setErro('Erro ao verificar CPF. Tente novamente mais tarde.');
        }
    };

    const redefinirSenha = async () => {
        setErro('');
        setSucesso('');

        // Validação das senhas
        if (novaSenha !== confirmarSenha) {
            setErro('As senhas não coincidem.');
            return;
        }

        if (novaSenha === '') {
            setErro('A nova senha não pode ser vazia.');
            return;
        }

        try {
            // Requisição para a atualização da senha
            const response = await fetch(`${apiUrl}/${cpf}/senha`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ senha: novaSenha }), // Envia a nova senha no corpo
            });

            if (response.ok) {
                setSucesso('Senha redefinida com sucesso!');
                setCpf('');
                setNovaSenha('');
                setConfirmarSenha('');
                router.push('/Login'); // Redireciona para a página de login
            } else {
                setErro('Erro ao redefinir a senha. Tente novamente.');
            }
        } catch (error) {
            setErro('Erro ao redefinir a senha. Tente novamente mais tarde.');
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
                    {etapa === 1 ? (
                        <>
                            <h1>Recupere sua senha</h1>
                            <p>Digite o seu CPF para redefinir sua senha</p>
                        </>
                    ) : (
                        <>
                            <h1>Redefinir sua Senha</h1>
                            <p>Digite sua nova senha para efetuar login</p>
                        </>
                    )}
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        etapa === 1 ? verificarCpf() : redefinirSenha();
                    }}
                >
                    {etapa === 1 ? (
                        <input
                            className={styles.input__nome}
                            type="text"
                            placeholder="Seu CPF"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            required
                        />
                    ) : (
                        <>
                            <input
                                className={styles.input__senha}
                                type="password"
                                placeholder="Nova senha"
                                value={novaSenha}
                                onChange={(e) => setNovaSenha(e.target.value)}
                                required
                            />
                            <input
                                className={styles.input__senha}
                                type="password"
                                placeholder="Confirmar nova senha"
                                value={confirmarSenha}
                                onChange={(e) => setConfirmarSenha(e.target.value)}
                                required
                            />
                        </>
                    )}
                    <button type="submit">
                        {etapa === 1 ? 'Continuar' : 'Redefinir senha'}
                    </button>
                </form>
                {erro && <p className={styles.error}>{erro}</p>}
                {sucesso && <p className={styles.success}>{sucesso}</p>}
            </div>
        </div>
    );
};

export default TrocarSenha;
