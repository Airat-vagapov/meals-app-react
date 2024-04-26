import Container from "../Container/Container.jsx";
import SearchForm from "./SearchForm/SearchForm.jsx";
import SearchResultList from './SearchResultList/SearchResultList.jsx'
import styles from "./SearchBlock.module.css";
import { useState } from "react";

export default function SearchBlock() {
    const [searchResult, setSearchResult] = useState([])

    let dataIsReady = false;
    searchResult != null && searchResult.length > 0 ? dataIsReady = true : dataIsReady = false
    

    return (
        <div className={styles.searchBlock}>
            <Container>
                <div className={styles.searchForm}>
                    <SearchForm onSubmit={setSearchResult} />
                </div>

                {dataIsReady &&
                    <div>
                        <SearchResultList data={searchResult} />
                    </div>
                }

            </Container>
        </div>
    )
}