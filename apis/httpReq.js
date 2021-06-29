import axios from 'axios';

//const axios = require('axios');

const omsHost = process.env.OMS_URL
const imsHost = process.env.IMS_URL
const osLookupHost = process.env.OS_LOOKUP_URL

export function omsPost(path, payload, reqHeaders) {
    return axios.post(omsHost + path, payload, reqHeaders)
        .then(response => {
            return response.data
        })
        .catch(function (error) {
            throw error;
        });
}

export function omsGet(path) {
    return axios.get(omsHost + path)
        .then(response => {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function omsGetWithParams(path, params) {
    return axios.get(omsHost + path, params)
        .then(response => {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function osLookupGet(path) {
    return axios.get(osLookupHost + path)
        .then(response => {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function osLookupGetWithParams(path, params) {
    return axios.get(osLookupHost + path, params)
        .then(response => {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function imsPost(path, payload, reqHeaders) {
    return axios.post(imsHost + path, payload, reqHeaders)
        .then(response => {
            return response.data
        })
        .catch(function (error) {
            throw error;
        });
}

export function imsGet(path) {
    return axios.get(imsHost + path)
        .then(response => {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });
}