import nextHandler from "next-connect";
import { getPackageByIdCtl } from "../../../../server_side/controllers/packageController";
const handler = nextHandler();

// /api/v1/package/:productID?duration=yearly
handler.get(getPackageByIdCtl);

export default handler;

