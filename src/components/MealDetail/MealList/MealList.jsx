import styles from '/src/components/MealDetail/MealDetail.module.css'

export default function MealList({ data }) {
    return (

        <ul className={styles.mealList}>
            {data.map((item, index) => {
                return (
                    <li key={index}>
                        {item.name}
                        {item.measure}
                    </li>
                )
            })}
        </ul>

    )
}