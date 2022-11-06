const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const db = require('./config/db')
const rootRoutes = require('./routes/rootRoutes')

db()
app.use(cors())
app.use(express.json())

app.use('/', rootRoutes)

app.use('/', (req,res) => {
    res.send('I Think All Okay')
})

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})