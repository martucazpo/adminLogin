const express = require("express")
const app = express()
const cors = require("cors")
const routes = require("./routes")
const auth = require("./auth")
const config = require("./utils/config")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(config.cors))

auth(app)

app.use(routes)

require("./db")(app)

module.exports = app;

