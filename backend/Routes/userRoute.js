const router=require("express").Router();
const { signout, signup, signin } = require("../Controllers/userControllers");



router.post("/signin", signin)


router.post("/signup",signup)
router.get("/logout",signout)



module.exports=router;