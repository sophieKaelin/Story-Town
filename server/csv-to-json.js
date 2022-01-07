// Solution based off https://stackabuse.com/reading-and-writing-csv-files-with-node-js/

const csv = require("csv-parser")
const e = require("express")
const fs = require("fs")

var writeStream = fs.createWriteStream("./test.json")
writeStream.write('{"data":[')
var first = true
fs.createReadStream("../test.csv")
    .pipe(csv())
    .on("data", (row) => {
        if (first) {
            first = !first
        } else {
            writeStream.write(",")
        }
        writeStream.write(JSON.stringify(row))
    })
    .on("end", () => {
        console.log("CSV file successfully processed")
        writeStream.write("]}")
    })

writeStream.on("error", function (err) {
    console.log(err)
})
