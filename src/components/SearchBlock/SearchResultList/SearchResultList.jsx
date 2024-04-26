import styles from './SearchResultList.module.css'
import TextLink from '../../UI/TextLink.jsx'

const SearchResultList = ({ data }) => {
    console.log(data)
    return (
        <ul>
            {data && data.map((meal) => (
                <li key={meal.idMeal}>

                    <p className={styles.mealCountry}>{meal.strArea}</p>
                    <p className={styles.mealCountry}>{meal.strCategory}</p>
                    <p className={styles.mealName}>{meal.strMeal}</p>
                    <img className={styles.mealImage} src={meal.strMealThumb} alt="" />
                    <TextLink>Show more</TextLink>
                </li>
            ))}
        </ul>
    )
}

export default SearchResultList;