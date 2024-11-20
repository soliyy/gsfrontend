'use client';

import { useState, useEffect } from 'react';
import styles from './Settings.module.css';

const Settings = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [dataRange, setDataRange] = useState('30d');
    const [selectedDateTime, setSelectedDateTime] = useState('');

    useEffect(() => {
        const savedNotifications = localStorage.getItem('notificationsEnabled');
        const savedDataRange = localStorage.getItem('dataRange');
        const savedDateTime = localStorage.getItem('selectedDateTime');

        if (savedNotifications !== null) setNotificationsEnabled(JSON.parse(savedNotifications));
        if (savedDataRange) setDataRange(savedDataRange);
        if (savedDateTime) {
            setSelectedDateTime(savedDateTime);
        } else {
            const now = new Date();
            const offset = -3;
            const brDate = new Date(now.getTime() + offset * 60 * 60 * 1000);
            const formattedDateTime = brDate.toISOString().slice(0, 16);
            setSelectedDateTime(formattedDateTime);
        }
    }, []);

    const saveSettings = () => {
        localStorage.setItem('notificationsEnabled', JSON.stringify(notificationsEnabled));
        localStorage.setItem('dataRange', dataRange);
        localStorage.setItem('selectedDateTime', selectedDateTime);
        alert('Configurações salvas com sucesso!');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Configurações</h1>

            <div className={styles.settingOption}>
                <label className={styles.label}>
                    <input
                        type="checkbox"
                        checked={notificationsEnabled}
                        onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                        className={styles.checkbox}
                    />
                    Ativar Notificações
                </label>
            </div>

            <div className={styles.settingOption}>
                <label className={styles.label}>Intervalo de Dados</label>
                <select
                    value={dataRange}
                    onChange={(e) => setDataRange(e.target.value)}
                    className={styles.select}
                >
                    <option value="7d">Últimos 7 dias</option>
                    <option value="30d">Últimos 30 dias</option>
                    <option value="90d">Últimos 90 dias</option>
                </select>
            </div>

            <div className={styles.settingOption}>
                <label className={styles.label}>Escolha a data e a hora:</label>
                <input
                    type="datetime-local"
                    value={selectedDateTime}
                    onChange={(e) => setSelectedDateTime(e.target.value)}
                    className={styles.datetimeInput}
                />
            </div>

            <button onClick={saveSettings} className={styles.button}>
                Salvar Configurações
            </button>
        </div>
    );
};

export default Settings;
