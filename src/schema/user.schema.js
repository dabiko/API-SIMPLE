
import * as Yup from "yup";

const MIN_LENGTH = {
    name: 2,
    city: 3,
    country:2,
}
const MAX_LENGTH = {
    name: 20,
    city: 30,
    country:20,
}

export const addUserSchemaValidator   = {
    schema: {
        body: {
            yupSchema: Yup.object().shape({
                name: Yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH.name).required(),
                email: Yup.string().email(),
                city: Yup.string().min(MIN_LENGTH.city).max(MAX_LENGTH.city),
                country: Yup.string().min(MIN_LENGTH.country).max(MAX_LENGTH.country),
            }),
        }
    },
}

export const getUserSchemaValidator   = {
    schema: {
        params: {
            yupSchema: Yup.object().shape({
                id: Yup.number().required(),
            }),
        }
    },
}


export const updateUserSchemaValidator   = {
    schema: {
        body: {
            yupSchema: Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().email(),
                city: Yup.string(),
                country: Yup.string(),
            }),
        }
    },
}


export const deleteUserSchemaValidator   = {
    schema: {
        params: {
            yupSchema: Yup.object().shape({
                id: Yup.number().required(),
            }),
        }
    },
}



