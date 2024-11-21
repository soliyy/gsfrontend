import styles from './Members.module.css';



const Members = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Equipe</h1>
            <div className={styles.memberList}>
                <div className={styles.memberCard}>
                    <img src="/images/lucasH.jpg" alt="Lucas" className={styles.memberPhoto} />
                    <p className={styles.memberName}>Lucas Henrique de Souza Santos</p>
                    <p className={styles.memberRM}>RM558241</p>
                    <a href="www.linkedin.com/in/
                    lucas-h-9694582b6" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                    <a href="https://github.com/membro1" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
                </div>

                <div className={styles.memberCard}>
                    <img src="/images/lucas.jpg" alt="Lucas S" className={styles.memberPhoto} />
                    <p className={styles.memberName}>Lucas Martins Soliman </p>
                    <p className={styles.memberRM}>RM558506</p>
                    <a href="https://www.linkedin.com/in/lucassoliman/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                    <a href="https://github.com/soliyy" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
                </div>

                <div className={styles.memberCard}>
                    <img src="/images/ryan.jpg" alt="ryan" className={styles.memberPhoto} />
                    <p className={styles.memberName}>Ryan Fernando Lucio da Silva</p>
                    <p className={styles.memberRM}>RM555924</p>
                    <a href="https://www.linkedin.com/in/ryan-fernando-028b94333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                    <a href="https://github.com/ryanxaxxxx" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default Members;
