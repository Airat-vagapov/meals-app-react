import { useLoaderData } from "react-router-dom";

import Header from '/src/components/Header/Header.jsx'
import MealDetail from '/src/components/MealDetail/MealDetail.jsx'

import { getMealById } from "../services/meals.js"

export async function mealLoader({ params }) {
    const meal = await getMealById(params.mealId);
    return meal
}

function MealPage() {
    const [meal] = useLoaderData();
    return (
        <>
            <Header />
            <MealDetail data={meal} />

        </>
    )
}

export default MealPage
