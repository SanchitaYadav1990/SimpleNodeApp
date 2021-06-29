import express from 'express';
const ShipmentRouter = express.Router();

ShipmentRouter.route('/').get((req, res) => {
    res.send('GET route on shipment.');
});

export default ShipmentRouter;
