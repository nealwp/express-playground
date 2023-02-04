import { Router } from 'express'
import mathRouter from './math.routes'

const router = Router()

router.use('/math', mathRouter)

export { router }
