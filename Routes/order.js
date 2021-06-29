import express from 'express';
import {scheduleOrder} from '../apis/orderActions.js';

//const orderAct = require('./apis/orderActions')

const OrderRouter = express.Router();

OrderRouter.route('').get((req, res) => {
    res.send('GET route on orders.');
});

OrderRouter.route('/scheduleOrder/:orderId').post((req, res) => {
    const orderId = req.params.orderId;
    scheduleOrder(orderId);
});

export default OrderRouter;
