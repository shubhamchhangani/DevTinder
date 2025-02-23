function adminAuth(req, res, next){
    const token  = "abc"
    const isAuthorized = token === "abc"
    if(isAuthorized){
        next();
    }else{
        res.send("you are not authorized admin")
    }
}

function userAuth(req, res, next){
    const token = "xyz";
    const isAuthorized = token === "xyz";
    if(isAuthorized){
        next();
    }else{
        res.send("you are not authorized user");
    }
}

module.exports = {
    adminAuth,
    userAuth
}