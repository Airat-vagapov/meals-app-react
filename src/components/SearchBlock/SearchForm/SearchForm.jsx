import { getMealsByName } from '../../../services/meals.js';
import { useFormik } from 'formik';

export default function SearchForm({ onSubmit }) {
    const formik = useFormik({
        initialValues: {
            query: '',
        },
        onSubmit: async (values) => {
            if (values.query === '') {
                onSubmit([])
                return true
            }

            const result = await getMealsByName(values.query)
            onSubmit(result)
        }
    });
    return (
        <form onSubmit={formik.OnSubmit}>
            <input
                type="text"
                id='query'
                name='query'
                placeholder="Enter the name of a meal"
                onChange={(e) => {
                    formik.handleChange(e)
                    formik.handleSubmit()
                }}
                values={formik.values.query} />
        </form>

    )
}
