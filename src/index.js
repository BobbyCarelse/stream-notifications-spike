require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { AppRouter } = require('./app/routes')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', AppRouter)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`listening on PORT:${PORT}`))
