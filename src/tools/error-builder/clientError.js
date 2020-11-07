class ClientError extends Error {
  constructor(error, status, code) {
    super(error);
    this.status = status;
    this.code = code;
  }
}

export default ClientError;
