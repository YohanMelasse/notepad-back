class NotFound extends Error {
  statusCode: number;
  constructor (message: string, statusCode = 404) {
    super(message);
    this.statusCode = statusCode;
  }
}

class BadRequest extends Error {
  statusCode: number;
  constructor (message: string, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

class Unauthorized extends Error {
  statusCode: number;
  constructor (message: string, statusCode = 401) {
    super(message);
    this.statusCode = statusCode;
  }
}

class InternalServerError extends Error {
  statusCode: number;
  constructor (message: string, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}

export { NotFound, BadRequest, Unauthorized, InternalServerError};
