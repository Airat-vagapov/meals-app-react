import styles from '/src/components/MealDetail/MealDetail.module.css'

export default function MealList({ data, title }) {
    return (

        <div className={styles.mealListBlock}>
            {title && (<p className={styles.mealListTitle}>{title}</p>)}
            <ul className={styles.mealList}>
                {data.map((item, index) => {
                    return (
                        <li key={index}>
                            <span className={styles.mealListItem}>{item.name}</span>
                            <span className={styles.mealListItem}>{item.measure}</span>
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}