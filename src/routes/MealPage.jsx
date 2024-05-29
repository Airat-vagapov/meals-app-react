import { useLoaderData } from "react-router-dom";

import { getMealById } from "../services/meals.js"

export async function mealLoader({params}) {
    const meal = await getMealById(params.mealId);
    return { meal };
}

function MealPage() {
    const { meal } = useLoaderData();

    return (
        <>
            111
        </>
    )
}

export default MealPage
