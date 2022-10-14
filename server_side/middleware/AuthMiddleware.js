export const checkLogin = async (req,res,next) =>{

    const token = req.headers?.authorization?.startsWith("Bearer " ) ? req.headers?.authorization?.split(" ")[0] : null;
    console.log(token);
    if (token) {
        res.send({message: "Need to write code for check login middleware"})
    }else{
        res.status(401).json({error:true,message:"Authentication required!"})
    }
}