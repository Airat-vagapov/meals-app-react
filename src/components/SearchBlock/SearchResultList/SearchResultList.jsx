import styles from './SearchResultList.module.css'
import TextLink from '../../UI/TextLink.jsx'
import Tags from '../../UI/Tags/Tags.jsx';

const SearchResultList = ({ data }) => {
    console.log(data)


    return (
        <ul>
            {data && data.map((meal) => (
                <li key={meal.idMeal}>

                    <div className={styles.meal}>
                        <div className={styles.mealImageContainer}>
                            <img className={styles.mealImage} src={meal.strMealThumb} alt="" />
                        </div>
                        <div className={styles.mealContent}>
                            <p className={styles.mealName}>{meal.strMeal}</p>

                            <Tags data={[meal.strArea, meal.strCategory]} />
                            <TextLink mt={true}>Show more</TextLink>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default SearchResultList;