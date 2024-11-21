import Navbar from '../components/Navbar';
import styles from './Layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="pt-BR">
            <head>
                <title>Plataforma de Eficiência Energética</title>
                <link rel="icon" href="/images/inovaeco-icon.jfif" />
            </head>
            <body className={styles.container}>
                <Navbar />
                <main className={styles.mainContent}>
                    {children}
                </main>
                <footer className={styles.footer}>
                    <p>&copy; 2024 Plataforma de Eficiência Energética. Todos os direitos reservados.</p>
                </footer>
            </body>
        </html>
    );
};

export default Layout;
