import Joi from "joi";

export const productValid = Joi.object({
  name: Joi.string().required().min(3),
  age: Joi.number().required(),
  email: Joi.string(),
  gender: Joi.string(),
});
