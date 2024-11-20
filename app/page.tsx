"use client";

import styles from './Home.module.css';
import { useRouter } from 'next/navigation';

const Home = () => {
    const router = useRouter();

    const handleStart = () => {
        // Navega para o Dashboard
        router.push('/dashboard');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>InovaEco</h1>
            <p className={styles.subtitle}>
                Monitore e otimize o consumo de energia da sua indústria com insights detalhados e previsões de eficiência.
            </p>
            <button className={styles.button} onClick={handleStart}>
                Começar
            </button>
        </div>
    );
};

export default Home;
