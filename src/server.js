const express = require('express');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const errorHandler404 = require('./error-handlers/404');
const errorHandler500 = require('./error-handlers/500');

const app = express();

app.use(express.json());
app.use(logger);

app.get('/person', validator, (req, res) => {
  const name = req.query.name;
  res.json({ name });
});

app.use(errorHandler404);
app.use(errorHandler500);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  },
};