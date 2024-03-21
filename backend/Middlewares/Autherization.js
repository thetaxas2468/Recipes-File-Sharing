
const secret=process.env.SECRET
const jwt=require("jsonwebtoken");


const checkIfLoggedIn = (req,res,next) => {
    const token= req.cookies.jwt;
    jwt.verify(token, secret, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        res.locals.loggedUser = user;
        return next();
    });
}

module.exports = { checkIfLoggedIn }