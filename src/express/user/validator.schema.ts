import Joi from "joi";

export const createUserSchema = Joi.object({
    query: {},
    params: {},
    body: {
        name: Joi.string().required(),   
    }
})

export const getUserSchema = Joi.object({
    query: {},
    params: { id: Joi.string().required() },
    body: {},
})

export const deleteUserSchema = Joi.object({
    query: {},
    params: { id: Joi.string().required() },
    body: {},
})
