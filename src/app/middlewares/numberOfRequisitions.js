let requestCounter = 0;

function numberOfRequisitions(req, res, next) {
  requestCounter++;

  console.log(requestCounter);
  return next();
}

module.exports = numberOfRequisitions;
