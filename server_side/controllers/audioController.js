const Gtts = require('gtts');

export const convertAudioCtl = async(req,res,next) =>{
    const {text,lang} = req.body;
    // check if language is accurate
   try {
       const gtts = new Gtts(text, lang);
       gtts.stream().pipe(res);
    
   } catch (error) {
    console.log(error);
    res.status(500).json({error:true,message:error.message})
   }
}