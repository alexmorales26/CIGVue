const express = require('express');
const routes = require('./routes/routes');
const headers = require('./middlewares/headers');
const app = express();
const PORT = process.env.PORT || 5000;
const hostName = process.env.HostName || 'localhost';

app.use(headers);
app.use('/',routes);


app.listen(PORT, hostName,()=>{
   console.log(`Server listening on http://${hostName}:${PORT}`) 
});