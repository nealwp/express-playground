import { Router } from "express";

const router = Router()

router.post('/addfortytwo', (req, res, next) => {
    const { input } = req.body
    if (typeof input !== 'number'){
        res.status(400).json({error: "'input' must be a number"})
    }

    res.status(200).json({result: 0})
})

export default router