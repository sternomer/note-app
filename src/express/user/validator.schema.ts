import Joi from "joi";

export const createUserSchema = Joi.object({
    query: {},
    params: {},
    body: {
        username: Joi.string().required(),
        password: Joi.string().required(),   
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
