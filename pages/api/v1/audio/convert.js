import nextHandler from "next-connect";
import { convertAudioCtl } from "../../../../server_side/controllers/audioController";
export const config = {
    api: {
      responseLimit: '20mb',
    },
}

const handler = nextHandler();

// check if compare the password, create and send JWT
handler.post(convertAudioCtl);

export default handler;

