import { useRouter } from 'next/router';
import payST from "../../../styles/Payment.module.css";
import React from 'react';
import NavLink from 'next/link';
import { AmericanExpressCardIcon, DiscoverDinersCardIcon, JapanCreditBureauCardIcon, MasterCardIcon, RightCurvedArrow, UnionCardIcon, VisaCardIcon } from '../../utils/Icons/IconRightMark';
import StripeElement from './stripe/StripeElement';



const PackageSelected = ({selectedPackage}) => {
    const router = useRouter();
    // console.log(selectedPackage);
    
    const CardsInfo = [
        {card:"card", cardIcon: <MasterCardIcon  width={70} height={70} />},
        {card:"card", cardIcon: <VisaCardIcon  width={70} height={70} />},
        {card:"card", cardIcon: <AmericanExpressCardIcon  width={70} height={70} />},
        {card:"card", cardIcon: <DiscoverDinersCardIcon  width={70} height={70} />},
        {card:"card", cardIcon: <JapanCreditBureauCardIcon  width={70} height={70} />},
        {card:"card", cardIcon: <UnionCardIcon  width={70} height={70} />},
    ]
    return (
        <div>
            <h1 className='capitalize'>{selectedPackage.name} Package Details</h1>
            <div className={`m-auto p-10 capitalize ${payST.package_wrapper}`}>
                <div>
                    <div className={`d-flex justifyBetween`}>
                        <p>Total Characters per month:</p>
                        <p>{selectedPackage.character_limit}</p>
                    </div>
                    <div  className={`d-flex justifyBetween`}>
                        <p>Characters limit per convert:</p>
                        <p>{selectedPackage.character_limit_per_req}</p>
                    </div>
                    <div  className={`d-flex justifyBetween `}>
                        <p>Convert Per day:</p>
                        <p>{selectedPackage.req_per_day}</p>
                    </div>
                </div>
                <div>
                    <div  className={`d-flex justifyBetween `}>
                        <p>Base Price</p>
                        <p>{selectedPackage.duration === 'yearly' ? "12 X ":""}{selectedPackage.price}</p>
                    </div>
                    <div  className={`d-flex justifyBetween`}>
                        {
                            selectedPackage.duration === 'monthly' && <>
                                <p>{selectedPackage.duration} discount ({selectedPackage.discount_monthly}%)</p>
                                <p>- {(selectedPackage.price * (selectedPackage.discount_monthly/100)).toFixed(2)}</p>
                            </>
                        }
                        {
                            selectedPackage.duration === 'yearly' && <>
                                <p>{selectedPackage.duration} discount ({selectedPackage.discount_yearly}%)</p>
                                <p>- {(selectedPackage.price * (selectedPackage.discount_yearly/100)*12).toFixed(2)}</p>
                            </>
                        }
                        
                    </div>
                    <div  className={`d-flex justifyBetween`}>
                        <p>Special Discount ({selectedPackage.discount_special}%)</p>
                        {selectedPackage.duration === 'monthly' && <p>- {(selectedPackage.price * (selectedPackage.discount_special/100)).toFixed(2)}</p>}
                        {selectedPackage.duration === 'yearly' && <p>- {(12 * selectedPackage.price * (selectedPackage.discount_special/100)).toFixed(2)}</p>}
                    </div>
                    <div  className={`d-flex justifyBetween`} style={{borderTop:"1px solid #b6d37c70"}}>
                        <p>{selectedPackage.duration} total: </p>
                        <p>$ {selectedPackage.pay_amount?.toFixed(2)} </p>
                    </div>
                </div>
            </div>
            <div className={`${payST.payment_cards_wrapper}`}>
                <h2>Purchase {selectedPackage.name} Package</h2>
                <div className={`${payST.payment_cards}`}>
                    {
                        CardsInfo.map((singleCard,idx) =>  <div className={`d-flex justifyCenter ${payST.payment_card}`} key={`card-${idx}`}>
                            <NavLink 
                                href={{pathname:"/payment/[package_id]/[pay_card]",query:{package_id:router.query.package_id,pay_card:singleCard.card,amount:selectedPackage.pay_amount,duration:selectedPackage.duration}}}
                                passHref={true}
                            ><a>{singleCard.cardIcon}</a></NavLink>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PackageSelected;