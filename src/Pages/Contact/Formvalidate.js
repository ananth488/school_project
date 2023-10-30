
import * as yup from 'yup'


    export const Formvalidate=yup.object().shape(
        {
            name: yup.string().required(),
            number: yup.number().max(10, 'Number must be at most 10').required('Number is required'),
            email:yup.string().email().required(),
            password:yup.string().min(4).max(8).required(),
        }
    )

