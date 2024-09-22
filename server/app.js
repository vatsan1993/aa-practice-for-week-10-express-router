const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
app.use('/people', peopleRouter);

const colorsRouter = require('./routes/colors');
app.use('/colors', colorsRouter);

let errorHandler = (err, req, res, next) => {
  if (err) {
    res.status(err.status).json({
      message: err.message || 'Server Internal Error',
      statusCode: err.status || 500,
    });
  }
};

app.all('*', (req, res, next) => {
  let err = new Error('404 Not found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
