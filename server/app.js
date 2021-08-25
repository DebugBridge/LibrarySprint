const express = require('express')
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:3000', methods: 'GET, POST, PATCH, PUT, DELETE' }))

module.exports = app;