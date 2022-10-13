import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import MainLayout from '../../../client_side/components/common/MainLayout';
import PaySubNav from '../../../client_side/components/payment/PaySubNav';
import StripeElement from '../../../client_side/components/payment/stripe/StripeElement';
import PrivateComponent from '../../../client_side/components/ProtectedComponents/PrivateComponent';
import useAuthFromCookie from '../../../client_side/hooks/useAuthFromCookie';
import { envCLientInfo } from '../../../client_side/utils/envCLientInitializer';
import { RightArrowIcon } from '../../../client_side/utils/Icons/IconRightMark';

const PayCard = () => {
    const router = useRouter();
    const {user,isUserLoading} = useAuthFromCookie();
    const {package_id,pay_card,amount,duration} = router.query;
    // console.log({package_id,pay_card});
    console.log(router.query);
    const paymentPageStepShow = [
        {name:"package",pathname:`/payment/${package_id}?duration=${duration}`, icon: <RightArrowIcon width={30} height={30} />, diable:false},
        {name:"purchase order",pathname:`/payment/${package_id}?duration=${duration}`, icon: <RightArrowIcon />, diable:false},
        {name:"payment",pathname:"", diable:true},
    ]
    
    
    if(isUserLoading || !router.isReady){
        return <p>Loading.........</p>
    }
    if (!package_id || !pay_card || !amount || !duration) {
        router.push({pathname:"/pricing"})
    }
    return (
        <MainLayout>
            <PrivateComponent>
                <div>
                    <PaySubNav paymentPageStepShow={paymentPageStepShow}></PaySubNav>
                </div>
                <div>
                    <StripeElement user={user} amount={amount} duration={duration} pay_card={pay_card} package_id={package_id}></StripeElement>
                </div>
            </PrivateComponent>
        </MainLayout>
    );
};

export default PayCard;