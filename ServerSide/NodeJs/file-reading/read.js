const {readFile} = require("fs")
readFile("./19_March.txt", 'utf8', (err, data) => {
    if(err) throw err
    console.log(data)
})