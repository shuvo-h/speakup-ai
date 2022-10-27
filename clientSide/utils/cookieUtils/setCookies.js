import Cookies from 'js-cookie';


export const cookieSetConvertCard = (convertCardInfo) =>{
    Cookies.set('convert_card',JSON.stringify(convertCardInfo),{expires:(1/1440)*24*60}) // 1 day
}