const app = require('express')()
const ramazanRouter = require('./routes/index')
require('dotenv-safe/config')

app.use('/', ramazanRouter)

app.listen(process.env.PORT, (err) => {
    if (err) throw err
    console.log(`Site ${process.env.PORT} portunda çalışıyor.`)
})
