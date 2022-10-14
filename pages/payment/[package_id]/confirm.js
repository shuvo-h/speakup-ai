import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MainLayout from '../../../client_side/components/common/MainLayout';
import PrivateComponent from '../../../client_side/components/ProtectedComponents/PrivateComponent';
import purchaseSuccessImg from "../../../client_side/assets/card/purchase_success.png";
import paymentST from "../../../styles/Payment.module.css";
import NavLink from "next/link"
import useAuthFromCookie from '../../../client_side/hooks/useAuthFromCookie';

const Confirm = () => {
    const router = useRouter();
    const {user,isUserLoading} = useAuthFromCookie();
    const [isLoading,setIsloading] = useState(true);
    const [errMessage,setErrMessage] = useState("");
    const [confiemStatus,setConfiemStatus] = useState(false);
    const {payment_intent,redirect_status,package_id} = router.query;
console.log(router.query);
    useEffect(()=>{
        const abortController = new AbortController();
        if (payment_intent && user.token) {
            setIsloading(true)
            // fetch the payment_intent id to database update thaat payment is complete and active the package
            fetch(`/api/v1/payment/methods/stripe/${payment_intent}`,{
                method:"POST",
                signal: abortController.signal,
                headers:{'content-type':"application/json"},
                body:JSON.stringify({package_id,payment_intent})
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
                if (data.modifiedCount > 0) {
    
                }else{
    
                }
            })
            .catch(err=>{
                console.log(err);
            })
            .finally(()=>setIsloading(false))
        }
        
        return () =>{ abortController.abort()}
    },[user.token,payment_intent])

    return (
        <MainLayout>
             <PrivateComponent>
                <h1>Your Purchase is Status</h1>
                {
                    confiemStatus 
                        ?    <div className={`d-flex justifyCenter`}>
                                <div className={paymentST.purchase_success_card}>
                                    <div className={`d-flex justifyCenter`}>
                                        <Image src={purchaseSuccessImg} width={250} height={200} alt="payment successful"></Image>
                                    </div>
                                    <div className={`text-center ${paymentST.purchase_card_content}`}>
                                        <h2 className={`p-1`}>Purchase Successful</h2>
                                        <p>Your payment was successful! you can now continue using SpeakUP_AI</p>
                                    </div>
                                    <div className={`text-center ${paymentST.purchase_card_content}`}>
                                        <NavLink href={`/dashboard/purchases`} passHref={true}><button className={`p-4`}>Go to Dashboard</button></NavLink>
                                        
                                    </div>
                                </div>
                            </div>
                        :   <h3>Loading........ Need to Update the Purchased package by matching with straipe data with mongo data</h3>
                }
                
             </PrivateComponent>
        </MainLayout>
    );
};

export default Confirm;