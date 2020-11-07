import Joi from 'joi';

const signupSchema = Joi.object({
  fullname: Joi
    .string()
    .min(3)
    .max(30)
    .required(),
  email: Joi
    .string()
    .email()
    .required(),
  password: Joi
    .string()
    .min(6)
    .max(30)
    .required()
});

export default signupSchema;
