import { Router } from "express";
import { math } from "../controllers/math.controller";

const router = Router()

router.post('/addfortytwo', (req, res, next) => {
    const { input } = req.body
    if (typeof input !== 'number'){
        res.status(400).json({error: "'input' must be a number"})
    }
    const result = math.addFortyTwo(input)
    res.status(200).json({result})
})

export default router