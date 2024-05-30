import styles from './Header.module.css'
import Container from '../Container/Container.jsx'

export default function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.headerTitle}>
                    <a href='/'>Meals App</a>
                </div>
            </Container>
        </header>
    )
}