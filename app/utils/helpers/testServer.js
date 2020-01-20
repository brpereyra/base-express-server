const express = require('express')
const superTest = require('supertest')
const indexRouter = require('../../routes/index.routes')

module.exports = {
    server() {
        const app = express()
        app.use(indexRouter)
        return superTest(app)
    }
}
