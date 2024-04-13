import styles from './Header.module.css'
import Container from '../Container/Container.jsx'

export default function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.headerTitle}>
                    <p>Meals App</p>
                </div>
            </Container>
        </header>
    )
}