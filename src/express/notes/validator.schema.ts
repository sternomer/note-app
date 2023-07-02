import Joi from "joi";

export const createNoteSchema = Joi.object({
  query: {},
  params: {},
  body: { content: Joi.any().required() },
});

export const getNoteSchema = Joi.object({
  query: {},
  params: { id: Joi.string().required() },
  body: {},
});

export const updateNoteSchema = Joi.object({
  query: {},
  params: { id: Joi.string().required() },
  body: { content: Joi.any().required() },
});

export  const deleteNoteSchema = Joi.object({
    query: {},
    params: { id: Joi.string().required() },
    body: {},
})
