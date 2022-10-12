import { useRouter } from 'next/router';
import React from 'react';
import StripeElement from '../../../client_side/components/payment/stripe/StripeElement';

const PayCard = () => {
    const router = useRouter();
    const {package_id,pay_card} = router.query;
    console.log({package_id,pay_card});


    return (
        <div>
            This is pay form button
            <StripeElement></StripeElement>
        </div>
    );
};

export default PayCard;