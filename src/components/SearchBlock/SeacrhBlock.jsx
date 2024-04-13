import Container from "../Container/Container.jsx";
import SearchForm from "./SearchForm/SearchForm.jsx";
import styles from "./SearchBlock.module.css";

export default function SearchBlock() {
    return (
        <div className={styles.searchBlock}>
            <Container>
                <div className={styles.searchForm}>
                    <SearchForm />
                </div>
            </Container>
        </div>
    )
}