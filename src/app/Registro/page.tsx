'use client'
import styles from './Registro.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
    nome: string;
    email: string;
    cpf: string;
    senha: string;
}

const Registro = () => {
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        email: '',
        cpf: '',
        senha: '',
    });
    const [message, setMessage] = useState<string>('');
    const router = useRouter();  // Hook do Next.js para navegação

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/EcoWatt/api/clientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Registro realizado com sucesso!');
                setFormData({ nome: '', email: '', cpf: '', senha: '' });
               
                setTimeout(() => {
                    router.push('/Login');  
                }, 2000); 
            } else {
                const errorData = await response.text();
                setMessage(`Erro: ${errorData}`);
            }
        } catch (error) {
            if (error instanceof Error) {
                setMessage(`Erro ao registrar: ${error.message}`);
            } else {
                setMessage('Erro desconhecido ao registrar.');
            }
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
                    <h1>Olá!</h1>
                    <p>Registre-se para começar</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        className={styles.input__nome}
                        type="text"
                        name="nome"
                        placeholder="Nome Completo"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className={styles.input__email}
                        type="email"
                        name="email"
                        placeholder="Endereço de email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className={styles.input__nome}
                        type="text"
                        name="cpf"
                        placeholder="CPF"
                        value={formData.cpf}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className={styles.input__senha}
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        value={formData.senha}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Criar Conta</button>
                </form>
                {message && (
                    <p
                        className={`${styles.message} ${
                            message.startsWith('Erro') ? styles.error : ''
                        }`}
                    >
                        {message}
                    </p>
                )}
                <p>
                    Já tem uma conta? <a href="/Login">iniciar sessão</a>
                </p>
            </div>
        </div>
    );
};

export default Registro;
