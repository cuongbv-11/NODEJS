import Joi from "joi";

export const signUpValidator = Joi.object({
  userName: Joi.string().required().min(6).max(255).messages({
    "string.empty": "userName không được bỏ trống",
    "any.required": "userName là bắt buộc!",
    "string.min": "userName phải có ít nhất {#limit} ký tự",
    "string.max": "userName phải có ít hơn {#limit} ký tự",
  }),
  email: Joi.string().required().email().messages({
    "string.empty": "email không được bỏ trống",
    "any.required": "email là bắt buộc!",
    "string.email": "email không đúng định dạng",
  }),
  password: Joi.string().required().min(6).max(255).messages({
    "string.empty": "Password không được bỏ trống",
    "any.required": "Password là bắt buộc!",
    "string.min": "Password phải có ít nhất {#limit} ký tự",
    "string.max": "Password phải có ít hơn {#limit + 1} ký tự",
  }),
  confirmPassword: Joi.string()
    .required()
    .min(6)
    .max(255)
    .valid(Joi.ref("password"))
    .messages({
      "string.empty": "confirmPassword không được bỏ trống",
      "any.required": "confirmPassword là bắt buộc!",
      "string.min": "confirmPassword phải có ít nhất {#limit} ký tự",
      "string.max": "confirmPassword phải có ít hơn {#limit + 1} ký tự",
      "any.only": "confirmPassword không khớp với password",
    }),
  role: Joi.string(),
});

export const signInValidator = Joi.object({
  email: Joi.string().required().email().messages({
    "string.empty": "email không được bỏ trống",
    "any.required": "email là bắt buộc!",
    "string.email": "email không đúng định dạng",
  }),
  password: Joi.string().required().min(6).max(255).messages({
    "string.empty": "Password không được bỏ trống",
    "any.required": "Password là bắt buộc!",
    "string.min": "Password phải có ít nhất {#limit} ký tự",
    "string.max": "Password phải có ít hơn {#limit + 1} ký tự",
  }),
});
