import nextHandler from "next-connect";
import { getSingleConvertCardCtl } from "../../../../server_side/controllers/convertCardController";

const handler = nextHandler();

handler.get(getSingleConvertCardCtl)

export default handler;