import styles from './Settings.module.css';

const Settings = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Configurações</h1>
            <p className={styles.settingOption}>Aqui você pode ajustar suas preferências.</p>
            <button className={styles.button}>Salvar Configurações</button>
        </div>
    );
};

export default Settings;
