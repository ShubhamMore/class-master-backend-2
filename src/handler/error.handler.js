const errorHandler = async (error, status, res) => {
  let err = '' + error;
  if (error.name === 'CastError') {
    err = 'No Record Found';
  } else if (error.code === 11000) {
    err = 'Duplicate key error';
  }
  err = err ? err.replace('Error: ', '') : 'Something Bad Happen, Bad request';
  status = status ? status : 400;
  res.status(status).send(err);
};

module.exports = errorHandler;
