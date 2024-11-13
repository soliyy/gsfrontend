import Link from 'next/link';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#0077ff', color: 'white' }}>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '15px' }}>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/analytics">Analytics</Link></li>
                <li><Link href="/settings">Settings</Link></li>
                <li><Link href="/members">Members</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
