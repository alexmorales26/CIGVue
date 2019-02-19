const routes = require('express').Router();

routes.get('/',(req,res) => {
    res.status(200).json({message:'Connected !'});
});

routes.get('/api',(req,res) => {
    res.status(200).json({message:'Capstone'})
});

module.exports = routes;