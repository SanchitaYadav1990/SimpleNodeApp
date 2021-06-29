
import express from 'express';
import dotenv from 'dotenv'
import ShipmentRouter from './Routes/shipment.js';
import OrderRouter from './Routes/order.js'

if(process.env.NODE_ENV) {
    dotenv.config({path: `gs/.env.${process.env.NODE_ENV}`});
} else {
    dotenv.config();
}
const app = express();
const port = process.env.PORT || 5000;

app.use('/order', OrderRouter);
app.use('/shipment', ShipmentRouter);

app.get('/', function (req, res) {
    res.send('GET route on server.');
});

//console.log("var - " + process.env.VA);

app.listen(port, () => {
    console.log('app started on port ' + port);
});

// NODE_ENV=qa1 npm start