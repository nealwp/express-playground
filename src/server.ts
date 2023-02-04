import express, { Router } from 'express'
import bodyParser from 'body-parser'

const createServer = (router: Router) => {
    const server = express()

    server.use(
        bodyParser.json(),
        bodyParser.urlencoded({extended: true})
    )

    server.get('/', (req, res, next) => {
        res.sendStatus(200)
    })

    server.get('/health', (req, res, next) => {
        res.sendStatus(200)
    })

    server.use(router)

    return server;
}

export { createServer }