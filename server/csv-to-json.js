// Solution based off https://stackabuse.com/reading-and-writing-csv-files-with-node-js/
import csv from "csv-parser"
import fs from "fs"

const csvToJson = () => {
    var writeStream = fs.createWriteStream("./data/test.json")
    writeStream.write('{"data":[')
    var first = true
    fs.createReadStream("./data/test.csv")
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
}

export { csvToJson }
