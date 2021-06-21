const getTimeStamp = (): string => {
    return new Date().toISOString()
}

export default {
    info: (namespace: string, message: string, object?: any): void => {
        if (object) {
            console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object)
            return
        }
        console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`)
    },

    error: (namespace: string, message: string, object?: any): void => {
        if (object) {
            console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object)
            return
        }
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`)
    },
    warn: (namespace: string, message: string, object?: any): void => {
        if (object) {
            console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object)
            return
        }
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`)
    },
    debug: (namespace: string, message: string, object?: any): void => {
        if (object) {
            console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object)
            return
        }
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`)
    }
}