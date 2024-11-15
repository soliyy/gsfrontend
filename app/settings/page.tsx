'use client';

import { useState, useEffect } from 'react';
import styles from './Settings.module.css';

const Settings = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [dataRange, setDataRange] = useState('30d');
    const [selectedDateTime, setSelectedDateTime] = useState('');

    // Define a data e hora atuais no fuso horário de Brasília (UTC-3)
    useEffect(() => {
        const now = new Date();
        const offset = -3; // UTC-3 para Brasília
        const brDate = new Date(now.getTime() + offset * 60 * 60 * 1000);
        const formattedDateTime = brDate.toISOString().slice(0, 16); // Formato ISO 8601 cortado
        setSelectedDateTime(formattedDateTime);
    }, []);

    const handleDateTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDateTime(event.target.value);
    };

    const saveSettings = () => {
        alert(
            `Configurações salvas!\nNotificações: ${
                notificationsEnabled ? 'Ativadas' : 'Desativadas'
            }\nIntervalo de Dados: ${dataRange}\nData e Hora Escolhidas: ${
                selectedDateTime || 'Não selecionadas'
            }`
        );
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Configurações</h1>

            {/* Configuração de Notificações */}
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

            {/* Configuração de Filtro de Visualização de Dados */}
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

            {/* Configuração de Data e Hora */}
            <div className={styles.settingOption}>
                <label className={styles.label}>Escolha a data e a hora:</label>
                <input
                    type="datetime-local"
                    value={selectedDateTime}
                    onChange={handleDateTimeChange}
                    className={styles.datetimeInput}
                />
            </div>

            {/* Botão de Salvar Configurações */}
            <button onClick={saveSettings} className={styles.button}>
                Salvar Configurações
            </button>
        </div>
    );
};

export default Settings;
