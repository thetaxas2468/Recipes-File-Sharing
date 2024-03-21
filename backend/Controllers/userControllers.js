
const User=require("../Models/userModel");
const crypt=require("crypto-js");
const jwt=require("jsonwebtoken");


const key=process.env.PASS_SECRET;
const secret=process.env.SECRET


const createToken = (id) => {
        return jwt.sign({ id }, secret.toString(), { expiresIn: 60 * 60 * 3 });
};

const signup = async (req,res)=>{
    const{email,password,}=req.body;
    if(!email || !password){
        return res.json({status:"error",statusMessage:"Please fill the email and password"})
    }
    let ciphertext=crypt.AES.encrypt(JSON.stringify(password),key.toString()).toString();
    try{
            const user=await User.create({email:email,password:ciphertext,firstname,lastname});
            const token=createToken(user.email);
            res.cookie("jwt", token, { httpOnly: false, maxAge: 1000 * 60 * 60 * 3 ,withCredentials:true});
            res.cookie("user", email, { httpOnly: false, maxAge: 1000 * 60 * 60 * 3 ,withCredentials:true});
            return res.json({user:user.email,token:token,status:"ok"})
    }
    catch(err){
        return res.json({status:"Error",statusMessage:"Email is taken"})
    }
}

const signin = (req,res)=>{
    const{email,password}=req.body;
    if(!email || !password){
        return res.json({status:"error",statusMessage:"Please fill the email and password"})
    }
    try{
            User.findOne({"email":email}).then((result)=>{
                    if(!result){
                            return res.json({status:"error",statusMessage:"Cannot find the user"})
                    }
                    var bytes = crypt.AES.decrypt(result.password, key);
                    var decryptedData = JSON.parse(bytes.toString(crypt.enc.Utf8));
                    if(decryptedData===password){
                            const token=createToken(email);
                            res.cookie("jwt", token, { httpOnly: false, maxAge: 1000 * 60 * 60 * 3 ,withCredentials:true});
                            res.cookie("user", email, { httpOnly: false, maxAge: 1000 * 60 * 60 * 3 ,withCredentials:true});
                            return res.json({status:"done"})
                    }
                            else{
                            return res.json({status:"error",statusMessage:"Password is wrong"})
                            }
            })
    }
    catch(err){
            return res.json({status:"error",statusMessage:"Exception has occured"});
    }
}

const signout = (req,res)=>{
    res.cookie("jwt","",{maxAge:1})
    res.cookie("user","",{maxAge:1})
    return res.json({status:"done"})
}


module.exports = {signin,signout,signup}