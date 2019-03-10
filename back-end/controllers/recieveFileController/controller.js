const recieveFileController = (req, res) => {
  console.log(req.files)
  let uploadFile = req.files.file
  const fileName = req.files.file.name
  console.log(fileName);
  uploadFile.mv(
    `${__dirname}/public/files/${fileName}`,
    function (err) {
      if (err) {
        return res.status(500).send(err)
      }
      res.json({
        file: `public/${req.files.file.name}`,
      })
    },
  )
}
module.exports = recieveFileController;