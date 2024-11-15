import Navbar from '../components/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="pt-BR">
            <head>
                <title>Plataforma de Eficiência Energética</title>
            </head>
            <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
                <Navbar />
                <main style={{ flex: 1, padding: '20px' }}>{children}</main>
                <footer style={{
                    textAlign: 'center',
                    padding: '20px',
                    backgroundColor: '#f0f0f0',
                    borderTop: '1px solid #ddd'
                }}>
                    <p>&copy; 2024 Plataforma de Eficiência Energética. Todos os direitos reservados.</p>
                </footer>
            </body>
        </html>
    );
};

export default Layout;
