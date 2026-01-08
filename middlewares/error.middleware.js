const errorMiddleware = (err, req, res, next) => {
    try {
         let error = { ...err };
         error.message = err.message;
         console.error(error);

         if(err.name === 'CastError') {
             error = new Error('Resource not found');
             error.status = 404;
         }

         if(err.code === 11000) {
             error = new Error('Duplicate field value entered');
             error.status = 404;
         }

         if(err.name === 'ValidationError') {
             error = new Error((Object.values(err.error).map(val => val.message)).join(','));
             error.status = 400;
         }

         res.status(error.statusCode || 500).json({success: false, message: error.message || 'Server Error'});
    }  catch (error) {
        next(error);
    }
};

export default errorMiddleware;

// err = what happened last