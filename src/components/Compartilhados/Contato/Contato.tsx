import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contato.module.css';

const Contato: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');
    const [enviado, setEnviado] = useState<boolean>(false);
    const [erro, setErro] = useState<string | null>(null);
    const [carregando, setCarregando] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!nome || !email || !mensagem) {
            setErro('Por favor, preencha todos os campos.');
            return;
        }


        if (!isValidEmail(email)) {
            setErro('Por favor, insira um endereço de email válido.');
            return;
        }

        setCarregando(true);
        setErro(null);

        const templateParams = {
            nome,
            email,
            mensagem,
        };

        try {
            await emailjs.send(
                'service_7ky7mpj',
                'template_ffgt22p',
                templateParams,
                '-APsGrdM4xbW0jO10'
            );
            setEnviado(true);
        } catch (error) {
            setErro('Ocorreu um erro ao enviar seu email. Tente novamente mais tarde.');
            console.error('Erro ao enviar email:', error);
        } finally {
            setCarregando(false);
        }
    };


    const isValidEmail = (email: string): boolean => {
        return /\S+@\S+\.\S+/.test(email);
    };

    return (
        <section className={styles.section_contato}>
            <div className={styles.section_contato_conteudo}>
                <h1 className={styles.section_contato_titulo}> Fale Conosco </h1>
                <p className={styles.section_contato_texto}>Preencha o formulário ao lado, e nossa equipe entrará em contato o mais rápido possível</p>
            </div>
            <div className={styles.contato} id="contato">
                <div className={styles.container__contato}>
                    <form id={styles.form_contato} onSubmit={handleSubmit}>
                        <input
                            id="nome"
                            name="nome"
                            type="text"
                            placeholder="Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            placeholder="Mensagem"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                        />
                        <button type="submit" className={styles.botao_contato} disabled={carregando}>
                            {carregando ? 'Enviando...' : enviado ? 'Mensagem Enviada!' : 'Enviar Mensagem'}
                        </button>
                        {erro && <p style={{ color: 'red' }}>{erro}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contato;
