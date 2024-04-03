import Joi from "joi";

export const booksValidator = Joi.object({
  title: Joi.string().required().min(3).max(255),
  author: Joi.string().required().min(3).max(255),
  year: Joi.number().integer().required().min(1000).max(9999),
  sale: Joi.boolean().required(),
  categoryId: Joi.string().required().length(24), // Assuming MongoDB ObjectId length
});
export default booksValidator;
