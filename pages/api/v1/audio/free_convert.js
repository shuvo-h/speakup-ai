import nextHandler from "next-connect";
import { convertAudioCtl, convertFreeAudioCtl } from "../../../../server_side/controllers/audioController";
import { checkRequestIpLimit } from "../../../../server_side/middleware/convertMiddleware";

// @request POST: /api/v1/audio/convert?convertCard_id=${convertCard._id}`
// @body: {text:"lorem",lang:"en-US"}

export const config = {
    api: {
      responseLimit: '20mb',
    },
}

const handler = nextHandler();


// alwaus check limit for requested ip address
handler.use(checkRequestIpLimit)

// convwert the audio file
handler.post(convertFreeAudioCtl);

export default handler;

