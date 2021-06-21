import express, {Application, Request, Response, NextFunction} from 'express'
import logging from './config/logging'
import config from './config/config'
import routes from './routes/root'

const NAMESPACE = "Server"
const app = express()

app.use((req: Request, res: Response, next: NextFunction) => {
    res.on('finish', (): void => {
        logging.info(NAMESPACE, `${req.method} ${req.url}`, res.statusCode)
    })
    next()
})

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(routes)

app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not Found')
    next(error)
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        error: err,
        message: err.message
    })
})

app.listen(config.server.port, (): void => {
    logging.info(NAMESPACE, `Listening to requests on ${config.server.hostname}:${config.server.port}`)
})