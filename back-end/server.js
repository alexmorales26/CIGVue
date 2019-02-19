const express = require('express');
const routes = require('./routes/routes');
const app = express();
const PORT = process.env.PORT || 3000;
const hostName = process.env.HostName || 'localhost';

app.use('/',routes);

app.listen(PORT, hostName,()=>{
   console.log(`Server listening on http://${hostName}:${PORT}`) 
});