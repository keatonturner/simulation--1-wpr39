const express = require('express');
const bodyParser = ('body-parser');
const axios = require('axios');
require('dotenv').config()
const controller = require('./controller')
const massive = require('massive');

const app = express();
// app.use(bodyParser.json());
massive("postgres://idljvvoyorctzw:c88ec02550dee367d5fac36ec94da48033fd704b53b81a1904799b5356e9ee8c@ec2-23-23-177-166.compute-1.amazonaws.com:5432/d1j2cqvkjl150b?ssl=true")
.then(dbData => {
    app.set('db', dbData)
}).catch( err => console.log(err));

app.get('/api/inventory', controller.read)
app.post('/api/inventory', controller.create)
app.put('/api/inventory/:id', controller.update)
app.delete('/api/inventory/:id', controller.delete)

const port = process.env.PORT || 3010;
app.listen(port, () => {console.log(`listening on port ${port}.`); } );