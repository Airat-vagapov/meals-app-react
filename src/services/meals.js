import axios from 'axios';


export async function getMealsByName(query) {
    const url = `https://themealdb.com/api/json/v1/1/search.php?s=${query}`

    const searchResult = await axios.get(url)
        .then(res => {
            return res.data.meals;
        })
    return searchResult
}