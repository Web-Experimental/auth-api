import clientError from './clientError';

class RequestValidationError extends clientError {
  constructor(error) {
    const validationErrors = error.details.map((item) => item.message);

    console.log('validationErrors: ', validationErrors);

    super(JSON.stringify(validationErrors), 'fail', 222);
  }
}

export default RequestValidationError;
