import Cookies from 'js-cookie';

export const cookieGetConvertCard = (convertCardInfo) =>{
    const card = Cookies.get("convert_card") ? JSON.parse(Cookies.get("convert_card")) : {}
    return card;
}