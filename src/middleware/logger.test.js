const logger = require('./logger');

describe('Logger Middleware', () => {
  it('should log request method and path', () => {
    const req = { method: 'GET', path: '/test' };
    const res = {};
    const next = jest.fn();

    // Mock console.log using a spy
    const consoleSpy = jest.spyOn(console, 'log');
    
    logger(req, res, next);

    expect(consoleSpy).toHaveBeenCalledWith('GET /test');
    expect(next).toHaveBeenCalled();
  });
});
