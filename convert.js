var fs = require('fs')

fs.readFile("./costes_booking_payment_timeout.pug", 'utf8', function (err, data) {
    if (err) return console.log(err)
    let words = data.replace(/\r?\n|\r/g, "\\n\\r");
    //console.log(words)
    fs.writeFile('convert.txt', words, function (err) {
        if (err) return console.log(err);
    });
})
