const router=require("express").Router();
const { signout, signup, signin } = require("../Controllers/userControllers");
const { checkIfLoggedIn } = require("../Middlewares/Autherization");



router.post("/signin", signin)
router.post("/signup",signup)
router.get("/logout",checkIfLoggedIn,signout)



module.exports=router;