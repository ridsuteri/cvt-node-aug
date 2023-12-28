const sampleMiddleware = (req, res, next)=>{
    // console.log('we are inside a middleware');
    next();
}

module.exports = sampleMiddleware;