// getUserCtl
import nextHandler from "next-connect";
import { getUserCtl } from "../../../../server_side/controllers/userCtl";
import { generateUserToken } from "../../../../server_side/middleware";
const handler = nextHandler();

// check if compare the password, create and send JWT
handler.post(generateUserToken,getUserCtl);

export default handler;

