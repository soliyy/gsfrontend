import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Dashboard</h1>
            <div className={styles.innerContent}>
                <p className={styles.text}>
                    Bem-vindo ao painel de controle. Aqui você pode visualizar o resumo de consumo de energia e obter insights.
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
