import { Router } from "express";

const router = Router()

router.post('/addfortytwo', (req, res, next) => {
    const { input } = req.body
    console.log(req.body)
    if (typeof input !== 'number'){
        res.sendStatus(400)
    }
    res.sendStatus(200)
})

export default router