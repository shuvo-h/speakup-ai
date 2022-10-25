import nextHandler from 'next-connect';
import { getTestIpCtl } from '../../../../server_side/controllers/testIpController';

const handler = nextHandler();

handler.get(getTestIpCtl)

export default handler;