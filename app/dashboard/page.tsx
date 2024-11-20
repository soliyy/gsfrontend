'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Dashboard.module.css';

type EnergyData = {
    totalConsumption: number;
    peakDate: string;
    averageConsumption: number;
};

const Dashboard = () => {
    const [data, setData] = useState<EnergyData | null>(null);
    const [dataRange, setDataRange] = useState('30d'); // Valor inicial para o intervalo

    // Função para buscar dados da API
    const fetchData = async (range: string) => {
        try {
            const response = await axios.get(`/api/energy-consumption?range=${range}`);
            setData(response.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    useEffect(() => {
        // Ao montar, recupera o intervalo de dados do localStorage
        const savedDataRange = localStorage.getItem('dataRange') || '30d';
        setDataRange(savedDataRange);
        fetchData(savedDataRange); // Buscar dados com o intervalo salvo
    }, []);

    // Verificar mudanças no intervalo de dados periodicamente (ou usar outra abordagem de detecção)
    useEffect(() => {
        const handleStorageChange = () => {
            const updatedRange = localStorage.getItem('dataRange') || '30d';
            if (updatedRange !== dataRange) {
                setDataRange(updatedRange);
                fetchData(updatedRange); // Atualizar os dados com o novo intervalo
            }
        };

        // Ouvir mudanças no localStorage
        window.addEventListener('storage', handleStorageChange);

        // Limpeza do evento ao desmontar o componente
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [dataRange]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Dashboard</h1>
            <div className={styles.innerContent}>
                {data ? (
                    <div className={styles.dataBox}>
                        <h2>Resumo do Consumo de Energia</h2>
                        <ul>
                            <li><span className={styles.blueText}>Total:</span> {data.totalConsumption} kWh</li>
                            <li><span className={styles.blueText}>Data mais alta:</span> {data.peakDate}</li>
                            <li><span className={styles.blueText}>Consumo médio:</span> {data.averageConsumption} kWh</li>
                        </ul>
                    </div>
                ) : (
                    <p>Carregando dados...</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
