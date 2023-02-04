import { Express } from 'express-serve-static-core'
import { createServer } from '../../src/server'
import mathRouter from '../../src/routes/math.routes'
import supertest from 'supertest';

let server: Express;

beforeAll(() => {
    server = createServer(mathRouter)
})

describe('math router', () => {
    describe('POST /addfortytwo', () => {
        it('should return 200 status if request succeeds', async () => {
            await supertest(server)
                .post('/addfortytwo')
                .send({input: 0})
                .expect(200)
        })
        it('should return 400 status if input fails validation', async () => {
            await supertest(server)
                .post('/addfortytwo')
                .send({input: 'abcdefg'})
                .expect(400)
        })
        it('should return 500 status if an error occures', async () => {
            await supertest(server)
                .post('/addfortytwo')
                .send({input: 0})
                .expect(500)
        })
    })
})