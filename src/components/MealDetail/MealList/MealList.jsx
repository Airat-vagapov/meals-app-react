export default function MealList({ data }) {
    return (
        <>
            <ul>
                {data.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.name}
                            {item.measure}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}