import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Bem-vindo à Plataforma de Eficiência Energética</h1>
            <p className={styles.subtitle}>
                Monitore e otimize o consumo de energia da sua indústria com insights detalhados e previsões de eficiência.
            </p>
            <button className={styles.button}>Começar</button>
        </div>
    );
};

export default Home;
