import express, { Router } from 'express'

const createServer = (router: Router) => {
    const server = express()

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