const validator = require('./validator');
const { createRequest, createResponse } = require('node-mocks-http');

describe('Validator Middleware', () => {
  it('should pass when the name is in the query string', () => {
    const req = createRequest({ query: { name: 'John' } });
    const res = createResponse();
    const next = jest.fn();

    validator(req, res, next);

    expect(next).toHaveBeenCalledTimes(1); // Middleware should call next
  });

  it('should return a 500 error when the name is missing', () => {
    const req = createRequest({ query: {} });
    const res = createResponse();
    const next = jest.fn();
  
    validator(req, res, next);
  
    expect(res.statusCode).toBe(500); // Expect a 500 status code
    expect(JSON.parse(res._getData())).toEqual({ error: 'Name is required in the query string' });
    expect(next).not.toHaveBeenCalled(); // Middleware should not call next
  });
  
});
