import styles from './Analytics.module.css';

const Analytics = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Análise</h1>
            <div className={styles.chart}>
                <p>Gráficos e dados detalhados sobre o consumo de energia serão exibidos aqui.</p>
            </div>
        </div>
    );
};

export default Analytics;
