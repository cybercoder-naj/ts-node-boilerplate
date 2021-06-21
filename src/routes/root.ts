import express, {Request, Response, NextFunction} from 'express'
import rootApi from './api/rootApi'
const router = express.Router()

router.use('/api', rootApi)

/* Routes */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        message: 'Hello World'
    })
})

export default router;