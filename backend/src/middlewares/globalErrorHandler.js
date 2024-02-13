const globalErrorHander = async (err, req, res, next) => {
  await res.status(500).json({
    success: false,
    message: err.message,
  });
  next(err);
};

const notFoundError = (err, req, res, next) => {
  console.log(err);
  next(err);
};

module.exports = globalErrorHander;
