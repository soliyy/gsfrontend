import Navbar from '../components/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="pt-BR">
            <head>
                <title>Plataforma de Eficiência Energética</title>
            </head>
            <body>
                <Navbar />
                <main style={{ padding: '20px' }}>{children}</main>
                <footer style={{ textAlign: 'center', padding: '20px', marginTop: '20px', backgroundColor: '#f0f0f0' }}>
                    <p>&copy; 2024 Plataforma de Eficiência Energética. Todos os direitos reservados.</p>
                </footer>
            </body>
        </html>
    );
};

export default Layout;
