var fs = require('fs')

fs.readFile("./Raiker_new_order_customer.pug", 'utf8', function (err, data) {
    if (err) return console.log(err)
    let words = data.replace(/\\r?\\n|\\r|\\n/g, '\r');
    //console.log(words)
    fs.writeFile('convertBack.txt', words, function (err) {
        if (err) return console.log(err);
    });
})
