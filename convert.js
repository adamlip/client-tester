var fs = require('fs')

fs.readFile("./defaults/order_status_ready.pug", 'utf8', function (err, data) {
    if (err) return console.log(err)
    let words = data.replace(/\r?\n|\r/g, "\\n\\r");
    //console.log(words)
    fs.writeFile('convert.txt', words, function (err) {
        if (err) return console.log(err);
    });
})

console.log("done")
