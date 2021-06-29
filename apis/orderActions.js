import {omsGet, omsPost, osLookupGetWithParams} from "./httpReq.js";

//const httpReq = require('./httpReq');

const xmlHeaders = { "headers": { "Content-Type": "application/xml" } };
const jsonHeaders = { "headers": { "Content-Type": "application/json" }};
const OS_PATH = '/mx-sams-order-srvc-lookup-app/services/v4/orders';
const OMS_PATH = '/smcfs/restapi/invoke/getOrderDetails'

export function scheduleOrder(orderId) {
    getOrderDetails(orderId).then(response => {
        console.log(response.data.OrderHeaderKey);
    }).catch(onerror => {
        console.log('error')
    });
}

export function getOrderDetails(orderId) {
    const reqBody = {
        "EnterpriseCode": "WM_GM",
        "DocumentType": "0001",
        "OrderNo": orderId
    }
    return omsPost(OMS_PATH, reqBody, jsonHeaders);
}

export function osLookupCall(orderId) {
    const params = {
        orderNo: orderId
    }
    return osLookupGetWithParams(OS_PATH, params);
}
