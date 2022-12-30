function errHandler (err, req, res, next){
    const statusCode = res.StatusCode ? resStatusCode : 500
    res.status(statusCode)
    res.json({
        message: err.message,
        stackTrace: process.env.NODE_ENV === 'development'? err.stackTrace: null
    })
} 

module.exports = {
    errHandler,
};