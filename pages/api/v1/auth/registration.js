import nextHandler from "next-connect";
import { addNewUserCtl } from "../../../../server_side/controllers/userCtl";
import { checkEmailExist, makeHashPassword } from "../../../../server_side/middleware";
const handler = nextHandler();

// check if email is exist, hash the password
handler.post(checkEmailExist,makeHashPassword,addNewUserCtl);

export default handler;