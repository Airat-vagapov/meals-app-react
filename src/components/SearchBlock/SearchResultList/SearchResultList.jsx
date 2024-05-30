import styles from './SearchResultList.module.css'
import TextLink from '../../UI/TextLink.jsx'
import Tags from '../../UI/Tags/Tags.jsx';
import { Outlet, Link } from "react-router-dom";

const SearchResultList = ({ data }) => {
    return (
        <ul>
            {data && data.map((meal) => (
                <li key={meal.idMeal}>

                    <div className={styles.meal}>
                        <a href='' className={styles.mealImageContainer}>
                            <img className={styles.mealImage} src={meal.strMealThumb} alt="" />
                        </a>
                        <div className={styles.mealContent}>
                            <p className={styles.mealName}>{meal.strMeal}</p>

                            <Tags data={[meal.strArea, meal.strCategory]} />
                            <Link className='textLink' to={`meals/${meal.idMeal}`}>Show more</Link>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default SearchResultList;