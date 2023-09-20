module.exports = (req, res, next) => {
  const name = req.query.name;

  if (!name) {
    res.status(500).json({ error: 'Name is required in the query string' });
  } else {
    next();
  }
};