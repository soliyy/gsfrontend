import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li><Link href="/dashboard" className={styles.navLink}>Página Inicial</Link></li>
                <li><Link href="/analytics" className={styles.navLink}>Análises</Link></li>
                <li><Link href="/settings" className={styles.navLink}>Configurações</Link></li>
                <li><Link href="/members" className={styles.navLink}>Membros</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
