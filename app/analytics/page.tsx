"use client";

import styles from './Analytics.module.css';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Registrar os componentes do Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Tipo dos dados da API
type EnergyData = {
    totalConsumption: number;
    peakDate: string;
    averageConsumption: number;
};

const Analytics = () => {
    const [energyData, setEnergyData] = useState<EnergyData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/energy-consumption');
                setEnergyData(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Ajuste para dados reais, se necessário
        datasets: [
            {
                label: 'Consumo de Energia (kWh)',
                data: energyData ? [120, 200, 150, 300, 250] : [], // Simulação para fins de teste
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Análise</h1>
            <div className={styles.chart}>
                {loading ? (
                    <p>Carregando gráfico...</p>
                ) : energyData ? (
                    <Line data={chartData} />
                ) : (
                    <p>Nenhum dado disponível.</p>
                )}
            </div>
        </div>
    );
};

export default Analytics;
