'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './usuario.module.css';
import HeaderDashboard from '@/components/Dashboard/HeaderDashboard/HeaderDashboard';

interface Cliente {
    nome: string;
    email: string;
    senha: string;
}

const UsuarioInfo = () => {
    const [usuario, setUsuario] = useState<Cliente | null>(null);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [isLoading, setIsLoading] = useState(true); // Indicador de carregamento
    const [isEditing, setIsEditing] = useState(false); // Modo de edição
    const router = useRouter();

    const apiUrl = 'http://localhost:8080/EcoWatt/api/clientes';

    // Função para obter dados do localStorage com verificação de ambiente
    const getLocalStorageItem = (key: string) => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(key);
        }
        return null;
    };

    const cpf = JSON.parse(getLocalStorageItem('usuario') || '{}')?.cpf ?? '';

    useEffect(() => {
        const logado = getLocalStorageItem('logado');
        if (logado !== 'sim') {
            router.push('/Login');
        } else if (cpf) {
            fetch(`${apiUrl}/${cpf}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Erro ao carregar as informações do usuário');
                    }
                    return response.json();
                })
                .then((data) => {
                    setUsuario(data);
                    setNome(data.nome);
                    setEmail(data.email);
                    setSenha(data.senha);
                    setIsLoading(false);
                })
                .catch((error) => {
                    setErro('Erro ao carregar as informações do usuário');
                    setIsLoading(false);
                    console.error(error);
                });
        } else {
            setErro('CPF não encontrado no localStorage');
            setIsLoading(false);
        }
    }, [router, cpf]);

    const atualizarInfo = () => {
        const updatedUser = { nome, email, senha };

        fetch(`${apiUrl}/${cpf}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then((response) => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Erro ao atualizar as informações');
            })
            .then((text) => {
                if (text === '1' || text.trim() === '') {
                    alert('Informações atualizadas com sucesso!');
                    setUsuario(updatedUser);
                    setIsEditing(false);
                } else {
                    throw new Error('Falha na atualização do cliente');
                }
            })
            .catch((error) => {
                alert('Erro ao atualizar as informações');
                console.error('Erro ao atualizar as informações:', error);
            });
    };

    const excluirUsuario = () => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir sua conta?');
        if (confirmDelete) {
            fetch(`${apiUrl}/${cpf}`, {
                method: 'DELETE',
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Erro ao excluir o usuário');
                    }
                    alert('Usuário excluído com sucesso!');
                    localStorage.removeItem('usuario');
                    localStorage.removeItem('logado');
                    router.push('/');
                })
                .catch((error) => {
                    alert('Erro ao excluir o usuário');
                    console.error(error);
                });
        }
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    if (isLoading) {
        return <div className={styles.loading}>Carregando...</div>;
    }

    return (
        <>
            <HeaderDashboard />
            <div className={styles.container}>
                <h1 className={styles.title}>Informações do Usuário</h1>

                {erro && <p className={styles.error}>{erro}</p>}

                {usuario ? (
                    <form className={styles.form}>
                        <div>
                            <label className={styles.label}>Nome:</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                disabled={!isEditing}
                            />
                        </div>
                        <div>
                            <label className={styles.label}>Email:</label>
                            <input
                                className={styles.input}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={!isEditing}
                            />
                        </div>
                        <div>
                            <label className={styles.label}>Senha:</label>
                            <input
                                className={styles.input}
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                disabled={!isEditing}
                            />
                        </div>

                        {!isEditing ? (
                            <button
                                className={styles.button}
                                type="button"
                                onClick={handleEditClick}
                            >
                                Editar
                            </button>
                        ) : (
                            <div className={styles.buttonContainer}>
                                <button
                                    className={styles.button}
                                    type="button"
                                    onClick={atualizarInfo}
                                >
                                    Salvar
                                </button>
                                <button
                                    className={styles.button}
                                    type="button"
                                    onClick={handleCancelClick}
                                >
                                    Cancelar
                                </button>
                                <button
                                    className={`${styles.button} ${styles.redButton}`}
                                    type="button"
                                    onClick={excluirUsuario}
                                >
                                    Excluir Conta
                                </button>
                            </div>
                        )}
                    </form>
                ) : (
                    <p>Carregando informações do usuário...</p>
                )}
            </div>
        </>
    );
};

export default UsuarioInfo;
