const dataProcessor = require('../../util/dataProcessor/processor');

const recieveFileController = (req, res) => {
  let data = dataProcessor(req.body.data.file);
  res.status(200).send(data);
}
module.exports = recieveFileController;