var saveItem = require('../../models/saveItem');

const putItem = (req, res) => {
    var response = saveItem(res.body)
    console.log(JSON.stringify(response));
}
module.exports = putItem;