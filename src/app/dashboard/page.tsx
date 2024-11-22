'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './dashboard.module.css'
import PainelSolarCalculator from "@/components/Dashboard/Calculadora/Calculadora"
import CarroEletricoCalculator from "@/components/Dashboard/CalculadoraCarro/CalculadoraCarro"
import HeaderDashboard from '@/components/Dashboard/HeaderDashboard/HeaderDashboard';

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar o loading
    const router = useRouter();

    useEffect(() => {
        const logado = localStorage.getItem('logado');
        if (logado !== 'sim') {
            // Se não estiver logado, redireciona para a página de login
            router.push('/Login');
        } else {
            // Se estiver logado, não precisa fazer nada, renderiza o conteúdo
            setIsLoading(false);
        }
    }, [router]);

    if (isLoading) {
        return <div>Loading...</div>; // Você pode personalizar a mensagem de loading
    }

    return (
        <>
            <HeaderDashboard />
            <div className={styles.container}>
                <PainelSolarCalculator />
                <CarroEletricoCalculator />
            </div>
        </>
    );
}

export default Dashboard;
