import express, { Request, Response, NextFunction } from 'express'
const router = express.Router()

router.get('/user', async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        user: {
            name: 'John Doe'
        }
    })
})

export default router;