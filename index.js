const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

require('./utils/auth');

app.get('/',(req,res)=>{
    res.send('Api para ingeniat by Esteban Flores');
});

routerApi(app);
app.use(logErrors);
app.use(errorHandler);

app.listen(port,()=>{
    console.log('Mi port: '+ port);
});



 