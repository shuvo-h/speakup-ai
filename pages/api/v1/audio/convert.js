import nextHandler from "next-connect";
import { convertAudioCtl } from "../../../../server_side/controllers/audioController";
import { checkLogin } from "../../../../server_side/middleware/AuthMiddleware";
import { checkCardLimit } from "../../../../server_side/middleware/convertMiddleware";

// @request POST: /api/v1/audio/convert?convertCard_id=${convertCard._id}`
// @body: {text:"lorem",lang:"en-US"}

export const config = {
    api: {
      responseLimit: '20mb',
    },
}

const handler = nextHandler();

// check if compare the password, create and send JWT
handler.use(checkLogin)
// alwaus check card limit
handler.use(checkCardLimit)

// convwert the audio file
handler.post(convertAudioCtl);

export default handler;

