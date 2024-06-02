const express = require('express')
const cors = require('cors')
require('dotenv').config()

const errorHandler = require('./Middlewares/errorHandler')
const connectDB = require('./Config/db')

const app = express()

// middlewards
app.use(express.json())
app.use(cors())


app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

// prodcut api
app.use('/api/products', require('./Routes/productRoutes'))

app.use(errorHandler)

// running the server
app.listen(process.env.PORT, () => {
    console.log(`Listening to the PORT ${process.env.PORT}`)
    connectDB()
})