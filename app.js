const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const appointmentsRoutes = require('./routes/booking'); 
const sequelize = require('./utils/database');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(appointmentsRoutes);
app.use(axios);



const PORT = process.env.PORT || 5000;
sequelize.sync()
.then(app.listen(PORT))
.catch(err=>{
    console.log(err)
})