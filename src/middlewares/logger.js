const logger = (req, res, next) => {
    console.log(req.method + " - URL: " + req.originalUrl)
    next()
}

export default logger