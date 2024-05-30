import Container from "/src//components/Container/Container.jsx"
import Tags from "/src/components/UI/Tags/Tags.jsx"
import MealList from '/src/components/MealDetail/MealList/MealList.jsx'

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
            <div className={styles.meal}>
                <Container >
                    <div className={styles.mealContent}>
                        <div className={styles.mealHead}>
                            <div className={styles.mealHead__left}>
                                <p className={styles.mealTitle}>{data.strMeal}</p>
                                {tags != undefined
                                    ? <Tags data={[data.strArea, data.strCategory, ...tags]} color={'white'} />
                                    : <Tags data={[data.strArea, data.strCategory]} color={'white'} />}
                            </div>
                            <div className={styles.mealHead__right}>
                                <a href={data.strYoutube}>Youtube</a>
                                <a href={data.strSource}>Source</a>
                            </div>
                        </div>

                        <div className={styles.mealDetail}>
                            <MealList data={ingridientsArr} />
                            <img src={data.strMealThumb} />


                        </div>
                        <p>{data.strInstructions}</p>


                    </div>

                </Container>

            </div>
        </>
    )
}