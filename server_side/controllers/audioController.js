const Gtts = require('gtts');


export const convertAudioCtl = async(req,res,next) =>{
    const {text,lang} = req.body;
    // check if language is accurate
   try {
       const gtts = new Gtts(text, lang);
        //    gtts.stream().pipe(res);  // short form
        const audioReadableStream = gtts.stream();
        // pipe this stream with res to send to client
        audioReadableStream.pipe(res);

        // calculate size of the stream data
        let audioSize = 0; // 0 Bytes
        audioReadableStream.on('data',(chunk)=>{
            // console.log((audioSize/(1024*1024)).toFixed(2)," MB");
            audioSize += chunk.length;
        })
        
        audioReadableStream.on('end',()=>{
            console.log("Audio size = ", audioSize/(1024*1024)," MB");
             res.status(200).send("abc");
        })
        audioReadableStream.on('error',(err)=>{
           console.log(err);
            res.status(501).send();
        })
        
   } catch (error) {
    console.log(error);
    res.status(500).json({error:true,message:error.message})
   }
}



