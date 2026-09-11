export const notFoundHandler = (req, res, next) => {
    const error = new Error("error" + req.originalUrl);
    error.status = 404;
    next(error);
};

export const finalErrorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = status === 500 ? "Internal Server Error (Check Server Logs)" : err.message;
    console.log(err);
    res.status(status).json({
        error: true,
        status,
        message
    });

};