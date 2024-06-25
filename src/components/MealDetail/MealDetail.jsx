import Container from "/src//components/Container/Container.jsx"
import Tags from "/src/components/UI/Tags/Tags.jsx"
import MealList from '/src/components/MealDetail/MealList/MealList.jsx'
import YoutubeButton from "/src/components/UI/YoutubeButton/YoutubeButton.jsx"

import styles from '/src/components/MealDetail/MealDetail.module.css'

export default function MealDetail({ data }) {

    console.log(data)
    let ingridientsArr = []
    let tags

    for (var key in data) {
        const ingridient = {}
        let ingNum


        if (key.includes('strIngredient') && data[key] != '') {
            ingridient['name'] = data[key]

            ingNum = key.replace(/[^0-9]/g, '');

            let measureKey = 'strMeasure' + ingNum
            ingridient['measure'] = data[measureKey]
            ingridientsArr.push(ingridient)
        }

        if (key.includes('strTags') && data[key] != '' && data[key] != null) {
            tags = data[key].split(',')
        }

    }

    return (
        <>
            <div className="section">
                <div className={styles.meal}>
                    <Container >
                        <div className={styles.mealContent}>
                            <div className={styles.mealDetail}>
                                <div className={styles.mealDetail__image}>
                                    <img src={data.strMealThumb} />
                                </div>
                                <div className={styles.mealInfo}>
                                    <div className={styles.mealInfo__head}>
                                        <p className={styles.mealTitle}>{data.strMeal}</p>
                                        {tags != undefined
                                            ? <Tags data={[data.strArea, data.strCategory, ...tags]} />
                                            : <Tags data={[data.strArea, data.strCategory]} />}
                                    </div>
                                    <MealList data={ingridientsArr} title={'Ingredients'} />

                                    <div className={styles.mealInfo__source}>
                                        <YoutubeButton src={data.strYoutube} />
                                        <a href={data.strSource} className="textLink">Source</a>
                                    </div>
                                </div>
                            </div>
                            <p className="title24">Instructions</p>
                            <p>{data.strInstructions}</p>


                        </div>

                    </Container>

                </div>
            </div>
        </>
    )
}