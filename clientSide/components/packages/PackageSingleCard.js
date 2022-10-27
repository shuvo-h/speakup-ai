import { useRouter } from 'next/router';
import React from 'react';
import packageST from "../../../styles/package.module.css";
import {IconRightMark} from '../../utils/Icons/IconRightMark';
import { pkgDuration } from './PackageCards';

const PackageSingleCard = ({pkgBtnlight,pkgIdx,packageEl,user}) => {
    const router = useRouter();
    const {} = useAuth
    const getPaymentStarthandler = (packageID) =>{
        // check is user loggedin
        if (user.token) {
            router.push({pathname:`/payment/${packageID}`,query:{duration:pkgBtnlight}})
        }else{
            router.push({pathname:"/login"})
        }
    }
    return (
        <div className={packageST.package_wraper}>
            <div className={packageST.package}>
                <h3 className={`m-0 text-center ${packageST.commercial} ${pkgIdx === 2 ?packageST.commercial_light :""}`}>{packageEl.commercial}</h3>
                <div className='p-6'>
                    <div>
                        <h1 className={`text-center ${packageST.package_title}`}>{packageEl.name}</h1>
                        <div className={packageST.dicountNotice}>
                            <p className={`p-0`}><span>{packageEl[packageEl.discountCal]}% discount  {packageEl.discount_special > 0 ? `with special ${packageEl.discount_special}%`:""}</span></p>
                        </div>
                        <div className={packageST.price}>
                            {
                                packageEl.price_original !== packageEl.price_with_discount 
                                ? <h2><del>${packageEl.price_original}</del><span>${packageEl.price_with_discount}</span></h2>
                                : <h2>${packageEl.price_original}</h2>
                            }
                        </div>
                        <p className='text-center' style={{textTransform:"capitilize"}}>{packageEl.category}</p>
                        {/* <p>per {`${pkgBtnlight === pkgDuration.year? pkgDuration.year:pkgDuration.month}`}</p> */}
                        <button className={`m-auto ${packageST.pkg_btn}`} onClick={()=>getPaymentStarthandler(packageEl._id)}>Get started</button>
                    </div>
                    <div className={`${packageST.pkg_info_list}`}>
                        <ul>
                            <li className={`d-flex alignCenter`}><IconRightMark width={18} height={18}/>{packageEl.character_limit} characters per month</li>
                            <li className={`d-flex alignCenter`}><IconRightMark width={18} height={18}/>{packageEl.character_limit_per_req} characters per convert</li>
                            <li className={`d-flex alignCenter`}><IconRightMark width={18} height={18}/>{packageEl.req_per_day} converts per day</li>
                            
                            <li className={`d-flex alignCenter`}><IconRightMark width={18} height={18}/>{packageEl.fileTypes?.length} types of audio file</li>
                            <li className={`d-flex alignCenter`}><IconRightMark width={18} height={18}/>{packageEl.languages?.length} languages</li>
                            
                            <li className={`d-flex alignCenter`}><IconRightMark width={18} height={18}/>{packageEl.download ? "allow download":"No"}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageSingleCard;