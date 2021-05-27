var pug = require('pug')
var axios = require('axios')
var fs = require('fs')
let puggy = pug.compileFile("./costes_booking_confirmed.pug")

//let apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VVVUlEIjoiIiwicGxheWVySUQiOm51bGwsInVzZXJVVUlEIjoiMTFFQjkwODM2MDRENUI1MEJCQTVDMTFDOEVBMTVBOUYiLCJ0b2tlblR5cGUiOiJ1c2VyIiwidG9rZW5VVUlEIjoiMTFlYmFmOGJiNGI0YjlmMDhjNjQ4MTA3MDEyYzMyNmMiLCJpYXQiOjE2MjA0MzAwMTMsImV4cCI6MTYyMzAyMjAxM30.ihlVh9SRb6Vvc4pQx70HvZhHW6XrsbCrXE7uMDGqfpo'
let apiToken = ''


axios.interceptors.request.use(config => {
    config.headers['Accept'] = 'application/json'
    config.headers['Content-Type'] = 'application/json'
    config.headers['Authorization'] = 'Bearer '+apiToken
    return config
})

/*axios('https://pipi3131.okeoke.io/api/v1/order/getOrder', {      
    method: 'post',
    data: {
        "orderUUID": "11EBBEC71EA6F680AFE2C126F13A46A0", 
        "informational": true
    }
}).then(res => {
    console.log(res.data)
    
    let data = puggy({order: res.data})
    
    fs.writeFile('test.html', data, function (err) {
        if (err) return console.log(err);
    });
})*/

axios.get('https://booking.okeoke.io/api/v1/booking/uuid/11EBBEDFC1C85C109409CDF27524625E', { }).then(res => {
    console.log(res.data.data)
    let moment = require('moment')
    let data = puggy({booking: res.data.data, moment})
    
    fs.writeFile('test.html', data, function (err) {
        if (err) return console.log(err);
    });
})