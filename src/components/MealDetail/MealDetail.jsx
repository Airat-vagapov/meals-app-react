import Container from "/src//components/Container/Container.jsx"
import Tags from "/src/components/UI/Tags/Tags.jsx"
import MealList from '/src/components/MealDetail/MealList/MealList.jsx'

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

        if (key.includes('strTags') && data[key] != '') {
            tags = data[key].split(',')
        }

    }

    console.log(tags)



    return (
        <>
            <Container >
                <p>{data.strMeal}</p>
                <Tags data={[data.strArea, data.strCategory, tags]} />
                <img src={data.strMealThumb} />

                <p>{data.strInstructions}</p>

                <MealList data={ingridientsArr} />
            </Container>

        </>
    )
}