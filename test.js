var pug = require('pug')
var axios = require('axios')
var fs = require('fs')
let puggy = pug.compileFile("./Costes_new_order_customer.pug")

//let apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2VJRCI6MSwia2V5IjoiMTFlYjRmNjRjZDg1YmQzMDhlYTE5Zjg5Yzg2MTM2YTAiLCJpYXQiOjE2MDk4NTc5OTIsImV4cCI6MTY0MTM5Mzk5Mn0.09s0OIwNDDrJalYCytauSr4Bdo3e8UU6gPWbtgUiKGs'
let apiToken = ''


axios.interceptors.request.use(config => {
    config.headers['Accept'] = 'application/json'
    config.headers['Content-Type'] = 'application/json'
    config.headers['Authorization'] = 'Bearer '+apiToken
    return config
})

/*axios('https://zing9191.okeoke.io/api/v1/order/getOrder', {      
    method: 'post',
    data: {
        "orderUUID": "11EB71FAF438FBF0BDCD9DFF902D72A4", 
        "informational": true
    }
}).then(res => {
    console.log(res.data.items)
    
    let data = puggy({order: res.data})
    
    fs.writeFile('test.html', data, function (err) {
        if (err) return console.log(err);
    });
})*/

axios.get('https://booking.okeoke.io/api/v1/booking/uuid/11EBB8A0355282509829C79EDA7A1141', { }).then(res => {
    
    let data = puggy({booking: res.data.data})
    
    fs.writeFile('test.html', data, function (err) {
        if (err) return console.log(err);
    });
})