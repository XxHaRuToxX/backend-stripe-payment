const express = require('express');
const cors = require('cors');
require('dotenv').config();
const createCheckoutSession = require('./api/checkout');

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors({origin:true}));

app.get('/', (req, res)=> res.send('Hello world'));

app.post('/create-checkout-session', createCheckoutSession);

app.listen(port, ()=> console.log('Server listening on port', port));