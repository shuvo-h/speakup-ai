const Gtts = require('gtts');

export const convertAudioCtl = async(req,res,next) =>{
    const {text,lang} = req.body;
    const {convertCard_id} = req.query;
    // check if language is accurate
   try {
        // step 1: set the response header
        // step 2: pipe the stream to res when stream is available, eg. after file opening
        // step 3: count the file size as a chunk while data available
        // step 4: end the response when stream file is ended
        // step 5: end the response when error occured
        
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
        res.writeHead(206, {
            'size': audioSize,
            'Content-Type': 'audio/mpeg',
            'accept-ranges': 'bytes',
        });
        
        audioReadableStream.on('end',async()=>{
            // console.log("Audio size = ", audioSize/(1024*1024)," MB");
            // before ending the response, update the convertCard: file_count,size,-req_per_day_reamining,character_limit_reamining
            const cardUpdateRes = await updateConvertCardAfterConvert(convertCard_id,{size:audioSize,text})
            res.end();
        })
        audioReadableStream.on('error',(err)=>{
           console.log(err.message);
           res.sendStatus(404);
        })
        
   } catch (error) {
    console.log(error);
    res.status(500).json({error:true,message:error.message})
   }
}

/*
export const convertAudioCtl = async(req,res,next) =>{
    const {text,lang} = req.body;
    // check if language is accurate
   try {
        // step 1: set the response header

        // step 2: pipe the stream to res when stream is available, eg. after file opening
        // step 3: count the file size as a chunk while data available
        // step 4: end the response when stream file is ended
        // step 5: end the response when error occured
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
            // console.log("Audio size = ", audioSize/(1024*1024)," MB");
            res.end();
        })
        audioReadableStream.on('error',(err)=>{
           console.log(err.message);
            res.end();
        })
        
   } catch (error) {
    console.log(error);
    res.status(500).json({error:true,message:error.message})
   }
}

*/

