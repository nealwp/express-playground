import { Express } from 'express-serve-static-core'
import { Router } from 'express';
import { createServer } from '../src/server'
import supertest from 'supertest';

let server: Express;
const nullRouter = Router()

beforeAll(() => {
    server = createServer(nullRouter)
})

describe('api root', () => {
    describe('GET /', () => {
        test('should return 200 & empty object', async () => {
            await supertest(server)
                .get(`/`)
                .expect(200)
                .then((res) => {
                    expect(res.body).toMatchObject({})
                })
        })
    }),
    describe('GET /health', () => {
        test('should return 200 & empty object', async () => {
            await supertest(server)
                .get(`/health`)
                .expect(200)
                .then((res) => {
                    expect(res.body).toMatchObject({})
                })
        })
    })
})