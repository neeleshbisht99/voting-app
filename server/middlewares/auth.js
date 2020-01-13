const jwt=require('jsonwebtoken');
module.exports=(req,res,next) => {

    if(req.headers['authorization']){
            const token=req.headers['authorization'].split(' ')[1];
              jwt.verify(token, new Buffer(process.env.SECRET,'base64'), (err,decoded)=>{
                if(err){
                    // console.log(err);
                    // console.log("inside middleware with error");
                    next(Error('Failed to authenticate token'));
                }
                else{
                    req.decoded=decoded;
                    // console.log("inside middleware no error")
                    next();
                }
            })
    }
    else{
        next(Error("No token provided"));
    }
}

