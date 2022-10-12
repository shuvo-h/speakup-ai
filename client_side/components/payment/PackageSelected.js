import { useRouter } from 'next/router';
import payST from "../../../styles/Payment.module.css";
import React from 'react';
import { AmericanExpressCardIcon, DiscoverDinersCardIcon, JapanCreditBureauCardIcon, MasterCardIcon, UnionCardIcon, VisaCardIcon } from '../../utils/Icons/IconRightMark';
import StripeElement from './stripe/StripeElement';



const PackageSelected = ({selectedPackage}) => {
    const router = useRouter();
    console.log(selectedPackage);
    
    return (
        <div>
            <h1>PackageSelected Page</h1>
            <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)"}}>
                <div>
                    <h2>{selectedPackage.name}</h2>
                    <div>
                        <p>Total Characters per month:</p>
                        <p>{selectedPackage.character_limit}</p>
                    </div>
                    <div>
                        <p>Characters limit per convert:</p>
                        <p>{selectedPackage.character_limit_per_req}</p>
                    </div>
                    <div>
                        <p>Convert Per day:</p>
                        <p>{selectedPackage.req_per_day}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Base Price</p>
                        <p>${selectedPackage.price}</p>
                    </div>
                    <div>
                        
                        {selectedPackage.duration === 'monthly' && <p>{selectedPackage.duration} discount {selectedPackage.discount_monthly}% discount</p>}
                        {selectedPackage.duration === 'yearly' && <p>{selectedPackage.duration} discount {selectedPackage.discount_yearly}%</p>}
                    </div>
                    <div>
                        <p>Special Discount</p>
                        <p>{selectedPackage.discount_special}%</p>
                    </div>
                    <div>
                        <p>{selectedPackage.duration} total: </p>
                        <p>${selectedPackage.pay_amount} </p>
                    </div>
                </div>
            </div>
            <div>
                <h3>Purchase {selectedPackage.name} Package</h3>
                <div>
                    <div onClick1={()=>router.push({pathname:"/payment/[package_id]/[pay_card]",query:{package_id:router.query.package_id,pay_card:"master_card"}})}>
                        <MasterCardIcon  width={70} height={70} />
                    </div>
                    <div onClick1={()=>router.push({pathname:"/payment/[package_id]/[pay_card]",query:{package_id:router.query.package_id,pay_card:"american_express"}})}>
                        <AmericanExpressCardIcon  width={70} height={70} />
                    </div>
                    <div onClick1={()=>router.push({pathname:"/payment/[package_id]/[pay_card]",query:{package_id:router.query.package_id,pay_card:"american_express"}})}>
                        <VisaCardIcon  width={70} height={70} />
                    </div>
                    <div onClick1={()=>router.push({pathname:"/payment/[package_id]/[pay_card]",query:{package_id:router.query.package_id,pay_card:"american_express"}})}>
                        <DiscoverDinersCardIcon  width={70} height={70} />
                    </div>
                    <div onClick1={()=>router.push({pathname:"/payment/[package_id]/[pay_card]",query:{package_id:router.query.package_id,pay_card:"american_express"}})}>
                        <JapanCreditBureauCardIcon  width={70} height={70} />
                    </div>
                    <div onClick1={()=>router.push({pathname:"/payment/[package_id]/[pay_card]",query:{package_id:router.query.package_id,pay_card:"american_express"}})}>
                        <UnionCardIcon  width={70} height={70} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageSelected;