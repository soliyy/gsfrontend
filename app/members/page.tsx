import styles from './Members.module.css';

const Members = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Equipe</h1>
            <div className={styles.memberList}>
                <div className={styles.memberCard}>
                    <img src="/path/to/photo1.jpg" alt="Membro 1" className={styles.memberPhoto} />
                    <p className={styles.memberName}>Membro 1</p>
                    <p className={styles.memberRole}>Função</p>
                    <p className={styles.memberRM}>RM: 123456</p>
                    <a href="https://linkedin.com/in/membro1" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                    <a href="https://github.com/membro1" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
                </div>

                <div className={styles.memberCard}>
                    <img src="/path/to/photo2.jpg" alt="Membro 2" className={styles.memberPhoto} />
                    <p className={styles.memberName}>Membro 2</p>
                    <p className={styles.memberRole}>Função</p>
                    <p className={styles.memberRM}>RM: 234567</p>
                    <a href="https://linkedin.com/in/membro2" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                    <a href="https://github.com/membro2" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
                </div>

                <div className={styles.memberCard}>
                    <img src="/path/to/photo3.jpg" alt="Membro 3" className={styles.memberPhoto} />
                    <p className={styles.memberName}>Membro 3</p>
                    <p className={styles.memberRole}>Função</p>
                    <p className={styles.memberRM}>RM: 345678</p>
                    <a href="https://linkedin.com/in/membro3" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                    <a href="https://github.com/membro3" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default Members;
