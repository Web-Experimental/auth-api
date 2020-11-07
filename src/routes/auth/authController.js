async function signupController(req, res, next) {
  console.log('auth controller');

  res.locals.data = 'Successfully registered';

  next();
}

export default signupController;
