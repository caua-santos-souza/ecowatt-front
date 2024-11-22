'use client'

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
    const [isLoading, setIsLoading] = useState(true); // Para controlar o carregamento da página
    const [isEditing, setIsEditing] = useState(false); // Controla se está no modo de edição
    const router = useRouter();

    const usuarioData = JSON.parse(localStorage.getItem('usuario') || '{}');
    const cpf = usuarioData?.cpf ?? '';

    const apiUrl = 'http://localhost:8080/EcoWatt/api/clientes';

    useEffect(() => {
        const logado = localStorage.getItem('logado');
        if (logado !== 'sim') {
            // Se não estiver logado, redireciona para a página de login
            router.push('/Login');
        } else {
            // Se estiver logado, carrega as informações do usuário
            if (cpf) {
                fetch(`${apiUrl}/${cpf}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Erro ao carregar as informações do usuário');
                        }
                        return response.json();
                    })
                    .then(data => {
                        setUsuario(data);
                        setNome(data.nome);
                        setEmail(data.email);
                        setSenha(data.senha);
                        setIsLoading(false); // Dados carregados, para a tela de carregamento
                    })
                    .catch(error => {
                        setErro('Erro ao carregar as informações do usuário');
                        setIsLoading(false); // Mesmo se der erro, parar o loading
                        console.error(error);
                    });
            } else {
                setErro('CPF não encontrado no localStorage');
                setIsLoading(false);
            }
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
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Erro ao atualizar as informações');
                }
            })
            .then(text => {
                if (text === '1' || text.trim() === '') {
                    alert('Informações atualizadas com sucesso!');
                    setUsuario(updatedUser);
                    setIsEditing(false); // Após salvar, desabilita a edição
                } else {
                    throw new Error('Falha na atualização do cliente');
                }
            })
            .catch(error => {
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
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao excluir o usuário');
                    }
                    alert('Usuário excluído com sucesso!');
                    localStorage.removeItem('usuario');
                    localStorage.removeItem('logado');
                    router.push('/'); // Redireciona para a página inicial
                })
                .catch(error => {
                    alert('Erro ao excluir o usuário');
                    console.error(error);
                });
        }
    };

    const handleEditClick = () => {
        setIsEditing(true); // Ativa o modo de edição
    };

    const handleCancelClick = () => {
        setIsEditing(false); // Desativa o modo de edição e retorna para a visualização
    };

    if (isLoading) {
        return <div>Loading...</div>; // Exibe o loading enquanto as informações são carregadas
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
                                disabled={!isEditing} // Desabilita o campo se não estiver editando
                            />
                        </div>
                        <div>
                            <label className={styles.label}>Email:</label>
                            <input
                                className={styles.input}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={!isEditing} // Desabilita o campo se não estiver editando
                            />
                        </div>
                        <div>
                            <label className={styles.label}>Senha:</label>
                            <input
                                className={styles.input}
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                disabled={!isEditing} // Desabilita o campo se não estiver editando
                            />
                        </div>

                        {!isEditing ? (
                            <button
                                className={styles.button}
                                type="button"
                                onClick={handleEditClick} // Habilita a edição
                            >
                                Editar
                            </button>
                        ) : (
                            <div className={styles.buttonContainer}>
                                <button
                                    className={styles.button}
                                    type="button"
                                    onClick={atualizarInfo} // Salva as alterações
                                >
                                    Salvar
                                </button>
                                <button
                                    className={styles.button}
                                    type="button"
                                    onClick={handleCancelClick} // Cancela a edição
                                >
                                    Sair
                                </button>
                                <button
                                    className={`${styles.button} ${styles.redButton}`}
                                    type="button"
                                    onClick={excluirUsuario} // Exclui a conta
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
