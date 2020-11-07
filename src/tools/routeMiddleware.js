import RequestValidationError from './error-builder/requestValidationError';

function validateRoute(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      throw new RequestValidationError(error);
    }

    const z = '2';

    z.toLocaleLowerCase();

    next();
  };
}

function name(a, b, c) {
  return a + b + c;
}

console.log(name());

export default validateRoute;
