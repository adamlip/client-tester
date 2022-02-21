var pug = require('pug')
var axios = require('axios')
var fs = require('fs')
let puggy = pug.compileFile("./booking_costes/costes_booking_payment_reminder.pug")

//let apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VVVUlEIjoiIiwicGxheWVySUQiOm51bGwsInVzZXJVVUlEIjoiMTFFQjkwODM2MDRENUI1MEJCQTVDMTFDOEVBMTVBOUYiLCJ0b2tlblR5cGUiOiJ1c2VyIiwidG9rZW5VVUlEIjoiMTFlYmFmOGJiNGI0YjlmMDhjNjQ4MTA3MDEyYzMyNmMiLCJpYXQiOjE2MjA0MzAwMTMsImV4cCI6MTYyMzAyMjAxM30.ihlVh9SRb6Vvc4pQx70HvZhHW6XrsbCrXE7uMDGqfpo'
let apiToken = ''


axios.interceptors.request.use(config => {
    config.headers['Accept'] = 'application/json'
    config.headers['Content-Type'] = 'application/json'
    config.headers['Authorization'] = 'Bearer '+apiToken
    return config
})

// axios('https://pnrvqvmru.okeoke.io/api/v1/order/getOrder', {      
//     method: 'post',
//     data: {
//         "orderUUID": "11EBC2D2D7152520A37267082F9D32C6", 
//         "informational": true
//     }
// }).then(order => {
//     console.log(order.data)
//     axios('https://pnrvqvmru.okeoke.io/api/v1/location/one/' + order.data.locationUUID, {      
//     method: 'get'
//     }).then(location => {
//         console.log(JSON.stringify(location.data, null, 2))
        
//         let data = puggy({order: order.data, location: location.data})
        
//         fs.writeFile('test.html', data, function (err) {
//             if (err) return console.log(err);
//         });
//     })
// })

axios.get('https://bookingdev.okeoke.io/api/v1/booking/uuid/11EBD991B5815750AF74DBE06699AC1A', { }).then(res => {
    console.log(res.data.data)
    let moment = require('moment')
    let data = puggy({booking: res.data.data, moment})
    
    fs.writeFile('test.html', data, function (err) {
        if (err) return console.log(err);
    });
})