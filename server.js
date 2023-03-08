const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//const middleware = require('./middleware/index');
const homeRoutes = require('./routes/homeRoutes');
const app = express();

app.use([express.static(__dirname),cors(),bodyParser.json()]);
//app.use('*',middleware);

app.get('/',homeRoutes);


app.listen(process.env.PORT || 5000,()=>{
    console.log(`server running on port ${process.env.PORT || 5000}`)
})

