import { Express } from 'express-serve-static-core'
import { createServer } from '../../src/server'
import mathRouter from '../../src/routes/math.routes'
import supertest from 'supertest';

let server: Express;

beforeAll(() => {
    server = createServer(mathRouter)
})

describe('math router', () => {

    /**
     * Here we are testing that the route *behaves* as expected, given each possible condition. We
     * are **NOT** testing that the route is performing the underlying action correctly. We don't
     * care if `/addfortytwo` actually does the math correctly, only that it can receive an input of
     * type `{input: number}` and return a result of type `{result: number}`.
     */
    describe('POST /addfortytwo', () => {
        /**
         * A route is responsible for receiving requests and sending appropriate responses. We
         * don't care what controller/function this route calls, or what inputs said 
         * controller/function is called with. 
         */
        it('should return 200 status and result payload if request succeeds', async () => {
            await supertest(server)
                .post('/addfortytwo')
                .send({input: 0})
                .expect(200)
                .then(res => {
                    expect(res.body.result).toBeDefined()
                    expect(typeof res.body.result).toEqual('number')
                })
        })
        /**
         * Here we ensure that if the input is an invalid, we get a 400 response
         */
        it('should return 400 status if input fails validation', async () => {
            await supertest(server)
                .post('/addfortytwo')
                .send({input: 'abcdefg'})
                .expect(400)
                .then(res => {
                    expect(res.body).toEqual({error: "'input' must be a number"})
                })
        })
    })
})