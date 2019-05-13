const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const headers = require('./middlewares/headers');
const app = express();
const config= require('config').get('app');
const PORT = config.port;
const hostName = process.env.HostName || 'localhost';
var authMiddleware = require('./middlewares/cognito/validator');

app.use(headers);
app.use(authMiddleware);
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use('/',routes);


app.listen(PORT, hostName,()=>{
   console.log(`Server listening on http://${hostName}:${PORT}`) 
});