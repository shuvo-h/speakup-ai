import nextHandler from "next-connect";
import { allPackagesCtl, packageAddCtl } from "../../../../server_side/controllers/packageController";

const handler = nextHandler();

// check if compare the password, create and send JWT
handler.post(packageAddCtl).get(allPackagesCtl);

export default handler;

